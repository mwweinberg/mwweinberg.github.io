---
layout: post
category: blog
title: More on the Shifting State of Open Source Hardware
date: 2023-07-14
tags:
- 3dprinting
- opensourcehardware
image:
     feature: debate.jpg

---

Earlier this week PT over at Adafruit published an [interesting post](https://blog.adafruit.com/2023/07/12/when-open-becomes-opaque-the-changing-face-of-open-source-hardware-companies/) on the evolving relationship between some of the larger open source hardware companies and open source itself. The post catalogs various ways in which three marquee open source hardware companies - Arduino, Sparkfun, and Prusa - have explored non-open strategies for various parts of their offerings.

Generally speaking, I think it is fine for companies to use open source when it is useful and not use open source when it is not useful, as long as they are being upfront about it. Open source [is a strategy](https://michaelweinberg.org/blog/2020/10/23/open-source-hardware-weather-report-2020/), and no single strategy applies in every situation.  This can become a problem when open source messaging is used to draw users into non-open hardware or systems.  Although PT groups Arduino, Sparkfun, and Prusa together for the purposes of the post, I don’t think he intends to suggest that they are all guilty of that, or even that they are engaging with non-openness to the same degree.  As of today, I think it is fair to say that the three companies represent a broad range of relationships to open source.

In this context, I also worry about recession from open source.  If open source is a strategy, and some high profile open source hardware companies feel like they need to move away from it in various ways, that may be a red flag that there are aspects of the open approach that we as a community should be considering more deeply. To that end, the thing I really want from these companies is for them to talk about their thinking and decisionmaking.  Just as many of us have learned from their decisions to use open source, there could be a lot to learn from their decisions to not use open source in some cases.

That is why I find the end of PT’s piece so interesting.  It includes an interview-style comment with Josef Prusa discussing his [article](https://blog.prusa3d.com/the-state-of-open-source-in-3d-printing-in-2023_76659/) from March (I had some [thoughts](https://michaelweinberg.org/blog/2023/04/05/prusa-response/) about it when it was originally published).

I want to give Prusa credit for raising these concerns, and for talking about them publicly.  It is easy to not talk about these decisions publicly, precisely because doing so results in people asking the type of follow up questions that PT asks in his post, I ask in my post, and fellow OSHWA Board Member Thea Flowers raised in [her post](https://blog.thea.codes/a-reply-to-josef-prusa/). I also want to recognize that his answers to PT lead with the admission that Prusa hasn’t finished their homework to follow up to their original article, so everything he says should be understood as a work in progress.

## And Yet

All that being said, I find parts of Prusa's answer to be incredibly frustrating! The core of that frustration is that he raises a bunch of facially valid concerns, and then says that those concerns are pushing them to look at closed-source options, but *does not explain how going closed-source addresses the concerns*.

This is a style of (potentially) backing away from open hardware that goes back at least as far as Makerbot’s switch over a decade ago.  Part of me wants to assume that there is something to it, because it feels like a recurring pattern.  The other part of me can’t help but notice that no one seems to be able to actually explain why open source is the driver of the problems they describe. I want to see someone connect the dots.

Prusa’s comment identified a number of problems that they feel like they are dealing with:

- Chinese government subsidies for competitors
- Patent applications based on open-source community inventions (unclear if he is limiting these to Prusa inventions, or open source inventions generally)
- Competitors violating existing licenses
- The need to protect IP and the inability to do so under current licenses

I’m very willing to believe that these are real challenges. I just don’t understand how becoming less open addresses any of them.  

Becoming less open will not reduce the Chinese government (or any other country) from supporting competitors. That support is driven by an interest in creating a strong position in an industry, not by the fact that some of the players in the industry are open.

Becoming less open seems unlikely to impact how much you care about other parties applying for patents in other countries.  It seems unlikely that Prusa will decide to spend money filing international patents themselves.  If they do find themselves accused of infringement (which, again, would only happen if the country they were selling into was also a country where someone else had obtained a patent), they’re going to have to pay to challenge the patent either way.  Furthermore, if someone really wants to understand and copy an innovation built into a desktop 3D printer, not having open documentation seems unlikely to be a major barrier (I’d love to understand why/if I’m wrong about that). 

Becoming less open will not change the fact that competitors are violating existing licenses.  If competitors are already violating existing licenses, how would adding new layers of licenses change the dynamic? If I’m being honest, this is always the one that makes the least sense to me.  No one has ever been able to explain the logic chain of:

- We can’t enforce existing licenses based on our intellectual property when they are being violated
- We add new license terms to that same intellectual property that mean that people violate our licenses even more
- Suddenly we are able to enforce our license terms

If there is a magic trick to enforce more restrictive licenses, why doesn’t it work when someone violates your open license? Isn’t a license violation a license violation?

Asking these questions always makes me feel like I’m missing some key part of the decisionmaking process.  That’s why I was excited to see Prusa’s original post, and encouraged that he continued to engage with PT’s questions this week.  I really hope that Prusa’s full follow up article begins to shed light on some of these questions. While I’m sure doing so will lead to some criticism, it could also be incredibly helpful for the community to really understand the nature of these challenges.  



_Feature image: [Political Discussion in a Lumber Shanty](https://www.si.edu/object/political-discussion-lumber-shanty:saam_1973.130.17) from the Smithsonian Open Access collection_