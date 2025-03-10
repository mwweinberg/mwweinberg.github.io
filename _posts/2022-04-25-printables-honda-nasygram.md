---
layout: post
category: blog
title: Printables, Honda, Platforms, and Nastygrams
date: 2022-04-25
tags:
- 3dprinting
- copyright
- trademark
image:
     feature: board_of_censors_moves_out.png

---

Last week the 3D printing platform [Printables](https://www.printables.com/) removed an unknown number of models from their platform.  This action was apparently [in response to a letter](https://forum.prusa3d.com/forum/english-forum-general-discussion-announcements-and-releases/model-deleted-by-admin/#post-600420) Printables received from Honda claiming that user models infringed on various rights.  Based on the [discussion of the action in the Printables forum](https://forum.prusa3d.com/forum/english-forum-general-discussion-announcements-and-releases/model-deleted-by-admin/), it appears that at least some of Honda’s claims may have been related to the use of Honda’s trademarks in either model geometry or model descriptions.

Many people have criticized Honda’s decision to send this letter in the first place. For example, while I have some quibbles with the legal details in this [Hackaday post](https://hackaday.com/2022/04/21/the-honda-takedown-how-a-global-brand-failed-to-read-the-room/), I think its criticism of Honda's failure to meet its community where it is are directionally correct.   Others, [including me](https://twitter.com/mweinberg2D/status/1516375188291862535), also directed some criticism at Printables itself for what appears to be, from the outside (always an unreliable evaluation viewpoint), a fairly noncritical acquiescence to Honda’s claims.  (In my defense, describing the letter as “a huge legal document” imposing a “very tight deadline” in explaining why the takedown happened does not exactly suggest a carefully considered review.)

In any event, I’ve written about these types of (potentially) [overly broad takedown claims](https://michaelweinberg.org/blog/2019/10/10/lego-ip-grab-bag/) before, and about the [structural incentives](https://michaelweinberg.org/post/158089906265/trademark-and-copyright-safe-harbors-again) that can punish platforms for viewing them critically.

Instead of just complaining about everyone’s behavior, in this post I want to be productive.  The post will try and walk through how I would think about processing and responding to this kind of letter.  Since, like everything on this site, this post is not legal advice, I’m going to sidestep the legal details and focus on more operationally-oriented steps (if you are curious, the posts linked to above provide some legal context). Those legal details will matter when trying to actually implement anything like this approach on a specific platform (especially across jurisdictions). However, they are not necessary to follow the general flow.

## Step 1: Take a breath, read, and sort

It is important to remember that no one just happens to send a long, scary looking letter on fancy letterhead that includes a short deadline for response.  These letters - sometimes referred to by lawyers as ‘nastygrams’ - are designed to intimidate and encourage compliance.  

That does not mean that you should ignore them!  But it does mean that you should keep that in mind when you are reading them.  That’s why the first thing to do when receiving a nastygram is to take a deep breath and remember that the letter is, at least partially, designed to intimidate you.

The second thing to do is to actually read the letter and map out what it says.  Specifically, what rights is the sender actually claiming, and how are they connecting those rights to specific models (either individually or as a class)?  Lawyers can sometimes try and bluff their way through these details, so read the letter critically.  The details will matter later on.

Once you have read the letter, try and sort the claims and models into specific buckets.  Does the letter claim that some models infringe on copyrights while others infringe on trademarks?  Are objections to models or the language describing the models?  Something else entirely?

## Step 2: Act on the easy stuff

If the letter includes all of the elements of a true DMCA takedown, claims that specific models infringe on copyright, and lists the models, it should be easy to deal with those models with an existing DMCA process. No reason to wait.  If the letter includes trademark claims, try and make some triage decisions.  Not all uses of a trademark infringe on the mark!  If you are lucky and have thought about this stuff in advance (see below), act on any models that are easy calls.  Do so knowing it can be ok to take more time considering the models that feel closer to the line.

## Step 3: Reach out and ask for clarification

Once you have your head around what the letter is really asking of you and made some easy decisions, it may be time to reach out to the party that sent it.  Reaching out can show the sender that you exist and are a good faith actor. Tell them what you have done, and ask for clarifications to help you evaluate whatever is left.

There are a few reasons to reach out even if you have not immediately and fully complied with the letter’s request.  With regard to the party that sent you the letter, it is likely that they send these kinds of letters to all sorts of sketchy, bad-faith actors and never receive any sort of response.  Responding signals to them that there is a real person at the platform who is paying attention, taking their concerns seriously, and acting in good faith. Depending on how you structure your questions, it can also be a way to signal that you won’t be intimidated by broad gestures at unspecified 'rights’ that are not tied to specific claims.

The second audience for your response is a court.  If things go totally sideways, your dispute may end up in front of a court.  At that point, the judge or jury will need to decide if you are the horrible pirate den that you are accused of being, or a responsible, responsive community of creative people trying to balance many competing rights.  Building a record of constructive engagement can be helpful in making the case that you fall into the second category.

In formulating your response, it can also be helpful to have done some thinking in advance about what you might want to push back on and why.  Are you a platform that is content to let large rightsholders define the rules, even if large rightsholders want to create rules that give them much more power than they are legally entitled to?   Or are you trying to create a space where people can engage with the world in a way that recognizes that rights exist and have limitations?  This can be a harder decision than it might appear. Not every platform sees itself as working with intentionality to create space for its users.  That's why it is helpful to consider it outside of a crisis context.  Understanding your own framework will help you calibrate your response.

## Step 4: Be as transparent as possible

Whatever you end up doing, take steps to explain to targeted users and the community exactly what is going on.  There will be limits to your transparency - to protect users, the platform, and even the party that sent you the letter in the first place.  However, to the extent possible, explain what rights are alleged to be infringed upon, how you evaluate those claims, and what steps all parties can take to avoid problems in the future.  

None of this will eliminate conflicts between external rightsholders, users, and a platform.  However, if done right, it introduces a degree of accountability into the process for everyone involved.  If nothing else, that helps to make sure that the balance struck by the rules governing a platform are reasonably related to the balance struck by the law.

*Header Image: [The Board of Censors Moves Out](https://www.metmuseum.org/art/collection/search/337324) from the Met's open access collection.*
