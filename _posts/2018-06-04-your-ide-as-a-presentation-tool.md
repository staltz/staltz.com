---
layout: post
title: "Your IDE as a presentation tool"
tags: [blog]
---

I've just given my third programming talk where I use only my IDE (integrated development environment) for live coding and no other presentation tool. I noticed the audiences were very pleased with these talks, and I think it's correlated to using an IDE and not a slides program.

- *[Two fundamental abstractions](https://hooktube.com/watch?v=fdol03pcvMA)*, April 2018
- *[You will learn RxJS](https://hooktube.com/watch?v=uQ1zhJHclvs)*, November 2016

I believe source code is best explained in the environment it usually found: in your day-to-day editor. Keynote or Powerpoint are rather alien environments for code to live in, and many developers actually rarely open them in their daily jobs. Presenting with the IDE also helps reduce the distance between the presenter and the audience (which is already big!), as it sets a common ground. A talk should be the shortest mental path from presenter to audience.

Live coding is not for everyone or for every type of presentation, I have to admit it is limited to a certain type of content. That said, a great amount of programming talks are done by default on presentation tools, even though they have plenty of slides with code. Maybe the default should be an IDE!

Let me share with you how I've prepared these talks and how to tweak Visual Studio Code (my usual IDE) for a live coding setting.

## Consider the content

First of all, have some content. This sound obvious, but content is everything. It should never be about **you** live coding, never about the company's products you are advocating, it should always be about new insights, new tricks, new solutions, new skills.

Live coding should not be ready code that you compile and execute, and should not be interrupted by tedious package installations. It should not feel like a performance to be admired, it should instead feel a lot like a "*how to tie your shoes*" video.

Prefer starting with a blank file. This way you have better control over the assumptions, because everyone's minds will start from the same state. Increment those distributed pieces of state one step at a time. Some people will feel bored, some people will struggle to follow, that split is normal. Causing boredom is less harmful than confusing them, so prefer to not make them struggle, but don't make it very boring. One way you can counter the boredom is by first demoing something magical and only after that teaching how to build that magic. Then, the ones bored will stay engaged to pay attention because they want to learn that magic. Even during your boring typing, people can learn a trick or two.

## Prepare a roadmap and practice it

Some people were surprised that I was able to speak and code simultaneously. I don't believe it's an inherent ability, it's probably more like playing guitar while singing. Certainly possible, just requires practice.

The [Egghead model](https://egghead.io/) of online teaching – through bite-sized video lessons always in a code editor – is a radical departure from slides, and took me a while to get used to. It's focused on replicating the feeling you get when a work colleague shows you something from their screen, and in that way is a successful model because it's a familiar experience, straight to the point, and engineered to be useful. Having recorded many Egghead lessons, I got used to speaking and coding simultaneously. I now think it's a good style of teaching also on stage.

Have some roadmap for the talk, but don't write word-by-word speaker notes. Remember, you are teaching how to tie shoes, not giving a formal speech. You shouldn't see speaker notes anyway because your screen will be mirrored to the projector.

One possible template roadmap is about amazing them first, and teaching second:

- Remind them of a commonly experienced problem
- Quickly demonstrate how to magically solve it
- Get them to be amazed, confused, and curious
- Slowly teach how to build that kind of magical solution
- Give them the feeling that they now possess these powers

Another template is about telling a story:

- In the beginning, people did things like `___`
- Over time, they've found solutions such as `___`
- Nowadays, we do it like this `___`
- Have you ever considered doing it like this `___`?
- It would open up this kind of possibilities: `___`
- Can you imagine what you can do now that you've learned this?

And yet another template is about secretly teaching something that you only reveal in the end. Build a library (or a simplified version of it) from scratch without revealing which library you are building, and then near the end of the talk, show them how they just learned the internals of a popular library.

Either way, pick good examples: short enough to teach in a talk, but real-world enough to not feel artificial. Maybe do this with multiple examples. It's fine to have other supporting slides and pictures, as long as the core of your talk is the coding.

Start from scratch, do it slowly, repeat a couple of times, and since you have a presential audience, check often if they're following you or not, and adapt. Make their brains click. Don't let the majority lose your train of thought.

## Use a normal IDE

There is no particular reason I'm highlighting VSCode, this article could be about vim or Emacs or IntelliJ. What matters is what the audience usually uses, and/or what you usually use. In my case I know many people in my community use VSCode.

Then, you'll need to get rid of many fancy customizations that make your IDE look not normal. Fancy customizations distract people from the content or make the talk look harder to replicate on their computer.

For daily coding I have some of my own customizations, but for live coding I use normal-looking themes and few extensions (or none).

Below is the workspace settings I used for my last live coding talk:

```js
{
  "workbench.colorTheme": "GitHub Clean White",
  "workbench.colorCustomizations": {
    "editorCursor.background": "#ffffff",
    "editorCursor.foreground": "#0000bb",
    "editor.lineHighlightBackground": "#f0f0f0",
    "editor.selectionBackground": "#aaeeff"
  },
  "workbench.statusBar.visible": false,
  "workbench.activityBar.visible": false,
  "explorer.openEditors.visible": 0,
  "editor.minimap.enabled": false,
  "editor.renderWhitespace": "none",
  "editor.renderIndentGuides": false,
  "editor.fontFamily": "SF Mono",
  "editor.fontWeight": "600",
  "editor.fontSize": 24,
  "terminal.integrated.fontFamily": "SF Mono",
  "terminal.integrated.fontWeight": "800",
  "terminal.integrated.fontSize": 28,
  "terminal.integrated.shell.linux": "/bin/bash",
  "editor.formatOnSave": false,
}
```

I can explain why I chose each of those:

```
"workbench.colorTheme": "GitHub Clean White",
```

A theme that looks like GitHub, because most developers end up having to browse through code on GitHub every day or week, and there is one common theme that we are all familiar with. No one will feel surprised about the theme. They may not even notice it. In fact, after giving the talk, I didn't receive questions about the theme or the font I used. This is important because you want your audience to focus on the content, not on the wrapping.

```
"workbench.colorCustomizations": {
  "editorCursor.background": "#ffffff",
  "editorCursor.foreground": "#0000bb",
  "editor.lineHighlightBackground": "#f0f0f0",
  "editor.selectionBackground": "#aaeeff"
},
```

These are minor tweaks to the theme in order to improve contrast, and make the cursor really stand out (but not stand out too much that people will begin to directly think about the color of the cursor), so that people follow what you are typing.

```
"workbench.statusBar.visible": false,
"workbench.activityBar.visible": false,
"editor.minimap.enabled": false,
```

You won't absolutely need the status bar, the activity bar, and the minimap. These would otherwise take up some precious screen real estate.

```
"explorer.openEditors.visible": 0,
```

This hides the open files panel on the left, so you rely only on the tabs at the top. The tabs at the top don't take extra space (compared to "hiding" the top tabs), so let's prefer to keep only UI widget to show the open files.

```
"editor.renderWhitespace": "none",
"editor.renderIndentGuides": false,
```

On GitHub we don't see whitespace symbols or indent guides, so let's replicate that here too.

```
"editor.fontFamily": "SF Mono",
"terminal.integrated.fontFamily": "SF Mono",
```

As far as I know, this is the official font used on GitHub.

```
"editor.fontWeight": "600",
"editor.fontSize": 24,
"terminal.integrated.fontWeight": "800",
"terminal.integrated.fontSize": 28,
```

You need the font to be much larger than normal, and slightly bolder than normal, because people will look at your code projected on a screen, potentially from a distance. If you have time, plug your computer to that screen before the talk, walk all the way back to the last row in the venue and check that it's legible. It should feel comfortable for everyone, but don't exaggerate on the font size. The screen should show at least some 20 lines of code at a time, because it helps to understand the context.

```
"editor.formatOnSave": false,
```

Your editor shouldn't do fancy auto-formatting because the audience may not be sure whether that was due to your fast typing or due to auto-formatting. Also, it helps to give them a feeling of dealing with raw code.

```
"terminal.integrated.shell.linux": "/bin/bash",
```

If you use the integrated terminal to execute code, I think it's better to avoid any fancy formatting of the prompt, or any fancy shell (like `fish` or `zsh`) so choose `bash` and use a raw `PS1` env var configuration like `export PS1='\$ '`.

## Prepare the "slides"

Create one file per "slide", named by number: `01.png`, `02.js`, `03.js`, `04.md`, etc. Keep all these files open before starting the talk, so you only need to select the next file to continue.

`.js` files can either be pre-filled or blank. If pre-filled, you should only "show" the file, and it should contain somewhat familiar and easy content. Reserve the core learning material for blank files where you should write it from scratch. As a rule of thumb, pre-filled source code files are for previously known knowledge, blank source code files are for knowledge to be learned during the talk.

If you need to show a diagram, or have a nice-looking presentation title, use an image file and keep it open in a tab. If for some reason you need a video, then one hack I've found is to make it a short gif, embed the gif as an image in a markdown file, then "Markdown: Open Preview" that file, and keep the preview open as a tab.

## Just do it

At the conference or meetup, before getting on stage, don't think about it as a stage. Remember those moments when you showed something to a work colleague on your computer screen. Replicate that by being informal and helpful. Pretend, in your mind, that the audience is telepathically having a conversation with you. Predict their questions and answer them.

Finally, I've found live coding to be less work overall to prepare then a typical slides presentation. Bonus for you: no more pixel-perfect aligning of text boxes and images. Just plain normal coding, which should feel comfortable to you and your audience. That's about it!

