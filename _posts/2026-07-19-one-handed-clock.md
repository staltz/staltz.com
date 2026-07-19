---
layout: post
title: "One-handed clock"
tags: [blog]
---

I hate analog clocks. It takes (slightly) too long to read them, so I've preferred digital clocks my entire life.

However, digital clocks tell you a point in time and nothing else. They have no any visual cue to help see the passage of time. Analog clocks have motion, and as a result help the user associate difference in needle angle to difference in time.

I felt like building a simpler analog clock, so I went ahead and built one for myself. My goal is simplicity, quickness to read (must be <1 second), and elegance. I also want to live a calmer lifestyle where I'm not monitoring every single minute.

<div id="one-handed-clock"><style>#one-handed-clock{--face:#fff;--face-border:#b4b2a9;--tick-hour:#2c2c2a;--tick-minor:#888780;--numbers:#2c2c2a;--hand:#2c2c2a;--hand-outline:rgba(44,44,42,.4);display:flex;flex-direction:column;align-items:center;gap:1rem;font-family:system-ui,-apple-system,"Segoe UI",sans-serif}[data-theme=dark] #one-handed-clock{--face:#1f1e1d;--face-border:#5f5e5a;--tick-hour:#f1efe8;--tick-minor:#888780;--numbers:#f1efe8;--hand:#f1efe8;--hand-outline:rgba(241,239,232,.4)}</style><svg id="clock" viewBox="0 0 220 220" width="260" height="260" role="img" aria-label="One-handed clock"><circle cx="110" cy="110" r="104" fill="var(--face)" stroke="var(--face-border)" stroke-width="1.5"/><g id="ticks"></g><g id="numbers" font-size="15" fill="var(--numbers)" text-anchor="middle"></g><g id="handGroup"><line x1="110" y1="118" x2="110" y2="30" stroke="var(--hand-outline)" stroke-width="5.5" stroke-linecap="round"/><line x1="110" y1="118" x2="110" y2="30" stroke="var(--hand)" stroke-width="4" stroke-linecap="round"/></g><circle cx="110" cy="110" r="5" fill="var(--hand)" stroke="var(--hand-outline)" stroke-width=".75"/><circle cx="110" cy="110" r="2" fill="var(--hand-outline)"/></svg><script>(function(){var r=document.getElementById("one-handed-clock"),NS="http://www.w3.org/2000/svg",ticks=r.querySelector("#ticks"),nums=r.querySelector("#numbers"),cx=110,cy=110,h,q,idx,ang,isH,r1,line,n,a,t,hand=r.querySelector("#handGroup");for(h=0;h<12;h++)for(q=0;q<4;q++){idx=h*4+q;ang=idx*7.5*Math.PI/180;isH=q===0;r1=(isH||q===2)?90:96;line=document.createElementNS(NS,"line");line.setAttribute("x1",cx+r1*Math.sin(ang));line.setAttribute("y1",cy-r1*Math.cos(ang));line.setAttribute("x2",cx+101*Math.sin(ang));line.setAttribute("y2",cy-101*Math.cos(ang));line.setAttribute("stroke",isH?"var(--tick-hour)":"var(--tick-minor)");line.setAttribute("stroke-width",isH?2:1);ticks.appendChild(line)}for(n=1;n<=12;n++){a=n*30*Math.PI/180;t=document.createElementNS(NS,"text");t.setAttribute("x",cx+76*Math.sin(a));t.setAttribute("y",cy-76*Math.cos(a)+5);t.textContent=n;nums.appendChild(t)}function tick(){var now=new Date(),m=now.getMinutes()+now.getSeconds()/60,hr=(now.getHours()%12)+m/60;hand.setAttribute("transform","rotate("+(hr*30)+" 110 110)")}tick();setInterval(tick,1e3)})()</script></div>

It's a clock with just one hand, the hour hand. I removed the minute hand (and especially the second hand) for a various reasons:

* It is longer than the hour hand, taking more attention, while the hour is arguably the more important information
* Simply having many hands on the clock creates visual pollution, and adds difficulty to read what time it is
* With just one hand, I can have the hour hand be the longer one, which makes it more "accurate" for reading

Another important detail concerns the ticks in between the hour numbers. Now that the minute hand is gone, the ticks don't need to mean "1 minute" anymore. In a classic analogue clock, the tick also signifies "10 minutes" for the hour hand.

I changed this so there's a major tick for half-hours and minor ticks for 15 minutes. The reason is that most of human meetings happen at either XX:00 or XX:30, with a few rare cases of XX:15 or XX:45 meetings. Rarely (okay, frankly, never) there's something starting at e.g. XX:40. Also, there are now less ticks overall, contributing to a less visually busy design. On my Samsung Galaxy Watch, the minor ticks appear only when you raise your wrist.

[![One-handed clock on a Galaxy Watch](/img/onehandedclock.jpg)](/img/onehandedclock.jpg)

No single clock face can make all humans happy, I'm sure there are people who want to track minute by minute. This one is not for them. I've been using this for a week now and enjoying the simplicity of it. The possibility of simply building things like this with AI is important for experimentation and customization.