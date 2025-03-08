---
layout: post
category: blog
title: Pi-Powered Berlin BVG Alerts
date: 2025-03-08
tags:
- projects
- python
image:
     feature: bvg_light.png

---

Moving from NYC to Berlin gave me an excuse to update my old [Pi-Powered MTA Subway Alerts](https://michaelweinberg.org/post/171963532565/pi-powered-mta-subway-alerts) project for the BVG.  Now, as then, the goal of the project is to answer the question “if I leave my house now, how long will I have to wait for my subway train?”.  Although, in this case, instead of just answering that question about the subway train, it also answers it for trams.

The full repo is available [here](https://github.com/mwweinberg/bvg_lights).  

The project uses a raspberry pi zero to connect to the BVG real time arrival data with neopixels.  The neopixels give you an indication of how far trains are away from the station. Importantly, the alerts are  not based on the absolute time until the train arrives at the station (”A train will arrive at the station in 5 minutes”).  Instead, the alerts are aware of how long it takes to walk to the station from my apartment and are therefore based on the time from the station when you get there (”If you leave now and walk to the station, there will be a train arriving in the station 5 minutes after you get there.”).

![image of indicator light, with led strips for each line and text explaining what some of the lights represent](/images/bvg_light_annotated.png)

For example, the strip coming down from the top represents the southbound M10 tram.  The light at the bottom of that strip (the light closest to the center) will be on when the tram is coming "now," with "now" being defined as "if you leave the apartment now and start walking towards the station, the tram will be at the platform when you get there." Similarly, "2 minutes" means "you can wait 2 minutes to leave" or "you will wait at the station for 2 minutes if you leave now." 

Everything is basically the same as the MTA version of the project, except that I am using a strip of LEDs instead of individually soldering them. This is much easier!

## Install Neopixels on Pi 

There are some tricks to setting up the neopixels to work on the pi.  Here are the steps, which are spread across a few adafruit explainers:

1. Install blinka library to be able to use circutpython : 
[https://learn.adafruit.com/circuitpython-on-raspberrypi-linux/installing-circuitpython-on-raspberry-pi](https://learn.adafruit.com/circuitpython-on-raspberrypi-linux/installing-circuitpython-on-raspberry-pi)
(You need to turn on the virtual environment every time: `source env/bin/activate`)

2. install neopixel library:
[https://learn.adafruit.com/neopixels-on-raspberry-pi/python-usage](https://learn.adafruit.com/neopixels-on-raspberry-pi/python-usage)

3. do the things required to use sudo for the neopixel library:
[https://learn.adafruit.com/python-virtual-environment-usage-on-raspberry-pi/usage-with-sudo](https://learn.adafruit.com/python-virtual-environment-usage-on-raspberry-pi/usage-with-sudo)
(`sudo -E env PATH=$PATH python3 neo_test.py`)

4. make it run at startup:
[https://learn.adafruit.com/python-virtual-environment-usage-on-raspberry-pi/automatically-running-at-boot](https://learn.adafruit.com/python-virtual-environment-usage-on-raspberry-pi/automatically-running-at-boot)

## The Code 

The code starts with a bunch of settings, including the station you are pulling data about, how long it takes to get from wherever you are to the platforms, and lists for the lines you are tracking.

### grabber()

After that, the code is basically two functions. `grabber()` gets all of the departure times related to the lines and puts them in the lists.  Before putting each departure time in the list, it adjusts it based on the travel time. For example, if your `tram_walk_time` is `6` and a tram is scheduled to leave in 10 minutes, `grabber()` will add it to the list as `4` because, by the time you walk to the station, the train will be leaving in 4 minutes. 

If you are customizing this, you will need to update all of the if statements that parse the train info so they are pulling data for the correct lines and directions.  For example, here is the if statement for the U5:

```python
if i['line']['name'] == 'U5':
     if i['direction'] == 'Hönow':
          u5_eastbound.append(get_modified_departure_time(i['when'], i['line']['productName']))
     elif i['direction'] == "S+U Hauptbahnhof" or "Hauptbahnhof":
          u5_westbound.append(get_modified_departure_time(i['when'], i['line']['productName']))
     else:
          error_direction = i['direction']
          print(f'unexpected U5 direction: {error_direction}')
```

first it finds all of the entries for the U5:

`if i['line']['name'] == 'U5':`

then it looks for trains in the direction of Hönow:

`if i['direction'] == 'Hönow':`

then it runs the `get_modified_departure_time()` function to get the modified departure time (the actual departure time modified by how long it takes to get to the station) and appends it to the `u5_eastbound` list created at the top of the script.

The same thing happens for trains headed towards Hauptbahnhof, with an error message if something goes wrong.

Once `grabber()` is done, each of the line lists are full of modified times for trains.

### lighter()

The second function, `lighter()` uses the lists to light up the neopixels.  The logic for which lights turn on based on the train time is in this block of code:

```python
for i in arrival_list:
     if 0 <= i <= 1:
          #light the corresponding light
          pixels[light_1] = light_color
          #remove the light from the list so it does not go black
          if light_1 in light_list: light_list.remove(light_1)
     elif 2 <= i <= 3:
          pixels[light_2] = light_color
          if light_2 in light_list: light_list.remove(light_2)
     elif 4 <= i <= 7:
          pixels[light_3] = light_color
          if light_3 in light_list: light_list.remove(light_3)
     elif 8 <= i <= 12:
          pixels[light_4] = light_color
          if light_4 in light_list: light_list.remove(light_4)
     elif 13 <= i <= 20:
          pixels[light_5] = light_color
          if light_5 in light_list: light_list.remove(light_5)
     else:
          pass 
```

You can set the bands to be whatever you want by changing the values on the `elif` lines. For example

```python
elif 2 <= i <= 3:
     pixels[light_2] = light_color
     if light_2 in light_list: light_list.remove(light_2)
```

means that if the train arrival time is between 2 and 3 minutes away (`elif 2 <= i <= 3:`), the second light for the line will turn on the appropriate color (`pixels[light_2] = light_color`).  You could change `elif 2 <= i <= 3:` to `elif 1 <= i <= 10:` if you wanted a wider band or whatever.

### The Loop

Now that the functions are set, the script just loops.

First it checks the current time:

`now_time = datetime.now()`

I only need the lights running during the day, so it then checks to see if the current time is between 8am and 10pm:

`if 8 <= now_time.hour < 22:`

If it is, it runs `grabber()` and then `lighter()` for all of the lines.  In addition to giving `lighter()` the line argument, it identifies which actual pixel in the strip is the "first," "second," etc. pixel for that color.  The strip is continuous, so the 15th pixel in an absolute sense might be the first pixel in the U5 westbound set of lights.

`lighter(u5_westbound, 'u5', 15, 16, 17, 18, 19)`

If it is not during the day, the pixels all turn off:

```python
else:	
     #turn them off 
     for i in range(number_of_pixels):
          pixels[i] = (0,0,0)
     print('lights out')
```

Finally, the script waits for 10 seconds before doing it all again:

`time.sleep(10)`

that seems long enough to keep the data reasonably accurate without hammering the bvg servers.