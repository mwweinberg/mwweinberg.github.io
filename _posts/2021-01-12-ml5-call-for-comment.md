---
layout: post
category: blog
title: A New Ethical Open Source License for Machine Learning from ml5.js?
date: 2021-01-12
tags:
- copyright
- ml5js
image:
    feature: 
---
Today the ml5.js team unveiled a proposal for a new license to impose ethical use requirements on their open source machine learning library.  The community announcement is [here](https://medium.com/ml5js/ml5-js-code-of-conduct-4eb8fcae1ef7). It is full of useful information about the context, purpose, and goals of the project so I encourage you to check it out. This post is intended to be a bit more focused on the license and license mechanisms themselves.

For context, [ml5.js](https://ml5js.org/) is a library that makes machine learning and artificial intelligence accessible to artists, creative coders and students.  It is so easy to use that it even allows me to access things like [style transfer](https://learn.ml5js.org/#/reference/style-transfer) and [body tracking](https://learn.ml5js.org/#/reference/posenet).

While access to powerful machine learning tools allows people to create amazing things, the ml5.js community also recognizes that it can be used for [less socially productive applications](https://ainowinstitute.org/research.html).  They reached out to the [Engelberg Center](https://www.law.nyu.edu/centers/engelberg) and [Tech Policy Clinic](https://www.law.nyu.edu/academics/clinics/tech-law-policy) to see if there was a way to use their open source license to limit problematic uses of the library.

There is nothing new about attempting to introduce ethical obligations into open source software licenses.  The conventional wisdom in open source software licensing today is that this is a bad idea.  In part, this is due to the fact that it can be maddeningly hard to define ‘bad uses’ in a license in any robust, accurate way.  In a way, this wisdom is codified in the fact that the [Open Source Definition](https://opensource.org/osd) maintained by OSI (a prohibition against non-ethical uses would violate the “No Discrimination Against Fields of Endeavor” principle, among others).

Nonetheless, as the popularity of open source software has grown - and the community has become even more aware of the possible negative uses of software - there has been an increased interest in finding a way to mix ethical principles with an open source ethos.  The [Hippocratic License](https://firstdonoharm.dev/) and [Anti-Capitalist Software License](https://anticapitalist.software/) are two recent examples.  

Within this context, the ml5.js team decided to see if there was a way to bind its community to the ethical principles that they have [worked hard to cultivate](https://ml5js.org/about) through the license on the software itself.

## The ml5.js Approach

The proposed ml5.js approach relies on three main components:

1. Separate the license from the community Code of Conduct
2. Require recognition by a Code of Conduct Committee before a user is formally out of compliance with the Code of Conduct
3. License ‘decay,’ so that the enhanced obligations of the license decay into a more standard MIT license after three years.

### Separate the License from the Community Code of Conduct

One major challenge with attempting to impose ethical obligations via open source software licenses is defining ‘bad.’  Terrorists can become freedom fighters, industrial tools can be used for war, and general purpose code can be used to discriminate against vulnerable communities.  Even if one could define ‘bad’ at the moment of drafting, the length of copyright term means that today’s definition would need to apply in 50 or 100 years.  

The ml5.js approach separates the [license](https://github.com/ml5js/Code-of-Conduct/blob/main/LICENSE.md) from an evolving [Code of Conduct](https://github.com/ml5js/Code-of-Conduct).  The license obligates users to comply with the rules established in the Code of Conduct.  The Code of Conduct can evolve over time.  Equally importantly, the ml5.js community (which tends to skew towards artists and away from lawyers) tends to be more comfortable interpreting and amending Codes of Conduct than licenses.  

This approach comes at the cost of legal ambiguity.  An activity that is allowed today might become prohibited three, five, or even ten years from now.  The excuse provisions in the license itself, as well as the Code of Conduct Committee described below, are designed to mitigate that risk somewhat.  Nonetheless, they do not eliminate it.  Ultimately, the ml5.js team decided that they were comfortable potentially alienating edge cases in service of making a clear commitment to ethical uses.

### Code of Conduct Committee Review of Violations

ml5.js is made up of commits from individuals contributors.  Each one of them licenses their code to users under the license for the ml5.js repo.  Any one of them could potentially accuse a user of violating the Code of Conduct, which would mean the user was violating the ml5.js license.  That could mean that one contributor’s fringe interpretation of the Code of Conduct could disrupt uses that the majority of the ml5.js community found acceptable.  

In order to reduce this risk, and to smooth the interpretation of the Code of Conduct, the license requires that a Code of Conduct Committee made up of members from the ml5.js community agree that a user is violating the Code of Conduct before they fall out of compliance with the license.  Although this is not a guarantee that the Code of Conduct will be enforced fairly and in a way that matches the ml5.js community’s expectations as a whole, it will hopefully reduce the heckler’s veto that the ambiguous nature of ethical concerns introduce to the process.

### License Decay

The extended term of copyright protection can make trying to create a new license dangerous.  A poorly thought out license can create problems for decades into the future.  The license decay provision of the ml5.js approach represents an attempt to reduce two types of that danger.

The ml5.js library is made up of thousands of individual commits by individual contributors.  For the first three years of an individual commits’ existence, that commitment will be licensed under the heightened ml5.js obligations.  After three years, that license decays into the widely-used MIT license.

The first danger that this mechanism addresses is what would happen if ml5.js was abandoned by the community.  As long as ml5.js is in active development, the ml5.js library as a whole will contain commits that are less than three years old. That means that anyone using the library will be bound to comply with the Code of Conduct.  However, if active development ceases, after three years the ml5.js library will no longer contain commits that require compliance with the Code of Conduct and the license will effectively revert to the MIT license.

Additionally, the ml5.js license assumes the existence of a Code of Conduct Committee and, implicitly, of a community that is regularly updating the Code of Conduct itself.  If development of ml5.js stopped, it is also likely that the Code of Conduct Committee would stop operating.  Decay helps avoid fights over the interpretation of the Code of Conduct well after the Committee has dissolved.

The second danger is simply that this exercise turns out to be a horrible idea.  The three year period allows the community to change course.  After three years the legacy of this wrong path will be more or less erased.

## Will This Work?

Will this approach work? It is hard to say.  It is certainly something different.  The approach is much more restrictive than traditional open source licensing.  It also requires more administrative overhead to operate.  As of now, the ml5.js team believes that these costs are worth paying in order to make a strong commitment to ethical uses of the library.  The comment period is open now. If you disagree, we would love to hear from you in the [repo](https://github.com/ml5js/Code-of-Conduct), on [twitter](https://twitter.com/ml5js), on [Discord](https://discord.gg/eejKFhuakF), or via email at feedback@ml5js.org.  
