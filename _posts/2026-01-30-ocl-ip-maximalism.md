---
layout: post
category: blog
title: The Prusa Open Community License Embraces IP Maximalism
date: 2026-01-30
tags:
- 3dprinting
- opensourcehardware
image:
     feature: debate.jpg

---

This post was originally going to be a legal analysis of the [Open Community License](https://github.com/OpenCommunityLicence/OpenCommunityLicence) [released](https://blog.prusa3d.com/core-one-cad-files-release-under-the-new-open-community-license-ocl_127290/) by the 3D printer company Prusa Labs right before Christmas. That analysis may still come. (*update 3/19/26*: It does not need to come.  Kyle E. Mitchell did his [trademark Line by Line analysis of the license](https://writing.kemitchell.com/2026/03/16/Open-Community-License-1) so check it out.) 

However, after reviewing it, the legal specifics of the license are less important than the way it represents the relationship between open hardware and IP protections in general. The entire presentation suggests that Prusa has a legal ability to control uses it has no ability to control.  In addition to being an “open” license that does not meet any common definition of open, the Open Community License actually advances the cause of a more maximalist IP worldview.   

## Quick Background

Since 2023 Josef Průša, the eponymous founder of the 3D printing company Prusa Research, has been complaining about the state of open hardware (see, e.g. discussion [here](https://michaelweinberg.org/blog/2023/04/05/prusa-response/) and [here](https://michaelweinberg.org/blog/2024/11/21/what-does-company-owe-oshw/)).  These complaints have basically taken the form of asserting that open hardware does not work as a business anymore in blog posts framed as a “call for discussion,” and then ignoring even the [most basic clarifying questions](https://michaelweinberg.org/blog/2023/04/05/prusa-response/) designed to understand his concerns so they could be discussed.

At the very end of 2025, Prusa Research [announced](https://blog.prusa3d.com/core-one-cad-files-release-under-the-new-open-community-license-ocl_127290/) a new “[Open Commiunity License](https://github.com/OpenCommunityLicence/OpenCommunityLicence)” (OCL). That license attempts to restrict any commercial use of Prusa printers or designs, with the narrow exception of modifications that a commercial user may do to printers they only use internally.  This kind of commercial restriction runs counter to the understanding of openness embodied in both the [Open Source Definition](https://opensource.org/osd) and the [Open Source Hardware Definition](https://oshwa.org/resources/open-source-hardware-definition/).  It also purports to grant rights to modify hardware that people already have thanks to concepts like the [First Sale Doctrine](https://en.wikipedia.org/wiki/First-sale_doctrine). 

This post isn’t a legal analysis of the license itself, so for now I’ll just say that the license text feels a little underbaked, even if one were to be on board with its purported purpose.

## The Larger Issue - How the OCL Embraces IP Maximalism

The bigger issue with the license is that it is framed in a way that suggests Prusa has the ability to control the use of things it has no ability to control. Specifically, that it has rights over functional elements of its printers that are not protectable by copyright. 

### Not All Hardware is Protected by IP Rights

The thing that makes understanding open source hardware licensing challenging is the fact that hardware is not fully and automatically protected by any sort of IP right.  Software is categorically “[born closed](https://michaelweinberg.org/post/150123246460/the-cost-of-a-successful-creative-commons-and-open).”  It is completely protected by copyright the moment it is created. That means a) creators need to give formal permission (a license) for anyone else to build upon it, and b) that license covers the entire piece of software.

Some parts of open hardware (like the software that runs it) are also “born closed,” so users need permission (in the form of a license) to build upon it.  However, other parts of open hardware (like the functional, physical parts) are “born open”.  Those “born open” parts are open by default. There are no intellectual property rights restricting how they are used by others. No one needs a license to do anything with them, including just copying and reselling them. The creator of these elements does not have the legal power to dictate how they are (and are not) reproduced.  Some of these elements might be patentable, but that’s a whole other thing that is rarely relevant in open source hardware contexts. 

This can feel counterintuitive to anyone raised on open software. In fact, sometimes people suggest expanding IP rights to the functional parts of hardware *just so they can then be openly licensed*.  But (at least in my opinion) it would be perverse to expand IP rights in the name of openness. It is a good thing that many elements of open hardware are open by default. 

### Understanding the Limits of Licensing

The entire Open Community License enterprise falls into the trap of assuming that every element of a Prusa printer is protected by some kind of right, and that using or building on that element requires permission from Prusa.  

Prusa’s original complaints about open hardware were (as best as I could tell) focused on competitors copying functional elements of Prusa printers (like all of the mechanical parts).  Prusa claimed that this was because the elements were openly licensed. However, since the functional elements are not protected by any sort of IP right, they weren’t actually openly licensed. In fact, they weren’t licensed at all, because there were no underlying rights to license on any terms.  They were just available for anyone, including competitors, to do whatever they wanted with. No amount of closed “no copying” licensing language would change that. 

## Pretend IP Rights

The Open Community License converts this misunderstanding into legal-looking text.  The License’s announcement is tied to the release of the CAD files for the CORE One and CORE One L frames.  This announcement image is full of the kind of functional parts that are not eligible for copyright protection[^1]:

![expoded engineering diagram of a Prusa printer showing its physical components](/images/prusa_ocl_graphic.jpg)

To its credit, the license text explicitly limits its coverage to actual, existing IP rights:

> OCL pertains to intellectual property applied in licensor‘s products
and/or its components

Which is good except that, for the reasons just outlined, many readers (and maybe Prusa itself?) might assume that “intellectual property applied in licensor‘s products” is a much more expansive set of rights than it actually is.

This problem is exacerbated by the [examples directory](https://github.com/OpenCommunityLicence/OpenCommunityLicence/tree/main/examples) linked to by the license.  Presumably, this directory is intended to be something like the human-readable version of the terms.

Those examples are full of functional hardware elements that are simply not protected by intellectual property rights: a fan shroud (Scenario 1), a soldering iron (Scenario 1), a printing toolhead (Scenario 3 & 4), and replacement parts (Scenario 5 & 6).  The OCL can’t cover them, because they are categorically ineligible for the types of intellectual property rights that the OCL is designed to license.

As a result, everything about this license rollout, from the graphics, to the blog post explaining it, to the examples of how it should be used, imagines a world where copyright protects things that it simply does not protect.  Expanding copyright protection in this way would work against the concepts of sharing and collaboration that form the foundation of open communities.  

That is the real problem with the OCL.  Prusa is free to tell itself that saying “no copying” will stop competitors, and the internet is already full of half-baked partially open licenses.  The real damage comes from conditioning people to think that they need permission to use objects in the public domain.    


[^1]: Even if the parts themselves are not eligible for copyright protection, are the CAD files representing them copyrightable?  The answer to that is a lawyerly “it depends” (pages 14-17 of [this whitepaper](https://michaelweinberg.org/docs/WhatstheDealwithCopyright_%20Finalversion2.pdf) explore it a bit - I think the answer in many cases is “probably not”).  In some ways that makes the license more of a problem - in the face of ambiguity around the bounds of copyright protection for digital files that represent functional objects, it dumps its weight on the side of broader rights. 


_Feature image: [Political Discussion in a Lumber Shanty](https://www.si.edu/object/political-discussion-lumber-shanty:saam_1973.130.17) from the Smithsonian Open Access collection_
