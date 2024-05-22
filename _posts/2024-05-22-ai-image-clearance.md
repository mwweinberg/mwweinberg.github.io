---
layout: post
category: blog
title: Clearing Rights for a 'Non-Infringing' Collection of AI Training Media is Hard
date: 2024-05-22
tags:
- ai
- copyright
image:
     feature: Interieur_van_de_Bodleian_Library_te_Oxford.jpg

---

In response to [a number of copyright lawsuits about AI training datasets](https://knowingmachines.org/knowing-legal-machines/legal-explainer), we are starting to see efforts to build 'non-infringing' collections of media for training AI.  While I continue to believe that most AI training is covered by fair use in the US and therefore inherently 'non-infringing', I think these efforts to build 'safe' or 'clean' or whatever other word one might use data sets are quite interesting.  One reason they are interesting is that they can help illustrate why trying to build such a data set at scale is such a challenge.

That's why I was excited to read about [Source.Plus](https://source.plus/?size=n_100_n) (via a [post](https://openfuture.eu/note/source-plus-an-image-commons-for-generative-ai/) from Open Future).  Source.Plus is a tool from [Spawning](https://spawning.ai/) that purports to aggregate over 37 million "public domain and CC0 images integrated from dozens of libraries and museums." That's a lot less than are [used to train current generative models](https://knowingmachines.org/models-all-the-way), but still a lot of images that could be used for all sorts of useful things.   

However, it didn't take too much poking around on the site to find an illustration of why accurately aggregating nominally openly licensed images at scale can be such a challenge. 

The site has plenty of OpenGLAM images that are clearly old enough to be in the public domain.  It also has a number of newer images (like photographs) that are said to be licensed under CC0. Curious, I clicked on the first photograph I found on the Source.Plus home page:

![photograph of a library reading room full of patrons shot from above](/images/1024px-Pexels-pixabay-159775.jpg)

According to the [image page](https://source.plus/item/0cac250e74a5a008db172907ebc8e2db-8f39d178e94c72a2?size=n_100_n) on Source.Plus, the image was from Wikimedia Commons and licensed under a CC0 public domain dedication.  It listed the creator as Pixabay and the uploader (to Wikimedia) as Philipslearning.

Clicking through to the [wikimedia page](https://commons.wikimedia.org/wiki/File:Pexels-pixabay-159775.jpg) reveals that the original source for the image was Pixabay, and that it was uploaded on March 9, 2023 by Philipslearning (an account that appears to [no longer exist](https://commons.wikimedia.org/wiki/User:Philipslearning), for whatever that is worth).  The file metadata says that the image itself was taken on May 18, 2016.  

Clicking through to the [Pixabay page for the image](https://pixabay.com/es/photos/biblioteca-la-trobe-estudiar-1400313/) reveals that the image is available under the [Pixabay Content License](https://pixabay.com/es/service/license-summary/). That license is fairly permissive, but does state:

- You cannot sell or distribute Content (either in digital or physical form) on a Standalone basis. Standalone means where no creative effort has been applied to the Content and it remains in substantially the same form as it exists on our website.
- If Content contains any recognisable trademarks, logos or brands, you cannot use that Content for commercial purposes in relation to goods and services. In particular, you cannot print that Content on merchandise or other physical products for sale.
- You cannot use Content in any immoral or illegal way, especially Content which features recognisable people.
- You cannot use Content in a misleading or deceptive way.
- You cannot use any of the Content as part of a trade-mark, design-mark, trade-name, business name or service mark.

Which is to say, not CC0.

However, further investigation into the [Pixabay Wikipedia page](https://en.wikipedia.org/wiki/Pixabay) suggests that images uploaded to Pixabay before January 9, 2019 are actually released under CC0.  Section 4 of the [Pixabay terms](https://pixabay.com/es/service/terms/) confirms that.  The additional information on the image's [Pixabay page](https://pixabay.com/es/photos/biblioteca-la-trobe-estudiar-1400313/) confirms that it was uploaded on May 17, 2016 (which matches the metadata added by the unknown Philipslearning on the image's [wikimedia page](https://commons.wikimedia.org/wiki/File:Pexels-pixabay-159775.jpg)).

All of which means that this image is, in all likelihood, available under a CC0 public domain dedication.  Which is great! Everything was right! 

At the same time, the accuracy of that status feels a bit fragile.  This fragility works in the context of wikipedia, or if you are looking for a handful of openly-licensed images.  Is it likely to hold up at training set scale across tens of millions of images?  Maybe?  What does it mean to be 'good enough' in this case? If trainers do require permission from rightsholders to train, and one relied on Source.Plus/wikimedia for the CC0 status of a work, and that status turned out to be incorrect, should the fact that they thought they were using a CC0 image be relevant to their liability? 

*Hero Image: [Interieur van de Bodleian Library te Oxford](https://www.curationist.org/works/work-rijks-NL-AsdRM-lido-634290)*