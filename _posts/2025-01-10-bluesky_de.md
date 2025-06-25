---
layout: post
category: blog
title: Bluesky Bot to Translate Local News
date: 2029-05-10
tags:
- projects
- python
image:
     feature: aqi_display.jpg

---

I made a [bot](https://bsky.app/profile/berlin-news-en.bsky.social) that automatically translates bluesky tweets* from a list of accounts into english.  It is written in python.

I recently relocated to Berlin.  Since I don’t speak german (yet?), I’ve been looking for ways to stay up to date with local news.  There are a handful of english-language publications that cover Berlin and Germany, and I appreciate all of them. However, by necessity, they are not resourced to be comprehensive local news resources.

As you would expect, there is also a robust local german-language press.  I read their sites, but since I haven’t found a way to turn on auto-translate at the domain level, there is friction in waiting to translate each story (yes, this thing is partially motivated by the comically first world problem of having to click an extra button for a robot to translate an article for me).  

Bluesky has become a good way for me to get an ambient sense of what’s going on in the world, with pointers to articles that can give me more context. However, the reporters for the local press tweet in german.  Fortunately, bluesky has a pretty open and robust API.  What if I made a bot that posts translated tweets so they just integrate into the rest of my doom scrolling? 

## Workflow

You could build a bot like this by attaching to the bluesky firehose, filtering for the accounts you care about, and then going from there. However, as ‘firehose’ suggests, that requires receiving and filtering the entire stream of all bluesky posts.  Fortunately, all bluesky accounts are also RSS feeds. That means I can use existing python libraries to pull data from them selectively.  

The workflow for the bot starts with a list of accounts. It is an [actual bluesky list that the bot account maintains](https://bsky.app/profile/berlin-news-en.bsky.social/lists/3lg424mfsl42l), although it could be any public bluesky list.   

When the python script starts, it creates objects for each of the users in the list and saves the current time.  Then, every 2 minutes it checks the RSS feed for each of the accounts in the list. If the latest post in the RSS feed is newer than the time the script started, the script:

- extracts the text of the tweet
- sends the extracted text to the google translate API
- builds a new tweet that includes the source handle (with a link to the account - not a mention because I assume that would be annoying), the tweet text (including any links), and a link to the original tweet
- resets the “is the latest post time newer than” time to the time of that post, so it knows not to deal with the account again until there is an even newer post

As of now, the bot does not support RT/comments or images because those do not show up in the RSS feeds. 

## The Code

The full repo is [here](https://github.com/mwweinberg/bluesky_de).  

### Importing Secrets 

The script itself starts by importing a bunch of libraries, including a local library.  That library is a separate file called `secrets.py`.  As the name suggests, this is where user-specific secrets live.  

If you are using this yourself, you can open `example-secrets.py`:

```
translation_api_key = 'YOUR GOOGLE TRANSLATE API KEY'
user_name = 'ACCOUNT NAME (NO @ SYMBOL)'
password = 'PASSWORD'
```

add your personal variables, and save it as `secrets.py`. The `user_name` and `password` are for the account you want to do the tweeting (make sure you have an app-specific password for this, not your general bluesky account password).  `translation_api_key` is for the google translate account that will be doing the translating.

### Variables and Initial Setup 









*All posts to text-based social media platforms are tweets. When Twitter became X, ‘tweet’ became a generic term. That’s my personal canon.  
