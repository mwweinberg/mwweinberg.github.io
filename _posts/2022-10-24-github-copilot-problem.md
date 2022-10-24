---
layout: post
category: blog
title: I’m Not Sure That (If?) GitHub Copilot is a Problem
date: 2022-10-24
tags:
- licensing
- copyright
image:
     feature: ancient_rome.jpg

---

Last week a new [Github Copilot investigation](https://githubcopilotinvestigation.com/) website created by [Matthew Butterick](https://matthewbutterick.com/) brought the conversation about GitHub’s Copilot project back to the front of mind for many people, myself included.  [Copilot](https://github.com/features/copilot), a tool trained on public code that is designed to auto-suggest code to programmers, has been greeted by excitement, curiosity, skepticism, and concern since it was announced.

The Github Copilot investigation site’s arguments build on [previous work](https://matthewbutterick.com/chron/this-copilot-is-stupid-and-wants-to-kill-me.html) by Butterick, as well as [thoughtful analysis](https://sfconservancy.org/blog/2022/feb/03/github-copilot-copyleft-gpl/) by [Bradley M. Kuhn](http://www.ebb.org/bkuhn/) at the [Software Freedom Conservancy](https://sfconservancy.org/).  I find the arguments contained in these pieces convincing in some places and not as convincing in others, so I’m writing this post in the hopes that it helps me begin to sort it all out.  

At this point, Copilot strikes me as a tool that replaces googling for stack overflow answers.  That seems like something that could be useful.  It also seems plausible that training such a tool on open public software repositories (including open source repositories) could be allowed under US copyright law.  That may change if or when Copilot evolves, which makes this discussion a fruitful one to be having right now.

Both Butterick and Kuhn combine legal and social/cultural arguments in their pieces.  This blog post starts with the social/cultural arguments because they are more interesting right now, and may impact the legal analysis as facts evolve in the future.  Butterick and Kuhn make related arguments, so I’ll do my best to be clear which specific version of a point I’m engaging with at any given time.  As will probably become clear, I generally find Kuhn’s approach and framing more insightful (which isn’t to say that Butterick’s lacks insight!).

## What is Copilot, Really?

A large part of this discussion seems to turn on the best way to think about and analogize what Copilot is doing (the actual [Copilot page](https://github.com/features/copilot) does a pretty good job of illustrating how one might use it).

Butterick seems to think that the correct way to think about Copilot is as a search engine that points users to a specific part of a specific (often open source) software package.  In his words, it is “a con­ve­nient alter­na­tive inter­face to a large cor­pus of open-source code”.  He worries that this “selfish interface to open-source software” is built around “**just give me what I want!**” (emphasis his).  

The selfish approach may deliver users to what they think they want, but in doing so hides the community that exists around the software and removes critical information that the code is licensed under an open source license that comes with obligations.  If I understand the argument correctly, over time this act of hiding the community will drain open source software of its vitality.  That makes Copilot a threat to open source software as a sustainable concept.

### But…

The concern about hiding open source software’s community resonates with me.  At the same time, Butterick’s starting point strikes me as off, at least in terms of how I search for answers to coding questions.  

This is probably a good place to pause and note that I am a Very Bad coder who, nonetheless, does [create some code](https://github.com/mwweinberg/) that tends to be openly licensed and is just about always built on other open source code.  However, I have nowhere near the skills required to make a meaningful technical contribution to someone else’s code.

Today, my “convenient alternative interface” to finding answers when I need to solve coding problems is google. When I run into a coding problem, I either describe what I am trying to do or just paste the error message I’m getting into google.  If I’m lucky, google will then point me to stack overflow, or a blog post, or documentation pages, or something similar. I don’t think that I have ever answered a coding question by ending up in a specific portion of open source code in a public repo. If I did, it seems unlikely that code - even if it had great comments - would get me where I was going on its own because I would not have the context required to quickly understand that it answered my question..

This distinction between “take me to part of open source code” (Butterick’s view) and “help me do this one thing” (my view) is important because when I look at the Copilot website, it feels like Copilot is currently marketed as a potentially useful stack overflow commenter, not someone with an encyclopedic knowledge of where that problem was solved in other open source code.  Butterick [experimented with](https://matthewbutterick.com/chron/this-copilot-is-stupid-and-wants-to-kill-me.html) Copilot in June and described the output as “This is the code I would expect from a talented 12-year-old who learned about JavaScript yesterday and prime numbers today.”  That’s right at my level!  

If you ask Copilot a question like “how can I parse this list and return a different kind of list?,” in most cases (but, as Butterick points out, not all!) it seems to respond with an answer synthesized from many different public code repositories instead of just pointing to a single “best answer” repo.   That makes Copilot more of a stack overflow explorer than a public code explorer, albeit one that is itself trained by exploring public code.  That feels like it reduces the type of harm that Butterick describes.  

### Use at Your Own Risk

Butterick and Kuhn also raise concerns about the fact that Copilot does not make any guarantees about the quality of code it suggests.  Although this is a reasonable concern to have, it does not strike me as particularly unique to Copilot. Expecting Copilot to provide license-cleared and working code every time is benchmarking it against an unrealistic status quo.

While useful, the code snippets I find in stack overflow/blog post/whatever are rarely properly licensed and are always “use at your own risk” (to the extent that they even work).  Butterick and Kuhn’s concerns in this area feel equally applicable to most of my stack overflow/blog post answers.  Copilot’s [documentation](https://docs.github.com/en/copilot/overview-of-github-copilot/about-github-copilot#using-github-copilot) if fairly explicit about the value of the code it suggests (“We recommend you take the same precautions when using code generated by GitHub Copilot that you would when using any code you didn't write yourself.”), for whatever that is worth.

## Will Copilot Create One Less Reason to Interact Directly with Open Source Code?

In Butterick’s view, another downside of this “just give me what I want” service is that it reduces the number of situations where someone might knowingly interact with open source code directly.  How often do most users interact directly with open source code?  As noted above, I interact with a lot of other people’s open source software as an extremely grateful user and importer of libraries, but not as a contributor.  So Copilot would shift my direct deep interaction with open source code from zero to zero.

Am I an outlier? [Nadia Asparouhouva](https://nadia.xyz/) (née Eghbal)’s excellent book *[Working in Public](https://www.amazon.com/dp/0578675862/)* provides insight into open source software grounded in user behavior on Github.  In it, she tracks how most users of open source software are not part of the software’s active developer community:

>“This distribution - where one or a few developers do most of the work, followed by a long tail of casual contributors, and many more passive users - is now the norm, not the exception, in open source.”

She also suggests that there may be too much community around some open source software projects, which is interesting to consider in light of Butterick’s concern about community depletion:

>”The problem facing maintainers today is not how to get more contributors but how to manage a high volume of frequent, low-touch interactions. These developers aren’t building communities; they’re directing air traffic.”

That suggests that I am not necessarily an outlier.  But maybe users like me don’t really matter in the grand scheme of open source software development.  If Butterick is correct about Copilot’s impact on more active open source software developers, that could be a big problem.  

Furthermore, even if users like me are representative today, and Copilot is not currently good enough to pull people away from interacting with open source code, might it be in the future?  

“Maybe?” feels like the only reasonable answer to that question.  As Kuhn points out, “AI is usually slow-moving, and produces incremental change far more often than it produces radical change.”  Kuhn rightly argues that slow-moving change is not a reason to ignore a possible future threat. At the same time, it does present the possibility that a much better Copilot might itself be operating in an environment that has been subject to other radical changes.  These changes might enhance or reduce that future Copilot’s negative impacts.

Where does that leave us?  The kind of casual interaction with open source code that Butterick is concerned about may happen less than one might expect.  At the same time, today’s Copilot does not feel like a replacement for someone who wants to take a deeper dive into a specific piece of open source software.  A different version of Copilot might, but it is hard to imagine the other things that might be different in the event that version existed. Today’s version of Copilot does not feel like it quite manifests the threat described by Butterick.

## Copilot is Trained on Open Source, Not Trained on Open Source

For some reason, I went into this research thinking that Copilot had explicitly been trained on open source software.  That’s not quite right.  Copilot was trained on public Github repositories.  Those include many repositories of open source software. They also include many repositories of code that is just public, with no license, or a non-open license, or something else.  So Copilot was trained on open source software in the sense that its training data includes a great deal of open source software. It was not trained on open source software in the sense that its training data only consists of open source software, or that its developers specifically sought out open source software as training data.  

This distinction also happens to highlight an evolving trend in the open source world, where creators conflate public code with openly licensed code.  As Asparouhouva notes:

>”But the GitHub generation of open source developers doesn’t see it that way, because they prioritize *convenience* over freedom (unlike free software advocates) or openness (unlike everly open source advocates).  Members of this generation aren’t aware of, nor do they really care about, the distinction between free and open source software.  Neither are they fired up about evangelizing the *idea* of open source itself. They just publish their code on GitHub because, as with any other form of online content today, sharing is the default.”

As a lawyer who works with open source, I think the distinction between “openly/freely licensed” and “public” matters a lot. However, it may not be particularly important to people using publicly available software (regardless of the license) to get deeper into coding.  While this may be a problem that is exacerbated by Copilot, I don’t know that Copilot fundamentally alters the underlying dynamics that feed it.

## Is This Legal?

As noted at the top, and attested to by the body of this post so far, this post starts with the cultural and social critiques of Copilot because that is a richer area for exploration at this stage in the game.  Nonetheless, the critiques are - quite reasonably - grounded in legal concerns.

### Fair Use

The legal concerns are mostly about copyright and fair use. Normally, in order to make copies of software, you need permission from the creator. Open source software licenses grant those permissions in return for complying with specific obligations, like crediting the original creator.  

However, if the copy being made of the software is protected by fair use, the copier does not need permission from the creator and can ignore any obligations in a license.  In this case, Github is not complying with any open source licensing requirements because it believes that its copies are protected by fair use.  Since it does not need permission, it does not need to copy with license requirements (although [sometimes there are good reasons to comply with the social intent of licenses](https://michaelweinberg.org/blog/2021/06/17/licenses-and-social-norms/) even if they are not legally binding…). It has said as much, although it (and its parent company Microsoft) has declined to elaborate further.

I read Butterick as implying that Github and Microsoft’s silence on the details of its fair use claim means that the claim itself is weak: “Why couldn’t Microsoft pro­duce any legal author­ity for its posi­tion? Because [Kuhn and the Software Freedom Conservancy] is cor­rect: there isn’t any.”

I don’t think that characterization is fair.  Even if they believe that their claim is strong, Github cannot assume that it is so strong as to avoid litigation over the issue (see, e.g. the existence of the Github Copilot investigation website itself).  They have every reason to avoid pre-litigating the fair use issue via blog post and press release, keeping their powder dry until real litigation.

Kuhn has a more nuanced (and correct, as far as I’m concerned) take on how to interpret the questions: “In fact, these areas are so substantially novel that almost every issue has no definitive answers”.  While it is totally reasonable to push back on any claims that the law around this question is settled in Github’s favor (Kuhn, again, “We should simply ignore GitHub’s risible claim that the “fair use question” on machine learning is settled.”), that is very different than suggesting that it is settled *against* Github.

How will this all shake out?  It’s hard to say.  Google scanned all the books in order to create search and analytics tools, claiming that their copies were protected by fair use.  They were [sued](https://en.wikipedia.org/wiki/Authors_Guild,_Inc._v._Google,_Inc.) by The Authors Guild in the Second Circuit. Google won that case.  Is scanning books to create search and analytics tools the same as scanning code to create AI-powered autocomplete?  In some ways yes? In other ways no?  

Google also won a [case](https://en.wikipedia.org/wiki/Google_LLC_v._Oracle_America,_Inc.) before the Supreme Court where they relied on fair use to copy API calls.  But TVEyes lost a [case](https://fairuse.stanford.edu/case/fox-news-network-llc-v-tveyes-inc/) where they attempted to rely on fair use in recording all television broadcasts in order to make it easy to find and provide clips.  And the Supreme Court is currently considering a [case](https://en.wikipedia.org/wiki/Andy_Warhol_Foundation_for_the_Visual_Arts,_Inc._v._Goldsmith) involving Warhold paintings of Prince that could change fair use in unexpected ways. As Kuhn noted, we’re in a place of novel questions with no definitive answers.

### What About the ToS?


As [Franklin Graves](https://franklingraves.com/) [pointed out](https://www.linkedin.com/posts/franklingraves_fairuse-ai-github-activity-6988227300576133120-n_JY/), it’s also possible that Github’s Terms of Service allow it to use anything in any repo to build Copilot without worrying about addition copyright permissions. If that’s the case, they won’t even need to get to the fair use part of the argument. Of course, there are probably good reasons that Github is not working hard to publicize the fact that their ToS might give them lots of room when it comes to making use of user uploads to the site.

## Where Does That Leave Things?

To start with, I think it is responsible for advocates to get out ahead of things like this.  As Kuhn points out:

>”As such, we should not overestimate the likelihood that these new systems will **both** accelerate proprietary software development, **while** we simultaneously fail to prevent copylefted software from enabling that activity. The former may not come to pass, so we should not unduly fret about the latter, lest we misdirect resources. In short, AI is usually slow-moving, and produces incremental change far more often than it produces radical change. The problem is thus not imminent nor the damage irreversible. However, we must respond deliberately with all due celerity — and begin that work immediately.”

At the same time, I’m not convinced that Copilot is a problem. Is it possible that a future version of Copilot would starve open source software of its community, or allow people to effectively rebuild open source code outside of the scope of the original license?  It is, but it seems like that version of Copilot would be meaningfully different from the current version in ways that feel hard to anticipate.  Today’s Copilot feels more like a fast lane to possibly-useful stack overflow answers than an index that can provide unattributed snippets of all open source software.

As it is, the acute threat Copilot presents to open source software today feels relatively modest.  And the benefits could be real. There are uses of today’s Copilot that could make it easier for more people to get into coding - even open source coding.  Sometimes the answer of a talented 12 year old is exactly what you need to get over the hump.

Of course, Github can be right about fair use AND Copilot can be useful AND it would still be quite reasonable to conclude that you want to [pull your code](https://sfconservancy.org/blog/2022/jun/30/give-up-github-launch/) from Github.  That’s true even if, as Butterick points out, Github being right about fair use means that code anywhere on the internet could be included in future versions of Copilot.

I’m glad that the Software Freedom Conservancy is getting out ahead of this and taking the time to be thoughtful about what it means.  I’m also curious to see if Butterick ends up challenging things in a way that directly tests the fair use questions.  

Finally, this entire discussion may also end up being a good example of why copyright is not the best tool to use against concerns about ML dataset building.  Looking to copyright for solutions  has the potential to stretch copyright law in strange directions, cause unexpected side effects, and misaddressing the thing you really care about.  That is something that I am always wary of, and a pior that informs my analysis here.  Of course, Amanda Levandowski makes precisely the opposite argument in her article *[Resisting Face Surveillance with Copyright Law](https://scholarship.law.unc.edu/nclr/vol100/iss4/3/)*.


*Image: [Ancient Rome](https://www.metmuseum.org/art/collection/search/437244) from the Met's open access collection.*
