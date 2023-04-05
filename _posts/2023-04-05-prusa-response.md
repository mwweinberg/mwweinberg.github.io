---
layout: post
category: blog
title: A(nother) Reply to Josef Průša
date: 2023-04-05
tags:
- 3dprinting
- opensourcehardware
image:
     feature: debate.jpg

---

Last week Josef Průša, the eponymous proprietor of the important open source hardware company Prusa Research, shared a [post](https://blog.prusa3d.com/the-state-of-open-source-in-3d-printing-in-2023_76659/) about the state of open source in 3D printing.

This is exciting.  One of the things I like so much about the open source hardware community is how broadly it embraces openness.  That includes having open, public conversations about what it means to do open source hardware, and to run an open source hardware company.

The Prusa post raises some interesting questions. Some of them are new.  Others may not be as new (although that does not mean that they are resolved).  Thea Flowers (not incidentally, like me, also an [OSHWA board member](https://www.oshwa.org/about/board-members/)) has already jumped in to the conversation the post calls for with a [reply](https://blog.thea.codes/a-reply-to-josef-prusa/).  It’s a thoughtful one, and if you care about these questions I would strongly recommend reading it.    

A big part of the Prusa post talks about legal issues and licenses.  This is something I have THOUGHTS and OPINIONS about, which means I have a few questions.  Those questions tend to be about getting more specific information about the types of problems the Prusa post identifies, and about the types of control it assumes it can impose via license.  Right now, I feel like I don’t fully understand the problem, or how an intellectual property-based license might address it.  

Before getting into the legal stuff, I want to touch on one or two other things.

## Goals are Important

One of the things I really appreciated about the Prusa post is this statement:

> But community development __isn’t the main reason__ why we offer our products as open source. Our main goal has always been to __make our printers easy to maintain and modify__, so people and companies can play and experiment with software and hardware.

(emphasis in original)

The thing I really appreciate about this statement is that it articulates a goal for using an open source approach.  Open source hardware is a strategy. Like any strategy, it is appropriate in some situations but not others.  Also, like any strategy, it is not magic. (more about this in the [2020 Open Source Hardware Weather Report](https://michaelweinberg.org/docs/2020_OSHW_Weather_Report.pdf).  

Articulating a goal for using open source hardware gives you a way to evaluate your strategy.  You can decide if it is working, if it is the best way to achieve your goal, and if you need to invest more or less in it.

Is open source helping Prusa Research achieve its goals in a way that justifies the cost?  I’m not sure.  I am glad that they have something concrete to use to evaluate it. 

## Assertions I am Less Sure About

The Prusa post also makes some assertions about the nature and state of open source hardware.  I’m not convinced that either of them are true, although I am open to being convinced.  I would love to see a deeper discussion about both of them, and more data about the second point to the extent that it exists.

### Assertion #1: Open Source Relies on Everyone Playing by the Rules

The Prusa post says:

>The open-source movement relies on the fact that __everyone involved plays by the same rules__. 

(emphasis in original)

I’m not sure that has ever been the case, or that it even should be the case.  Open source absolutely relies on some critical mass of people playing by the same rules (Phillip Torrone famously [started the process of trying to codify some common rules for open source hardware](https://makezine.com/article/maker-news/soapbox-the-unspoken-rules-of-open-source-hardware/) back in 2012).  What makes up a “critical mass” will vary depending on the community and the nature of the work they are doing.  

That being said, there are always going to be people outside of the community.  Many of those people will benefit from the work of the community without contributing to it, or caring about it, or even being aware of its existence.  Some of those people may even “exploit” the community (although, as Thea [points out](https://blog.thea.codes/a-reply-to-josef-prusa/), that line can be a hard one to draw when you start looking at it closely). That’s ok, as long as there are enough people in the community to achieve its goals.  To a first approximation, all open source communities operate in this environment.

Put another way, open source relies on _enough_ people playing by the same rules to keep the community engaged.  Someone outside of the community benefitting from the community’s work in a way the community views as unreasonable can absolutely cause people to leave.  And if enough people leave there is a problem.  But the mere existence of these people is not fatal to any open source community.  Viewing open source community challenges as a universal compliance problem could cause you to come to all sorts of inaccurate conclusions.

### Assertion #2: The Situation is Changing

The Prusa post also says:

>But in recent years, I feel that the __situation is changing__. More and more companies are breaking and bending the rules, and the community is not nearly as resistant to their actions as it once was. 

(emphasis in original)

This is a strong assertion. If it is true it would be very interesting. However, I don’t know that we have very much evidence of a major change (yet).

Open source hardware companies have struggled with actors outside of the community for years (“Cloning ain’t cool” is one of the [unofficial rules](https://makezine.com/article/maker-news/soapbox-the-unspoken-rules-of-open-source-hardware/) from 2012).  We’ve seen claims that companies are breaking the rules - and that rule breaking is pushing open source hardware companies away from being open - since at least the time of Makerbot’s decision to back away from open source.  

Are things different now?  Maybe?  On its face, the concerns that the Prusa post raises seem fairly similar to those [raised by Bre Pettis around Makerbot clones in 2012](https://web.archive.org/web/20180922005930/https://www.makerbot.com/stories/news/lets-try-that-again/).  They have been echoed by other companies in the decade since.  Like Prusa, I suspect many other open source hardware company leaders have lamented that “After a minor internet storm, the situation calms down, and the code remains closed (or only part of it is opened), and after a few weeks, everyone forgets.” after their hardware is cloned by a competitor.  

I would actually love to hear more from Prusa about how he understands the nature of this dynamic to have changed over the years.  Absent that, while the situation may feel different _within Prusa Research_, I’m not sure we have enough evidence to say that it has changed for open source hardware in general.  And if things have changed within Prusa Research, I’d love to know more about that too!

## The Legal Parts (Some Questions About Why This is Necessary)

I think it is useful to think about new open source licenses, about the goals you want them to achieve, and not get too bogged down in whether or not those new licenses are goals are compatible with “open source” as a platonic ideal (that’s part of the reason I was excited to participate in creating the [ml5.js ethical open source license](https://michaelweinberg.org/blog/2021/01/12/ml5-call-for-comment/)).

However, licenses are not self-executing or self-enforcing. Nor are they the [only way to enforce behavioral norms](https://michaelweinberg.org/blog/2021/06/17/licenses-and-social-norms/).  They rely on people deciding to enforce them, and actual rights to license.  Therefore, when thinking about creating a new license, it can be helpful to understand the current state of affairs and why that state is not working. To that end, I have a bunch of questions:

### What is Prusa Research currently doing to enforce its existing rights, and how are those efforts falling short?  

Trademarks are usually the most powerful rights an open source hardware company has.  What trademarks does Prusa have? Does it take steps to patrol their use (say, on large online marketplaces)? If it is, and that is not working, why not?  If it isn’t, why not? 

(by the way, a panel on how successful open source hardware companies enforce their rights would be a _super_ interesting [Open Hardware Summit](https://2023.oshwa.org/) panel that I will absolutely be proposing next year)

### What About the CERN Licenses?

Open source hardware companies often have copyrights as well.  The Prusa post states (correctly) that the GPL license is not really optimized for open source hardware.  However, while the GPL is imperfect when it comes to hardware, it does exist.  Have there been violations of that license?  If so, did Prusa pursue them? Why or why not?  If not, why would a more restrictive license change their approach?   

Perhaps more importantly, has Prusa looked at the [new(ish) CERN licenses](https://ohwr.org/project/cernohl/wikis/Documents/CERN-OHL-version-2)?  How might its enforcement experience change under that regime?  How do those licenses fail to address the problems in the market? Are those failures curable with different license language, or are they inherent to the types of intellectual property rights that attach to a 3D printer? 

### Are There Specific Examples of Bad Behavior That Could be Controlled by a License?

Some parts of 3D printers cannot be protected by any intellectual property rights (see [this whitepaper](https://michaelweinberg.org/docs/3_Steps_for_Licensing_Your_3D_Printed_Stuff.pdf) for more).  Without a right to license, the terms of the license do not matter.  Therefore, it would be helpful for Prusa to provide specific (or specific-ish) examples of what it considers bad behavior _that would violate a more restrictive hardware license_.  

The Prusa post talks about not releasing electronics plans for the new MK4 printer.  I don’t know how easy those boards would be to reverse engineer. I do know that it is unlikely that they are protected by any sort of intellectual property right that could be licensed in a way that would control other users.  Thinking about new licenses would be easier with a clear understanding of the type of behavior that the license is intended to control.

## The Legal Parts (Some Questions about the License Working Points)

The end of the Prusa post includes a list of working points that could form the core of a new license.  In thinking about how to incorporate them into a license, I have some clarifying questions:

### How would you think about defining “clearly stating” authorship on the product or software?  

> * If you’re using some code or blueprints to bring software or hardware to market, the original code’s authorship must be clearly stated on the product or in the software. Additionally, deleting copyright information from headers and history from repositories is prohibited.

Naming authors can be straightforward when there are only one or two.  Slic3r has [103 contributors](https://github.com/slic3r/Slic3r/graphs/contributors).  PrusaSlicer is built on Slic3r and has [166](https://github.com/prusa3d/PrusaSlicer/graphs/contributors) (I don’t know how many of those users overlap).  Do each of these people need to be listed? What happens if they disagree about what it means to be “clearly” listed?  Is it ok to provide a hyperlink to a page that lists all of them, or do their names (or handles, or both) need to be contained on the product itself?  If it needs to be contained on the product, do we need to talk about minimum font sizes?  If there is a fight about the clarity of notice, how is that fight resolved?

### How would you think about defining a clone?

> * The production of nearly exact 1:1 clones for commercial purposes is not allowed.

In trying to understand if a clone is a copy, should we look at all of the elements of the first piece of hardware, or just the contributions that the first hardware manufacturer made?  Does it matter if any of those contributions are eligible for any sort of intellectual property protection?  Are those contributions listed somewhere so that someone knows how to avoid being accused of being a clone?  Is “nearly” calculated as a raw number (“we made 10 contributions and you copied nine”) or as some sort of weighted percentage (“we made 10 contributions, and you copied the three most important ones”)?

### What is a license for manufacturing spare parts actually licensing?

> * License for manufacturing spare parts is valid for service, modification, or educational purposes.
> * Upgrades and additional modifications based on original parts are allowed and welcome.
> * Parts that can be considered consumables (e.g., thermistors, heater blocks, fans, printing plates, etc.) can be manufactured and sold commercially after the verification by the licensor based on the presentation of samples.



Some points seem to assume that a manufacturer of a piece of hardware gets to control all third party parts for that hardware.  This is not usually the case.  In what situations would anyone actually need a license to manufacture spare parts?  What about consumables (ask the manufacturers of 2D printers who keep trying - and failing - to force people to buy replacement toner from them how that is going)?  What rights would someone be violating if they manufactured spare replacement parts/consumables without the license?

### What does it mean to cease activity?

> * If the licensor ceases its activity, the non-commercial clause is terminated.

Sometimes companies totally disappear.  Other times, they are acquired, or they merge, or their assets are put up for auction.  The final point states that the non-commercial clause is terminated if the licensor ceases its activities.  Why is ceasing activity a trigger for that, and should any of these kind-of-stopping-but-not-quite-stopping activities trigger it too?

## What Does This License License?


There is one meta-question threaded through much of this post - what rights, exactly, would this new license be licensing?  This question is always important (at least to lawyers like me) but it becomes more important as the license becomes more restrictive.  I might not be sure if I am legally bound by the Creative Commons Attribution license on a piece of hardware, but it’s pretty easy to give attribution just in case.  If the licensor is trying to limit non-commercial uses of that hardware, I will care a lot more about what might trigger that restriction (and how to sidestep it).

None of my questions - including this final one - are intended to be gotcha questions, or to nit pick this proposal to pieces.  As I said at the top, I think this is an interesting conversation, and it is one I want to take seriously.  For me, taking it seriously means thinking about what kinds of information would be helpful when considering it.  That’s what I’ve tried to do here.

I hope this does end up being a real discussion in the open source hardware community. I’m also open to being convinced that we need to do something new. However, in order to be convinced, I need more information than I have right now.

_Feature image: [Political Discussion in a Lumber Shanty](https://www.si.edu/object/political-discussion-lumber-shanty:saam_1973.130.17) from the Smithsonian Open Access collection_