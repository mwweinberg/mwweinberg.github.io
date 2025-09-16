---
layout: post
category: blog
title: The Most Popular Open Source Hardware Licenses (2016-2024)
date: 2025-11-11
tags:
- copyright
- opensourcehardware
image:
     feature: shop.png

---

What are the most popular open source hardware licenses? How has that popularity changed over time? Is there anything to be learned from the ups and downs of various licenses? 

My modern mind, like yours, had these [three questions](https://youtu.be/DQaF4YXCXsc?feature=shared&t=20). Fortunately, the OSHWA [Open Source Hardware Certification API](https://certificationapi.oshwa.org/documentation) makes it possible to start answering them.  This post has leaderboards for all of the licenses used for certified hardware, as well as hardware, software, and documentation specific leaderboards.  I'm not sure if there is a revelatory take away from them right now, but the leaderboards may be helpful in the future.

If you don't want to deal with that API, you can find the raw data from this post (and some tools for working with them) in [this repo]().

## The Nature of This Data and How It Evolves Over Time

Before getting to the leaderboards, I want to put the data into context. 

This data comes from OSHWA's [Open Hardware Certification Directory](https://certification.oshwa.org/list.html). As part of the [certification application form](https://application.oshwa.org/apply), OSHWA asks for information about three separate licenses: 
- the license for the hardware, 
- the license for the documentation, and 
- the license for the software (if any) 

([here's a quick a dirty guide to open source hardware licensing](https://michaelweinberg.org/post/166125363755/a-quick-and-dirty-guide-to-open-source-hardware) with a bit more)  

This structure is designed to give creators flexibility. If they want to use a single license for the entire bundle, they can do so.  Alternatively, if they want to use element-specific licenses, they can do so as well.  

Some people use this flexibility to use licenses designed with each element of the bundle in mind. For example, they will use a Creative Commons license for the project documentation, a well known open source software license for the software, and a hardware-specific license for the hardware.

Others just use a single license to cover everything. Sometimes that is fine — the CERN licenses are designed to be a single license to cover all elements of open hardware.  Other times it is fine-ish — most open source software licenses were not written with hardware in mind.  Using them for hardware isn't great, but they are certainly better than nothing. 

This can get moderately more complex when people use the CERN open hardware licenses for the hardware, and other licenses for other elements. The CERN licenses are designed to cover everything in the project bundle.  When people use additional licenses for other elements (say, an open source software license for the software), I think the best reading is that they are actually dual licensing that element under both licenses.  Of course, I doubt most people spend very much time thinking about that, and I don't think it is particularly relevant to the analysis here. 

Finally, there is no guarantee that the choices registered in the Certification Directory match the license(s) used in the repo or other documentation.  The certification review process requires that the repo and documentation contain licenses that meet the [Open Hardware Definition](https://oshwa.org/resources/open-source-hardware-definition/).  If the repo contains licenses that differ from the licenses identified in the application, I think it is reasonable to treat the hardware as licensed under both licenses simultaneously. 

### The Data Evolves

While this post contains data all the way back to 2016, the categories represented in the data are not static.  

The directory started with somewhat informal and imprecise license categories (`GPL` or `CC-BY`).  In 2022 OSHWA upgraded to [SPDX identifiers](https://spdx.org/licenses/) for the licenses.  These identifiers are standardized ways to identify licenses, and are more specific than the terms being used earlier.  OSHWA retained some non-SPDX identifiers as legacy options (for example, `GPL` or `CERN`) but moved them to the bottom of the dropdown menu below "other" to discourage their use when an SPDX alternative existed.   That means that you can trace `GPL` back to 2016, but `GPL-3.0-or-later` only starts in 2022.

In addition to this evolution of terminology, in 2021 OSHWA added the then newly-released CERN v2 licenses.  That means all of the `CERN` licenses prior to 2021 are `CERN v1`.

The trends are also slightly skewed in 2020 and 2021.  OSHWA saw a general increase in certifications during these pandemic years, lead by a concerted effort by one party (Adafruit) to certify a large number of pieces of hardware.  The number of certifications obtained by Adafruit during that period are likely enough to skew license patterns to match its practices for those years.  

Finally, the act of compiling data for this post made me realize that OSHWA did not include `MIT` licensing options for hardware and documentation. Whatever its possible limitations as a license applied to these things, it is often used by creators who simply add a single license to their repo.  Therefore, `MIT` is now an option for those elements. This will likely reduce the number of `other` license selections over time. 

# All Licenses

This first group aggregates all of the licenses used across all categories (hardware, software, and documentation).  This aggregation makes it more likely that licenses popular with creators who pick one license for all three components will be at the top. Historically, these have tended to be well known open source software and Creative Commons licenses. However, we are seeing the persistent growth of the CERN licenses.

## All Licenses 2024
|License|Total|Rank|Previous Rank| 
 |------|:-----:|:----:|:-----:|
|CC-BY-SA-4.0|237|1|7 &#9650;|
|Other|108|2|3 &#9650;|
|MIT|103|3|2 &#9660;|
|GPL-3.0-or-later|100|4|10 &#9650;|
|CERN-OHL-S-2.0|90|5|9 &#9650;|
|CC BY-SA|90|6|1 &#9660;|
|No software|51|7|5 &#9660;|
|CC-BY-4.0|31|8|11 &#9650;|
|CERN-OHL-P-2.0|28|9|12 &#9650;|
|GPL-3.0-only|25|10|13 &#9650;|
|CERN-OHL-W-2.0|19|11|15 &#9650;|
|GPL|15|12|8 &#9660;|
|CERN-OHL-1.2|14|13|18 &#9650;|
|CC0-1.0|11|14|16 &#9650;|
|Apache|10|15|14 &#9660;|
|TAPR|9|16|6 &#9660;|
|CC BY|9|17|17|
|CERN|5|18|4 &#9660;|
|LGPL|2|19|21 &#9650;|
|Mozilla|2|20||
|CC 0|1|21|19 &#9660;|
## All Licenses 2023
|License|Total|Rank|Previous Rank| 
 |------|:-----:|:----:|:-----:|
|CC BY-SA|485|1|3 &#9650;|
|MIT|401|2|2|
|Other|256|3|1 &#9660;|
|CERN|195|4|15 &#9650;|
|No software|114|5|7 &#9650;|
|TAPR|110|6|20 &#9650;|
|CC-BY-SA-4.0|93|7|4 &#9660;|
|GPL|77|8|10 &#9650;|
|CERN-OHL-S-2.0|72|9|5 &#9660;|
|GPL-3.0-or-later|62|10|8 &#9660;|
|CC-BY-4.0|36|11|6 &#9660;|
|CERN-OHL-P-2.0|28|12|9 &#9660;|
|GPL-3.0-only|20|13|12 &#9660;|
|Apache|14|14|17 &#9650;|
|CERN-OHL-W-2.0|12|15|11 &#9660;|
|CC0-1.0|11|16|16|
|CC BY|10|17|14 &#9660;|
|CERN-OHL-1.2|10|18|13 &#9660;|
|CC 0|6|19||
|Solderpad|3|20|18 &#9660;|
|LGPL|1|21|19 &#9660;|
## All Licenses 2022
|License|Total|Rank|Previous Rank| 
 |------|:-----:|:----:|:-----:|
|Other|115|1|4 &#9650;|
|MIT|98|2|2|
|CC BY-SA|85|3|1 &#9660;|
|CC-BY-SA-4.0|74|4||
|CERN-OHL-S-2.0|57|5|8 &#9650;|
|CC-BY-4.0|39|6||
|No software|38|7|6 &#9660;|
|GPL-3.0-or-later|36|8||
|CERN-OHL-P-2.0|34|9|12 &#9650;|
|GPL|26|10|5 &#9660;|
|CERN-OHL-W-2.0|20|11|14 &#9650;|
|GPL-3.0-only|14|12||
|CERN-OHL-1.2|9|13|9 &#9660;|
|CC BY|9|14|7 &#9660;|
|CERN|8|15|3 &#9660;|
|CC0-1.0|7|16||
|Apache|4|17|11 &#9660;|
|Solderpad|2|18|10 &#9660;|
|LGPL|2|19|15 &#9660;|
|TAPR|1|20|13 &#9660;|
## All Licenses 2021
|License|Total|Rank|Previous Rank| 
 |------|:-----:|:----:|:-----:|
|CC BY-SA|311|1|1|
|MIT|232|2|2|
|CERN|195|3|4 &#9650;|
|Other|186|4|3 &#9660;|
|GPL|67|5|7 &#9650;|
|No software|60|6|5 &#9660;|
|CC BY|32|7|6 &#9660;|
|CERN-OHL-S-2.0|17|8||
|CERN-OHL-1.2|16|9||
|Solderpad|11|10|12 &#9650;|
|Apache|10|11|11|
|CERN-OHL-P-2.0|8|12||
|TAPR|8|13|10 &#9660;|
|CERN-OHL-W-2.0|8|14||
|LGPL|7|15|8 &#9660;|
|CC 0|7|16|9 &#9660;|
|Mozilla|1|17||
## All Licenses 2020
|License|Total|Rank|Previous Rank| 
 |------|:-----:|:----:|:-----:|
|CC BY-SA|844|1|2 &#9650;|
|MIT|708|2|6 &#9650;|
|Other|621|3|1 &#9660;|
|CERN|397|4|4|
|No software|147|5|5|
|CC BY|60|6|7 &#9650;|
|GPL|59|7|3 &#9660;|
|LGPL|14|8|10 &#9650;|
|CC 0|9|9|11 &#9650;|
|TAPR|6|10|9 &#9660;|
|Apache|4|11|8 &#9660;|
|Solderpad|2|12||
## All Licenses 2019
|License|Total|Rank|Previous Rank| 
 |------|:-----:|:----:|:-----:|
|Other|130|1|1|
|CC BY-SA|90|2|2|
|GPL|68|3|4 &#9650;|
|CERN|37|4|5 &#9650;|
|No software|35|5|3 &#9660;|
|MIT|16|6|6|
|CC BY|11|7|10 &#9650;|
|Apache|8|8|9 &#9650;|
|TAPR|5|9|8 &#9660;|
|LGPL|3|10|7 &#9660;|
|CC 0|2|11||
## All Licenses 2018
|License|Total|Rank|Previous Rank| 
 |------|:-----:|:----:|:-----:|
|Other|159|1|1|
|CC BY-SA|62|2|2|
|No software|30|3|3|
|GPL|22|4|5 &#9650;|
|CERN|13|5|4 &#9660;|
|MIT|6|6|6|
|LGPL|5|7||
|TAPR|3|8||
|Apache|2|9|8 &#9660;|
|CC BY|2|10|7 &#9660;|
|GPL-3.0-only|2|11||
## All Licenses 2017
|License|Total|Rank|Previous Rank| 
 |------|:-----:|:----:|:-----:|
|Other|80|1|1|
|CC BY-SA|20|2|2|
|No software|10|3|5 &#9650;|
|CERN|10|4|6 &#9650;|
|GPL|8|5|3 &#9660;|
|MIT|7|6|4 &#9660;|
|CC BY|5|7|7|
|Apache|1|8|8|
## All Licenses 2016
|License|Total|Rank|Previous Rank| 
 |------|:-----:|:----:|:-----:|
|Other|144|1||
|CC BY-SA|60|2||
|GPL|21|3||
|MIT|13|4||
|No software|7|5||
|CERN|6|6||
|CC BY|4|7||
|Apache|2|8||
|LGPL|2|9||
|TAPR|2|10||

# Hardware Licenses

These charts track the growth of the licenses applied to hardware.  As mentioned above, the strength of `Other` on the list likely represents creators who chose a single open source software license for their entire project. The hardware license dropdown does not include most open source software licenses, so those creators will choose `Other` here.  With `MIT` included as an option as of August of 2025, 2025 and 2026 data will hopefully begin to disambiguate that category.

Both CERN and Creative Commons licenses remain popular choices over time.  While older hardware-oriented licenses such as TAPR and Solderpad do not have the same level of popularity, they continue to have users.

## Hardware Licenses 2024
|License|Total|Rank|Previous Rank| 
 |------|:-----:|:----:|:-----:|
|Other|87|1|1|
|CERN-OHL-S-2.0|77|2|4 &#9650;|
|CC-BY-SA-4.0|60|3|5 &#9650;|
|CERN-OHL-P-2.0|19|4|6 &#9650;|
|CERN-OHL-W-2.0|15|5|8 &#9650;|
|CERN-OHL-1.2|14|6|9 &#9650;|
|GPL-3.0-or-later|13|7|7|
|CC-BY-4.0|10|8|10 &#9650;|
|TAPR|9|9|3 &#9660;|
|GPL-3.0-only|6|10|11 &#9650;|
|CERN|5|11|2 &#9660;|
|CC0-1.0|4|12|14 &#9650;|
|GPL|1|13|12 &#9660;|
## Hardware Licenses 2023
|License|Total|Rank|Previous Rank| 
 |------|:-----:|:----:|:-----:|
|Other|211|1|1|
|CERN|195|2|8 &#9650;|
|TAPR|110|3|14 &#9650;|
|CERN-OHL-S-2.0|52|4|2 &#9660;|
|CC-BY-SA-4.0|32|5|4 &#9660;|
|CERN-OHL-P-2.0|20|6|3 &#9660;|
|GPL-3.0-or-later|13|7|9 &#9650;|
|CERN-OHL-W-2.0|10|8|5 &#9660;|
|CERN-OHL-1.2|10|9|7 &#9660;|
|CC-BY-4.0|7|10|6 &#9660;|
|GPL-3.0-only|4|11|11|
|GPL|3|12|10 &#9660;|
|Solderpad|3|13|13|
|CC0-1.0|2|14|12 &#9660;|
## Hardware Licenses 2022
|License|Total|Rank|Previous Rank| 
 |------|:-----:|:----:|:-----:|
|Other|83|1|2 &#9650;|
|CERN-OHL-S-2.0|36|2|4 &#9650;|
|CERN-OHL-P-2.0|26|3|6 &#9650;|
|CC-BY-SA-4.0|25|4||
|CERN-OHL-W-2.0|12|5|8 &#9650;|
|CC-BY-4.0|9|6||
|CERN-OHL-1.2|9|7|3 &#9660;|
|CERN|8|8|1 &#9660;|
|GPL-3.0-or-later|7|9||
|GPL|3|10||
|GPL-3.0-only|3|11||
|CC0-1.0|2|12||
|Solderpad|2|13|5 &#9660;|
|TAPR|1|14|7 &#9660;|
## Hardware Licenses 2021
|License|Total|Rank|Previous Rank| 
 |------|:-----:|:----:|:-----:|
|CERN|195|1|2 &#9650;|
|Other|133|2|1 &#9660;|
|CERN-OHL-1.2|16|3||
|CERN-OHL-S-2.0|14|4||
|Solderpad|11|5|4 &#9660;|
|CERN-OHL-P-2.0|8|6||
|TAPR|8|7|3 &#9660;|
|CERN-OHL-W-2.0|7|8||
## Hardware Licenses 2020
|License|Total|Rank|Previous Rank| 
 |------|:-----:|:----:|:-----:|
|Other|552|1|1|
|CERN|397|2|2|
|TAPR|6|3|3|
|Solderpad|2|4||
## Hardware Licenses 2019
|License|Total|Rank|Previous Rank| 
 |------|:-----:|:----:|:-----:|
|Other|93|1|1|
|CERN|37|2|2|
|TAPR|5|3|3|
## Hardware Licenses 2018
|License|Total|Rank|Previous Rank| 
 |------|:-----:|:----:|:-----:|
|Other|86|1|1|
|CERN|13|2|2|
|TAPR|3|3||
## Hardware Licenses 2017
|License|Total|Rank|Previous Rank| 
 |------|:-----:|:----:|:-----:|
|Other|37|1|1|
|CERN|10|2|2|
## Hardware Licenses 2016
|License|Total|Rank|Previous Rank| 
 |------|:-----:|:----:|:-----:|
|Other|79|1||
|CERN|6|2||
|TAPR|2|3||

# Software Licenses

It should come as no surprise that traditional open source software licenses dominate this list, with MIT and GPL at the top. Given how relatively popular the CERN licenses are for hardware, and the fact that the CERN licenses include software within its definition of "source," it is notable how low the CERN licenses rank in these charts.  This may mean that people are deciding to use a different, additional license for their software. It may also mean that OSHWA certifiers are more fluent in open source software licenses, and are therefore comfortable with the idea of picking a different license for their software.

The other notable entry on the list is the `No software` option.  This likely reflects two factors. First, many certified projects are relatively simple boards that do not need additional firmware (or simply use widely available open source firmware maintained by others). Second, there is a lot of certified open source hardware that is not electronics! 

## Software Licenses 2024
|License|Total|Rank|Previous Rank| 
 |------|:-----:|:----:|:-----:|
|MIT|103|1|1|
|GPL-3.0-or-later|71|2|4 &#9650;|
|No software|51|3|2 &#9660;|
|CC-BY-SA-4.0|43|4|9 &#9650;|
|Apache|10|5|5|
|GPL-3.0-only|10|6|7 &#9650;|
|GPL|10|7|3 &#9660;|
|Other|6|8|6 &#9660;|
|CERN-OHL-P-2.0|4|9|11 &#9650;|
|CC-BY-4.0|4|10|10|
|CERN-OHL-S-2.0|3|11|8 &#9660;|
|LGPL|2|12|14 &#9650;|
|Mozilla|2|13||
|CERN-OHL-W-2.0|1|14|12 &#9660;|
## Software Licenses 2023
|License|Total|Rank|Previous Rank| 
 |------|:-----:|:----:|:-----:|
|MIT|401|1|1|
|No software|114|2|2|
|GPL|68|3|4 &#9650;|
|GPL-3.0-or-later|32|4|3 &#9660;|
|Apache|14|5|9 &#9650;|
|Other|12|6|6|
|GPL-3.0-only|9|7|5 &#9660;|
|CERN-OHL-S-2.0|7|8|8|
|CC-BY-SA-4.0|6|9|7 &#9660;|
|CC-BY-4.0|4|10|12 &#9650;|
|CERN-OHL-P-2.0|2|11|11|
|CERN-OHL-W-2.0|1|12|10 &#9660;|
|CC0-1.0|1|13|14 &#9650;|
|LGPL|1|14|13 &#9660;|
## Software Licenses 2022
|License|Total|Rank|Previous Rank| 
 |------|:-----:|:----:|:-----:|
|MIT|98|1|1|
|No software|38|2|3 &#9650;|
|GPL-3.0-or-later|23|3||
|GPL|20|4|2 &#9660;|
|GPL-3.0-only|9|5||
|Other|9|6|4 &#9660;|
|CC-BY-SA-4.0|8|7||
|CERN-OHL-S-2.0|7|8|8|
|Apache|4|9|5 &#9660;|
|CERN-OHL-W-2.0|3|10||
|CERN-OHL-P-2.0|2|11||
|CC-BY-4.0|2|12||
|LGPL|2|13|6 &#9660;|
|CC0-1.0|1|14||
## Software Licenses 2021
|License|Total|Rank|Previous Rank| 
 |------|:-----:|:----:|:-----:|
|MIT|232|1|1|
|GPL|67|2|3 &#9650;|
|No software|60|3|2 &#9660;|
|Other|14|4|4|
|Apache|10|5|6 &#9650;|
|LGPL|7|6|5 &#9660;|
|Mozilla|1|7||
|CERN-OHL-S-2.0|1|8||
## Software Licenses 2020
|License|Total|Rank|Previous Rank| 
 |------|:-----:|:----:|:-----:|
|MIT|708|1|3 &#9650;|
|No software|147|2|2|
|GPL|59|3|1 &#9660;|
|Other|25|4|5 &#9650;|
|LGPL|14|5|6 &#9650;|
|Apache|4|6|4 &#9660;|
## Software Licenses 2019
|License|Total|Rank|Previous Rank| 
 |------|:-----:|:----:|:-----:|
|GPL|68|1|3 &#9650;|
|No software|35|2|2|
|MIT|16|3|4 &#9650;|
|Apache|8|4|6 &#9650;|
|Other|5|5|1 &#9660;|
|LGPL|3|6|5 &#9660;|
## Software Licenses 2018
|License|Total|Rank|Previous Rank| 
 |------|:-----:|:----:|:-----:|
|Other|35|1|1|
|No software|30|2|2|
|GPL|22|3|3|
|MIT|6|4|4|
|LGPL|5|5||
|Apache|2|6|5 &#9660;|
|GPL-3.0-only|2|7||
## Software Licenses 2017
|License|Total|Rank|Previous Rank| 
 |------|:-----:|:----:|:-----:|
|Other|21|1|1|
|No software|10|2|4 &#9650;|
|GPL|8|3|2 &#9660;|
|MIT|7|4|3 &#9660;|
|Apache|1|5|5|
## Software Licenses 2016
|License|Total|Rank|Previous Rank| 
 |------|:-----:|:----:|:-----:|
|Other|42|1||
|GPL|21|2||
|MIT|13|3||
|No software|7|4||
|Apache|2|5||
|LGPL|2|6||

# Documentation Licenses

The documentation license charts are essentially a mirror image of the software license charts.  Well known Creative Commons licenses dominate, with notable appearances by popular open source software licenses that are presumably applied globally to all elements of the hardware. The CERN licenses are also well represented, with a similar proviso to the software section: CERN licenses applied to hardware also cover any documentation required to make, test, or prepare the hardware for use. That's not quite as expansive as its coverage with regard to software, but it still probably sweeps in a decent portion of most documentation. 

## Documentation Licenses 2024
|License|Total|Rank|Previous Rank| 
 |------|:-----:|:----:|:-----:|
|CC-BY-SA-4.0|134|1|2 &#9650;|
|CC BY-SA|90|2|1 &#9660;|
|CC-BY-4.0|17|3|4 &#9650;|
|GPL-3.0-or-later|16|4|5 &#9650;|
|Other|15|5|3 &#9660;|
|CERN-OHL-S-2.0|10|6|6|
|CC BY|9|7|7|
|GPL-3.0-only|9|8|9 &#9650;|
|CC0-1.0|7|9|8 &#9660;|
|CERN-OHL-P-2.0|5|10|11 &#9650;|
|GPL|4|11|10 &#9660;|
|CERN-OHL-W-2.0|3|12|13 &#9650;|
|CC 0|1|13|12 &#9660;|
## Documentation Licenses 2023
|License|Total|Rank|Previous Rank| 
 |------|:-----:|:----:|:-----:|
|CC BY-SA|485|1|1|
|CC-BY-SA-4.0|55|2|2|
|Other|33|3|4 &#9650;|
|CC-BY-4.0|25|4|3 &#9660;|
|GPL-3.0-or-later|17|5|8 &#9650;|
|CERN-OHL-S-2.0|13|6|5 &#9660;|
|CC BY|10|7|6 &#9660;|
|CC0-1.0|8|8|10 &#9650;|
|GPL-3.0-only|7|9|12 &#9650;|
|GPL|6|10|11 &#9650;|
|CERN-OHL-P-2.0|6|11|7 &#9660;|
|CC 0|6|12||
|CERN-OHL-W-2.0|1|13|9 &#9660;|
## Documentation Licenses 2022
|License|Total|Rank|Previous Rank| 
 |------|:-----:|:----:|:-----:|
|CC BY-SA|85|1|1|
|CC-BY-SA-4.0|41|2||
|CC-BY-4.0|28|3||
|Other|23|4|2 &#9660;|
|CERN-OHL-S-2.0|14|5|5|
|CC BY|9|6|3 &#9660;|
|CERN-OHL-P-2.0|6|7||
|GPL-3.0-or-later|6|8||
|CERN-OHL-W-2.0|5|9|6 &#9660;|
|CC0-1.0|4|10||
|GPL|3|11||
|GPL-3.0-only|2|12||
## Documentation Licenses 2021
|License|Total|Rank|Previous Rank| 
 |------|:-----:|:----:|:-----:|
|CC BY-SA|311|1|1|
|Other|39|2|3 &#9650;|
|CC BY|32|3|2 &#9660;|
|CC 0|7|4|4|
|CERN-OHL-S-2.0|2|5||
|CERN-OHL-W-2.0|1|6||
## Documentation Licenses 2020
|License|Total|Rank|Previous Rank| 
 |------|:-----:|:----:|:-----:|
|CC BY-SA|844|1|1|
|CC BY|60|2|3 &#9650;|
|Other|44|3|2 &#9660;|
|CC 0|9|4|4|
## Documentation Licenses 2019
|License|Total|Rank|Previous Rank| 
 |------|:-----:|:----:|:-----:|
|CC BY-SA|90|1|1|
|Other|32|2|2|
|CC BY|11|3|3|
|CC 0|2|4||
## Documentation Licenses 2018
|License|Total|Rank|Previous Rank| 
 |------|:-----:|:----:|:-----:|
|CC BY-SA|62|1|2 &#9650;|
|Other|38|2|1 &#9660;|
|CC BY|2|3|3|
## Documentation Licenses 2017
|License|Total|Rank|Previous Rank| 
 |------|:-----:|:----:|:-----:|
|Other|22|1|2 &#9650;|
|CC BY-SA|20|2|1 &#9660;|
|CC BY|5|3|3|
## Documentation Licenses 2016
|License|Total|Rank|Previous Rank| 
 |------|:-----:|:----:|:-----:|
|CC BY-SA|60|1||
|Other|23|2||
|CC BY|4|3||



_Feature image: [Shop Scene](https://www.si.edu/object/shop-scene:chndm_1921-6-201-109) from the Smithsonian Open Access collection_