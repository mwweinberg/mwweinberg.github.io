---
layout: post
category: blog
title: Is the Arduino Uno Q Open Source Hardware?
date: 2025-10-24
tags:
- copyright
- opensourcehardware
image:
     feature: electricity_for_everybody.png

---

Earlier this month, Arduino [announced a new Arduino Uno Q](https://hackaday.com/2025/10/07/qualcomm-introduces-the-arduino-uno-q-linux-capable-sbc/) board as part of its acquisition by Qualcomm.  Is this new board open source?  It is kind of hard to say, which is exactly why the [OSHWA Open Source Hardware Certification](https://certification.oshwa.org/) exists. 

## What Do We Know?

Arduino is [marketing the new Q as “open source”](https://www.arduino.cc/product-uno-q):

![Is UNO Q open source? Yes, UNO Q schematics and gerbers are available under the CC-BY-S 4.0 license](/images/arduino-q-os.png)

And you can [download manufacturing files for the board](https://docs.arduino.cc/hardware/uno-q/), which are licensed under a CC BY-SA 4.0 license.  

However, unlike prior Arduino boards (such as the [Uno](https://docs.arduino.cc/hardware/uno-rev3/)), Arduino has not released editable design files for the Q. That means that, while some Q files are available and openly licensed, you cannot use those files to modify the board.

Why might this be relevant? The community [Open Hardware Definition](https://oshwa.org/resources/open-source-hardware-definition/) maintained by OSHWA requires:

> The documentation must include design files in the preferred format for making changes, for example the native file format of a CAD program. Deliberately obfuscated design files are not allowed. Intermediate forms analogous to compiled computer code — such as printer-ready copper artwork from a CAD program — are not allowed as substitutes.

I don’t know if Arduino intended to deliberately obfuscate the design files that it released, but the publicly available Q files are basically the “[i]ntermediate forms” called out in that definition.  Whatever the intention, Arduino’s release clearly fails the requirements of the community definition.

This means Arduino has a definition of “open source” that differs from the OSHWA definition. The difference might be confusing to some people. What can be done about that?   

## Enter the OSHWA Certification

This is exactly the type of situation that [motivated OSHWA to create the certification program in the first place](https://michaelweinberg.org/post/129796766675/what-oshwa-is-and-is-not-trying-to-do-with-the).  No one owns the term “open source,” so it can basically be used on anything to mean anything.  Sometimes it is used in different ways because people have a legitimate disagreement about what it should mean. Other times it is used in different ways because people are trying to open wash a product in bad faith. Regardless of the reason, it can be confusing.

Fortunately, while no one owns the term open source, OSHWA does own the open source hardware [certification logo](https://certification.oshwa.org/mark-usage.html), control UIDs, and control the [directory](https://certification.oshwa.org/list.html).  Although anyone can say something is “open source,” only things that meet the community definition of open source can be OSHWA certified as such.

Is someone making a claim to open source that feels questionable? If the hardware is OSWHA certified, you know that their definition of “open source” matches the community definition.  If it isn’t certified, it might be worth doing some additional digging.

## What About the Chips?

There is one other potentially important difference between the Uno and the Uno Q’s documentation.  The Uno’s [datasheet](https://docs.arduino.cc/resources/datasheets/A000066-datasheet.pdf) lists the ATMega328P as its processor, but does not include openly licensed, editable files for it.  That’s consistent with the Certification’s principle of [user contribution](https://certification.oshwa.org/basics/faq.html).  Arduino does not include openly licensed, editable files for the ATMega328P because it can’t - Arduino did not design those processors and does not have the legal authority to license them to others. Listing them is all that is required, in part because that is all they really can do. 

The Uno Q’s relationship to its processors are very different.  Its [datasheet](https://docs.arduino.cc/resources/datasheets/ABX00162-ABX00173-datasheet.pdf) lists a number of Qualcomm chips. Since Qualcomm owns Arduino, Arduino/Quamcomm does have the legal authority to release editable versions of those files and openly license them.  That makes the Qualcomm chips part of Arduino’s “user contribution”.  In order to be certified open, those chips would need to be openly licensed as well. 

## Sometimes Open Source Just Isn’t

Even in a world of openness ambiguity, sometimes it is very easy to determine if a claim of open source is bogus.  Take, for example this question and response in the [Q’s FAQs](https://www.arduino.cc/product-uno-q):

![Is UNO Q open source? Yes, UNO Q schematics and gerbers are available under the CC-BY-S 4.0 license](/images/arduino-lab-os.png)

If the question is “Is Arduino App Lab open source?,” and the response is “we are working to publish corresponding source code repositories,” then the actual answer to the question is “No.”  Or, at a minimum, “not yet”.  “Someday we hope to make this open source” is not the same as “open source”.  Which is fine!  Just, you know, describe the current situation accurately. 


_Feature image: [Electricity for Everybody cover](hhttps://www.metmuseum.org/art/collection/search/362329) from the Met's Open Access collection_