---
layout: post
title: "What happens when you block internet giants"
tags: [blog]
---

Some months ago I decided to put an end to how much internet giants such as Google and Facebook own my personal data. I blocked my computer from talking directly to their servers, I moved my email and calendar elsewhere. Essentially the more I can avoid any interaction with them, the better.

I started with the basic premise that "*I want to be in control of my data*". Sometimes that meant choosing when to interact with an internet giant and how much I feel like revealing to them. Most of times it meant not interacting with them at all. I don't want to let them be in full control of how much they can know about me. I don't want to be in autopilot mode.

You could call me paranoid about privacy, but the basic principle I'm using is that personal information is (eventual) control over that person. For instance, if you know what grocery store a person visits daily, you are able to control some important aspects of that person's life. This was basically how german [Stasi](https://en.wikipedia.org/wiki/Stasi) operated. The germans are today one of the most privacy-aware people on Earth, for a reason. I'm not saying internet giants are doing the same, *yet*. All I'm saying is I believe I am the only one who should be in control over *my* data.

Here are some measures I took a couple years ago:

- Migrate my email, calendar and contacts from Google to Fastmail
- Use DuckDuckGo as primary search engine
- Delete my Facebook account

These have been quite effective measure in my experience. Migrating to Fastmail was a great decision, it's a good service. On the email side, it doesn't have tags like in Gmail, but I can accept that tradeoff. On the calendar side, I enjoy Fastmail's UX much more, there is something about it that makes adding new events nice. Special mention to the time picker for new events. Google probably still has all my previous email data, and probably some of my current email data through my contacts who have an email address. This is hard to get rid of.

DuckDuckGo has been a great search engine, plus a neat "internet shortcut" tool which Google hasn't been, so far. For instance, you can search for `Newton !w` and that `!w` will mean it will land you directly on the Wikipedia page for "Newton". DuckDuckGo has hundreds of these shortcuts which make browsing the web much nicer.

As a search engine itself, I found myself using `!g` sometimes to fallback to Google searches whenever I was frustrated not finding the answer to some particular programming bug. Then you get to compare how well DuckDuckGo performs, and in all honesty Google wins sometimes. I'll come back later to this point, and argue how DuckDuckGo is still "better" as a search engine.

I have deleted my Facebook account, and don't feel like going back to it not even a single bit. Being free from Facebook's addicting (algorithmically optimized) feed has created more time in my life. Socially, I get to interact with people the old fashion: actually remembering their birthdays and genuinely reaching out to them, meeting friends in person etc. I have less friends in quantity, but more friends in "quality", you could say.

Facebook groups are another realm which I understand I miss. I am not able to connect with people of similar interests who hang out there. This may sound limiting, but the internet is so vast that you are anyway able to somehow find people of similar interests in other medium. Wikipedia, old fashioned forums, Twitter, Reddit, to mention a few.

Facebook events from friends are something else that may feel like a loss, but it is common to have friends directly inform me through IM or email. Also, having downloaded all of my personal Facebook data (which isn't that comprehensive as you would expect), I still have all my friend's email addresses.

The bottom line is you can certainly live a happy and social life being outside Facebook. You can still get to know their important life events such as weddings, births, etc. Humanity was always able to keep up with these types of news, it's not like Facebook is a necessity nowadays.

That said, those measures were not enough. Google and Facebook have plenty of ways of getting my personal data even if I avoid using their accounts. Here are some measures I took a few months ago:

- Started paying for a VPN on my devices
- I chose "no cookies by default" in my browser, and cleaned all my existing cookies
- Blocked, through `/etc/hosts` file, all major domains and subdomains of Facebook, Google and ad networks
- (Consequently) started using Tor browser to occasionally access some websites

VPNs are great for concealing your IP, and therefore your location and your ISP (which in turn could pinpoint you as a person). Good VPNs will use OpenVPN under the hood, provide servers in multiple countries, have a solid privacy policy, and support nice things like "Double VPN" or "Tor over VPN".

Once you block cookies by default, it's impressive how differently websites behave. A privacy-oriented website like DuckDuckGo works perfectly well without any cookies. Yet a media website with just public article content might render completely blank when no cookies are allowed. For those cases, I usually open them in Tor, which works surprisingly fast enough if you have fast internet.

I used [https://github.com/StevenBlack/hosts/](https://github.com/StevenBlack/hosts/) to block many ad networks, and added most Facebook and Google subdomains, which you can find [here](https://gist.github.com/staltz/ec0dff1cf29716e95b0fd84bcfc4b332). As a result, this has forced me not to use `!g` in DuckDuckGo searches. Over time, I have forgotten the existence of Google as a search engine, and still can get work done, can search for anything I want to search for. I believe Google will always be a better search engine because it is able to leverage personal data. DuckDuckGo can't. I want to live with this tradeoff because I don't want a search engine to know about me. I just want it to function as a neutral catalog of internet content.

There may be holes in this method, if some websites or apps communicate directly to some Google-owned static IP address instead of using a subdomain. I'm still looking for ways to cover those holes.

Sometimes when people link to blog content hosted in Facebook, I have to open them in Tor. Which is acceptable.

I also discovered the existence of [Google My Activity](https://myactivity.google.com), which was chilling. Unfortunately my smartphone is an Android, and this means Google gets a lot of my personal data. I'm working on it, trying to get an Ubuntu Phone. For now, I'm trying to minimize what Google can acquire from my phone. The *My Activity* page will show activity from both phone and desktop, based on your own privacy settings: how much you want Google to report on your activities. My initial reaction was to turn off all of those settings. After, a while, I figured that it is smarter to turn all those settings to the maximum. This is a way of getting Google to report back to me how much (or some portion) does it know about me. Which is a way of measuring how effective are my measures. To some degree, it worked. The most that Google can (reportedly) grab of my data is my YouTube activity.

Which leads us to YouTube. While I was able to find alternatives to Gmail (Fastmail), Calendar (Fastmail), Translate (Yandex Translate), etc, YouTube remains as the most indispensable Google-owned web service. It is really really hard to avoid consuming YouTube content. It was probably the smartest startup acquisition ever. My privacy-oriented alternative is to watch YouTube videos through Tor, which is technically feasible but not polite to use the Tor bandwidth for these purposes. I'm still scratching my head with this issue.

As a different topic, some of my measures to avoid privacy invasion are still closed source, like Fastmail or DuckDuckGo. To some extent, I have to just trust in their words. The ideal solution is to trust only in open source to create transparency. Transparency is a requirement for trust. Ultimately, the best measures will be fully open source, fully inspectable.

- - -

The conclusion, for now, is the internet is pretty usable still without Google and Facebook. If you feel encouraged to do the same (or more) as me, your life will be pretty fine, don't worry. Something needs to be done about YouTube's dominance, though.

On the other hand, I won't claim my measures are completely blocking out the control that internet giants have over my personal data. Probably there are holes in my measures. I'm pretty interested in discovering those additional measures, and improving as I go. The business of internet giants is to collect data about our lives. All I'm saying is my life is "none of your business".