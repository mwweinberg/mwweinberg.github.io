---
layout: post
category: blog
title: Licenses are Not Proxies for Openness in AI Models
date: 2024-03-26
tags:
- ai
- copyright
- opensourcehardware
image:
     feature: examination.jpg

---

Earlier this year, the National Telecommunications and Information Administration (NTIA) requested comment on a [number of questions](https://www.ntia.gov/federal-register-notice/2024/dual-use-foundation-artificial-intelligence-models-widely-available) related to what it is calling “open foundational models.”  This represents the US Government starting to think about what “open” means in the context of AI and machine learning.

The definition of open in the context of AI and machine learning is more complicated than it is in software, and I assume that many people are going to submit many interesting comments as part of the docket.  

I also submitted a [short comment](/docs/WeinbergNTIAOpenModelComment20240327.pdf).  It focused on a comparatively narrow issue: whether or not it makes sense to use licenses as an easy way to test for openness in the context of AI models.  I argued that it does not, at least not right now.

There are many situations where licenses are used as proxies for “open”.  A funder might require all software to be released under an [OSI-approved open source software license](https://opensource.org/licenses), or that a journal article be released under a [Creative Commons license](https://creativecommons.org/licenses/list.en). In these cases, using the license is essentially an easy way to confirm that the thing being released really is open.

At a basic level, these systems work because of two things: 1) the thing being licensed is relatively discrete, and 2) the licenses used are mature and widely adopted within the community.

Open source hardware acts as a helpful contrast to these other examples.  Unlike a software repo or journal article, what constitutes “hardware” can be complex - it might include the hardware itself, digital design files, documentation/instructions, and software.  All of these may be packaged differently in different places.

Each of these elements may also have a different relationship with intellectual property protections, especially copyright.  We have some mature open hardware licenses, but they are relatively recent and even they embody questions and gray areas related to what they do and do not control when it comes to any specific piece of hardware.

My comment suggests that open ML models are much more like open hardware than open software.  The community does not really have a consensus definition of what “open” even means in the context of AI models (freely available weights? code? training data?), let alone how (and if) those elements might need to be licensed.  

In light of this, it would be unwise to build a definition of open foundational models that would allow “just use this license” to be an easy way to comply. There might be a day when consensus definitions are established and licenses are mature. Until then, any definition of open should require a more complex analysis than simply looking at a license. 


*Header image: [Physical Examination](https://www.si.edu/object/physical-examination:saam_1965.18.60) from the Smithsonian's National Portrait Gallery*
