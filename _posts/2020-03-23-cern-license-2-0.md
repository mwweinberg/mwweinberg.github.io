---
layout: post
category: blog
title: New CERN Open Source Hardware Licenses Mark A Major Step Forward
date: 2020-03-23
tags:
- opensourcehardware
image:
     feature:

---

Earlier this month [CERN](https://home.cern/) (yes, that CERN) announced [version 2.0 of their open hardware licenses](https://www.ohwr.org/project/cernohl/wikis/Documents/CERN-OHL-version-2) ([announcement](https://home.cern/news/news/knowledge-sharing/cern-updates-its-open-hardware-licence) and [additional context](https://moorcrofts.com/cern-launches-open-hardware-licence-v2/) from them).  Version 2.0 of the license comes in three flavors of permissiveness and marks a major step forward in open source hardware (OSHW) licensing.  It is the result of seven (!) years of work by a team lead by [Myriam Ayass](https://kt.cern/team/myriam-ayass), [Andrew Katz](https://moorcrofts.com/team/andrew-katz/), and [Javier Serrano](https://phonebook.cern.ch/phonebook/#personDetails/?id=476608).  Before getting to what these licenses are doing, this post will provide some background on why open source hardware licensing is so complicated in the first place.  

## OSHW Licenses Are Hard 1: More Than Software and Copyright

While the world of open source software licensing is full of passionate disputes, everyone more or less agrees on one basic point: software is fully protected by copyright.  Software is ‘[born closed](https://michaelweinberg.org/post/150123246460/the-cost-of-a-successful-creative-commons-and-open)’ because the moment it is written it is automatically protected by copyright.  If the creator of that software wants to share it with others, she needs to affirmatively give others permission to build on it.  In doing so she can be confident that her license covers 100% of the software.  

At least at an abstract level, that makes open source software licenses fairly binary: either there is no license or there is a license that covers everything.

Things are not as clean in open source hardware.  Hardware includes software (sometimes).  It also includes actual hardware, along with documentation that is distinct from both.  Hardware’s software is protected by copyright. The hardware itself could be protected by an [idiosyncratic mix](https://michaelweinberg.org/post/145301850875/the-missing-half-of-open-source-hardware-licenses) of rights (more on that in a second) that include copyright, patent, and even trademark.  The result of this is, at a minimum, an OSHW license needs to be aware of the fact that there may be many moving intellectual property pieces connected to a single piece of hardware - a fairly stark contrast to open source software’s ‘everything covered by copyright’ situation.

## OSHW Licenses are Hard 2: Coverage is Hard to Generalize

The (at least superficially) straightforward relationship between software and copyright makes it easy to give generalized advice about licensing and to develop licenses that are useful in a broad range of situations.  A lawyer can be fairly confident that the advice “you need a copyright license” is correct for any software package even without having to look at the software itself.  That, in turn, means it is safe for non-lawyers to adopt “I need a copyright license for my software” as a rule of thumb, confident that it will be correct in the vast majority of cases.  It also means that software developers can be confident that the obligations they impose on downstream users - like an obligation to share any contributions to the software - are legally enforceable.

As suggested above, hardware can be much more idiosyncratic.   The physical elements of hardware might be protected by copyright - in whole or in part - or they might not.  That means that the hardware might be born closed like software, or it might be born open, free of automatic copyright protection, and available for sharing without the need for a license.  The flip side of this ambiguity is that a creator may be able to enforce obligations on future users (such as the classic [copyleft](https://en.wikipedia.org/wiki/Copyleft) sharing obligations) for some hardware, but not for other hardware.  Expectations misalignment with regards to these kinds of obligations can [create problems](https://michaelweinberg.org/post/156095370255/is-it-better-to-over-license) for creators and users alike.

All of this means that it can be hard to create a reliable software-style licensing rule of thumb for OSHW creators.  Many OSHW creators end up following the practices of projects that went before them and hoping for the best. In fact, this ‘follow others’ model is the premise for the educational guidance that the Open Source Hardware Association (OSHWA) [makes available](https://certification.oshwa.org/process/hardware.html).

## OSHWA’s Approach

One of the many questions all of this sets up is a bundling vs breakout approach to licensing.  Is it better to try and create an omni-license that covers the IP related to software, hardware, and documentation for OSHW, or to suggest users pick three licenses - one for software, one for hardware, and one for licensing?  A creator could make very different choices about sharing the three elements, so the omni approach could get complicated  fast.  At the same time, having three distinct licences is a lot more complicated than just having one.

OSHWA ultimately decided to go with the three license approach in its [certification program](https://certification.oshwa.org/).  This was driven in part by the realization that there were already mature licenses for software (OSI-approved open source software licenses) and documentation (Creative Commons licenses).  That allowed OSHWA to take a “don’t do anything new if you can avoid it” approach to licensing education.  It also required OSHWA to recommend licenses for hardware.

## Existing OSHW Licenses

While many open source hardware creators use software (such as the GPL) or documentation (Creative Commons) licenses for hardware, neither of those licenses were really written with hardware in mind.  Fortunately, there were three existing hardware licenses.  OSHWA provided a [quick comparison](https://certification.oshwa.org/process/hardware.html) between the three licenses: [CERN 1.2](https://ohwr.org/project/licenses/wikis/cern-ohl-v1.2), [Solderpad](https://solderpad.org/licenses/), and [TAPR](https://tapr.org/?page_id=5968). Although all of these licenses were good first steps, they were all developed fairly early in the history of open source hardware.  Solderpad and TAPR in particular were essentially designed to add hardware wrappers to existing open source software licenses.  

## CERN 2.0

CERN’s 2.0 licenses have been informed by all of the developments and thinking around open source hardware and licensing in the seven years between the release of 1.2 and today.  In recognition that creators may be interested in multiple types of openness and obligations on downstream users, they come in the flavors: the strongly reciprocal [S variant](https://www.ohwr.org/project/cernohl/wikis/uploads/002d0b7d5066e6b3829168730237bddb/cern_ohl_s_v2.txt), the weakly reciprocal [W variant](https://www.ohwr.org/project/cernohl/wikis/uploads/10946616b8cbcdef2274a58d9f3a98fb/cern_ohl_w_v2.txt), and the permissive [P variant](https://www.ohwr.org/project/cernohl/wikis/uploads/5a639eaec042c5584104afdbc9350245/cern_ohl_p_v2.txt).  While this structure makes it hard to mix reciprocities (by, for example, requiring strong reciprocity on documentation and weak reciprocity on the hardware itself), they provide a clear way for hardware creators to license the hardware portion of their projects.  This is a deeply reasonable approach.

## CERN’s ‘Available Components’

One evergreen question for open source hardware is ‘open down to what?’  Your design may be open, but does that mean that all of your components have to be open as well? Did you have to use open source software to create the design? Running on an open source operating system? Running on open source silicon?  

OSHWA’s certification program addressed this question with the concept of the ‘[creator contribution](https://www.oshwa.org/2016/10/07/announcing-the-oshwa-open-source-hardware-certification-program/).’  The idea is that the creator must make available and openly license everything within her power to make available and open.  Generally those will be her designs, code, and documentation.  It is fine to include components sourced from third parties (even non-open components) as long as they are generally available without requiring an NDA to access.  

CERN’s ‘[available component](https://ohwr.org/project/cernohl/wikis/uploads/0be6f561d2b4a686c5765c74be32daf9/CERN_OHL_rationale.pdf)’ definition achieves much the same goal. As long as a component is generally and readily available, and described with enough information to understand their interfaces, they do not themselves have to be open.  Of course, both the contours of the creator contribution and available component may vary from hardware to hardware.  Hopefully time and experience will help give us all a better sense of how to draw the lines.

## Let’s See How it Goes

This post has mostly focused on the CERN license’s role in helping making ‘born closed’ components more open through licensing.  There is a flip side to all of this: what happens when a license is used on a ‘born open’ piece of hardware.  [That can give both users and creators a distorted sense of their obligations when using a piece of hardware](https://michaelweinberg.org/post/156095370255/is-it-better-to-over-license). However, that is probably a problem for public education, not license design.

This is an exciting time for open source hardware.  CERN’s new license is a big step forward in licensing.  As it is adopted and used we will learn what works, what doesn’t, and what tweaks might be helpful.  The best way to do that is to use it yourself and see how it fits.
