---
layout: post
category: blog
title: AI-Assisted Library Rewriting and Relicensing Brings Open Source Software into the IP World of Open Source Hardware
date: 2026-03-30
tags:
- copyright
- opensourcehardware
image:
     feature: student-teacher.png

---

A dispute about a python library called chardet may be an early rumble of an earthquake in the world of open source software (OSS) and intellectual property law.  The incident exposes the potential fragility of the legal model underpinning OSS in the Large Language Model era.  Suddenly, open source hardware (OSHW)’s experience creating open works without comprehensive IP protections could have many lessons for OSS.

First, as usual, some context.

## LLM-Assisted Library Rewrite

Ars has a [good summary](https://arstechnica.com/ai/2026/03/ai-can-rewrite-open-source-code-but-can-it-rewrite-the-license-too/) of the precipitating incident.  Briefly, [chardet](https://github.com/chardet/chardet) is a python library released under the [LGPL](https://www.gnu.org/licenses/lgpl-3.0.en.html), which is a restrictive open source license. The current maintainer (who did not originally create the library) wanted to rewrite the library in order to release it under a more permissive [MIT](https://opensource.org/license/mit) license. Assisted by Claude Code, the maintainer rewrote the library with new code that replicated the library’s functionality.

The original creator of the library felt that this behavior violated the library’s license, effectively stripping the restrictive license from the project.  The current maintainer says that, while the new library maintains the functionality of the original, the new library does not copy any of the code from the original library. Since the code, and not the functionality, is what is protected by copyright and controlled by the license, the new version exists outside of the scope of the original license and can legally be licensed under different terms.

While the merits of this argument could be a blog post in and of itself, for the purposes of this post let’s just say that copyright on code pretty narrowly covers the actual code as actually written, and excludes the functionality that the code represents (see, e.g. *[Google v Oracle](https://en.wikipedia.org/wiki/Google_LLC_v._Oracle_America,_Inc.)*).  On balance, that is a good thing because it allows people to create their own implementations of functionality without worrying about a copyright lawsuit. It also means that the first person to write code that performs a given function (say, sorting a collection of numbers from lowest to highest) does not get to control every other piece of code that performs the same function for that first person’s entire life plus 70 years after they die.  Furthermore, it would be bad if we decided to expand the scope of software copyright in an attempt to make open source software licenses more robust. 

The upshot is that this incident demonstrates a new reality where it may be easier to copy the functionality of code in a way that does not infringe that code’s copyright than has generally been assumed.  This upends one of the core assumptions underpinning OSS.

## OSS and Copyright

This post will not rehash all of OSS and copyright.  Suffice it to say that the legal framework of OSS relies on one weird trick.  Software is [born closed](https://michaelweinberg.org/post/150123246460/the-cost-of-a-successful-creative-commons-and-open), automatically and completely protected by copyright the moment it is written.  Other people need permission (a license) to use that copyright-protected code. Instead of using a software license to keep software proprietary, OSS uses the licenses to impose what the community sees as pro-social obligations on users while broadly inviting reuse.  

This entire legal edifice assumes that someone who wants to use open source code needs to copy the code itself (which is protected by copyright, thus requiring a license), not just the conceptual features that the code represents (which are not protected by copyright, thus making a license for that nonexistent copyright irrelevant).  

## OSHW and Copyright

OSHW is born out of the OSS community and carries forward many of its norms and practices.  However, there is an important difference: unlike born-closed software, many parts of OSHW are [born open](https://michaelweinberg.org/post/150123246460/the-cost-of-a-successful-creative-commons-and-open).  Many of the functional elements of OSHW are categorically ineligible for copyright protection.  

Without that legal protection, OSHW licenses are much less *legally* effective than OSS licenses at imposing obligations on users (just to be clear, parts of OSHW licenses are still legally enforceable - the situation is just [less universal](https://michaelweinberg.org/post/156095370255/is-it-better-to-over-license) than OSS).

Although the OSHW legal foundation is less robust than its OSS cousin, this community still basically works.  In large part this is because, at least internally, the licenses still act as valued social signals to OSHW users.  People tend to respect them, and there tend to be social sanctions on community members who violate the spirit of the license regardless of its ultimate legal enforceability. 

## OSS and OSHW Come Full Circle

It is understandably alarming for the OSS community to find that its core legal foundation may be shifting below its collective feet.  The good news is that the OSS community does not need to figure this out on its own. OSHW has been modeling how to navigate this environment for over a decade.  

Also, it may be an opportunity to learn if OSS is really just the friends we found along the way. The legal enforceability of OSS licenses is unquestionably important. At the same time, actually litigating license violations is vanishingly rare.  This new environment may help us understand how much of the power of OSS comes from the legal stick they carry, and how much comes from the social sanctions that flow from violating the social signal they embody.



_Feature image: [John Pounds by William Sharp and Ephraim Bouve](https://www.si.edu/object/john-pounds-william-sharp-and-ephraim-bouve:nmah_325119) from the Smithsonian's Open Access collection_