---
layout: post
category: blog
title: Which CERN Open Hardware License Should I Use?
date: 2025-08-08
tags:
- copyright
- opensourcehardware
image:
     feature: shop.png

---


Trying to decide which open hardware license to use? Not super interested in actually reading the text of licenses?  You have come to the right place.  There are a bunch of caveats at the bottom of this post, but let’s get to the heart of things.

## You Probably Want to Use a CERN License

While there are number of open hardware licenses, CERN (yes, [that CERN](https://home.cern/)) has released what is the most modern and sophisticated [suite](https://gitlab.com/ohwr/project/cernohl/-/wikis/Documents/CERN-OHL-version-2) of them. If you are looking for a license that will basically do what you expect without thinking too much about it, and don’t have an existing preference for another license, this is where you should start. 

CERN’s Version 2.0 suite includes three flavors of licenses:

- CERN-OHL-*P* (permissive) ([text](https://ohwr.org/cern_ohl_p_v2.pdf) [user guide](https://gitlab.com/ohwr/project/cernohl/-/wikis/uploads/8a6b5d01f71c207c49493e4d114d61e6/cern_ohl_p_v2_howto.pdf))
- CERN-OHL-*W* (weakly reciprocal) ([text](https://ohwr.org/cern_ohl_w_v2.pdf) [user guide](https://gitlab.com/ohwr/project/cernohl/-/wikis/uploads/c2e5e9d297949b5c2d324a6cbf6adda0/cern_ohl_w_v2_howto.pdf))
- CERN-OHL-*S* (strongly reciprocal) ([text](https://ohwr.org/cern_ohl_s_v2.pdf) [user guide](https://gitlab.com/ohwr/project/cernohl/-/wikis/uploads/cf37727497ca2b5295a7ab83a40fcf5a/cern_ohl_s_v2_user_guide.pdf))

Which one should you use?

### You should use **CERN-OHL-P** if…

you want people to give you credit for creating your hardware, and not require very much else.  P’s main requirement is that anyone who uses or builds upon your hardware keep the original “notices” intact.  What are “notices”?  Mostly the acknowledgements that you created the original version, as well as the disclaimer of warranties. Beyond that, they can more or less do as they please. 

#### Open Source Source Software License Equivalents

**P** is conceptually similar to licenses like **[MIT](https://choosealicense.com/licenses/mit/)** or **[BSD](https://choosealicense.com/licenses/bsd-2-clause/)**.

### You should use **CERN-OHL-W** if …

you want people to: 
- give you credit for creating your hardware **AND** 
- openly license their own modifications to your hardware **BUT** 
- not require that larger projects incorporating your hardware become openly licensed too.

In addition to keeping notices, W’s “weak” reciprocity means that any modifications need to be openly licensed as well.  That reciprocity is weak because it does not extend to situations where your smaller hardware is incorporated into larger hardware.  

For example, imagine you created a small piece of hardware that controls a robotic eye socket.  If someone modified your robot eye socket hardware, their new version would have to be openly licensed.  **However,** if they plugged your robot eye socket hardware into their own Giant Death Robot, the rest of the Giant Death Robot would not need to be openly licensed just because it incorporated your open element. 

#### Open Source Source Software License Equivalents

**W** is conceptually similar to licenses like the **[LGPL](https://choosealicense.com/licenses/lgpl-3.0/)**.

### You should use **CERN-OHL-S** if…

you want people to: 
- give you credit for creating your hardware **AND** 
- openly license their own modifications to your hardware **AND** 
- require that larger projects incorporating your hardware become openly licensed too.

The reciprocity in S is strong because it extends to any hardware that incorporates your hardware.  If the Giant Death Robot incorporated your CERN-OHL-S licensed eye socket, the entire robot would need to be released under that license as well. 

#### Open Source Source Software License Equivalents

**W** is conceptually similar to licenses like the **[GPL](https://choosealicense.com/licenses/gpl-3.0/)**.


##  More Information

This blog post is short and just skims the surface of these licenses.  If you want more detail, CERN itself has a great [rationale document](https://gitlab.com/ohwr/project/cernohl/-/wikis/uploads/0be6f561d2b4a686c5765c74be32daf9/CERN_OHL_rationale.pdf) explaining why they created this version of the licenses, and [FAQ](https://gitlab.com/ohwr/project/cernohl/-/wikis/faq) related to them.  There are also user guides for each license.

[ChooseALicense.com](https://choosealicense.com/) also has pages for the [P](https://choosealicense.com/licenses/cern-ohl-p-2.0/), [W](https://choosealicense.com/licenses/cern-ohl-w-2.0/), and [S](https://choosealicense.com/licenses/cern-ohl-s-2.0/) licenses.

And, of course, OSHWA has a whole [suite of materials](https://certification.oshwa.org/process/hardware.html) about how to think about licensing and open source hardware (click on the “licensing” tab).

Finally, you can just [read the licenses themselves](https://gitlab.com/ohwr/project/cernohl/-/wikis/Documents/CERN-OHL-version-2).

## Caveats

There are two important caveats to this post. 

First, even though I am a lawyer, I am not your lawyer and this post is not legal advice.  If you have questions about the specifics of licensing your hardware, trust your instincts and talk to a lawyer who can actually be your lawyer.

Second, analogies between open source software licensing and open source hardware licensing are helpful but imperfect.  The most practical impact of this imperfection is that creators of hardware may not always be able to legally enforce licensing obligations (like a requirement for open Giant Killer Robots) on downstream users.  On balance this is a positive thing because it marks the limits of copyright, but it can create some confusion.  There is more information about these limits [here](https://michaelweinberg.org/post/145301850875/the-missing-half-of-open-source-hardware-licenses) and [here](https://michaelweinberg.org/post/156095370255/is-it-better-to-over-license). 

Open source hardware licensing is still valuable!  It just works slightly differently than open source software licenses. The best way to think about open source hardware licenses is that they:
- Remove potential legal barriers to good actors
- Send strong social signals about how you want your hardware to be used
- May impose obligations on other users, but those obligations are not guaranteed to be legally enforceable in all situations (again, this is a situation where talking to a lawyer can give you real clarity).



_Feature image: [Shop Scene](https://www.si.edu/object/shop-scene:chndm_1921-6-201-109) from the Smithsonian Open Access collection_