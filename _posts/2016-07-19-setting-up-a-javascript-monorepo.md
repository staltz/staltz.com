---
layout: post
title: "Setting up a JavaScript monorepo"
---

Yesterday I finished migrating Cycle.js to a [monorepo](https://github.com/cyclejs/cyclejs). It was previously split up into multiple repositories, one for each package. I recommend a monorepo over separate repos if you have many packages that are under one project. Managing multiple repos isn't that fun. Multiple repos means multiple places to manage issues, manage issue labels (and making them consistent across repos), manage PRs, git hooks for conventions, etc.

The first challenge was to merge all the repos in order to keep **all** commits. This [StackOverflow thread](http://stackoverflow.com/questions/277029/combining-multiple-git-repositories) helped.

The options out there right now, as far as I know, are [Lerna](https://lernajs.io/), [Builder](http://formidable.com/open-source/builder/), and a custom setup. Which one is best? It depends on your situation.

I tried both Lerna and Builder. They are decent, but don't add much value in my situation. Turns out a few custom bash scripts were the best for me. My case was: a small number of packages (about 10), and a rather homogenous structure for each package. I also wanted to have the simplest possible monorepo setup, with the least amount of magic as possible.

Lerna seems the best if you have a ton of packages (like more than 20, like Babel has) and if all of those package have the same synchronized version (the so called fixed/locked mode). Either do things the Lerna way or customizing it may not be worth the time. I wanted independent mode, which Lerna supports but isn't the default. Also, I wanted packages to live in directories under the root, not under a `packages` directory. Customizing Lerna wasn't obvious. Overall Lerna is good, recommendable, but in my case my problems weren't big enough to make it worth adopting Lerna.

Formidable Builder helps to keep things DRY. I love the archetype idea but I wish it was built in npm already. Having to use the `builder` CLI to wrap `npm` CLI to support archetypes is not so attractive in my opinion. On the other hand I find it great how they give you a reverse migration guide: "*I Give Up. How Do I Abandon Builder?*". Rarely do open source tools provide that type of documentation. Like Lerna, Builder is also good and recommendable, but my problems weren't big enough to make it worth adopting Builder.

Bash scripts, combined with a project structure inspired by Lerna, turned out to get the job done really well. I set up the monorepo with:

- One top-level `package.json` to contain just `devDependencies` and common scripts
- Each package `@cycle/foo` in its own `foo` directory
- A handful of small bash scripts under the `_scripts` directory

The package.json of each library may reference a devDependency installed at the top-level, like `../node_modules/.bin/browserify`. One of the bash scripts allows me to run an `npm` command for each package. For instance, `_scripts/npm-x-for-all-packages.sh install` runs `npm install` for each package. This was inspired by Lerna's `lerna run install`.

We have some duplication of configuration across package.json files, and archetypes here would have helped. But it also turns out that running a bash script that modifies all package.json files consistently works well too. For that, in bash we iterate over each package, and run a tool like [jase](https://www.npmjs.com/package/jase) to read or modify the package.json file.

I also rolled out my own variant of [semantic release](https://www.npmjs.com/package/semantic-release). I have a script (130 lines of code long) called `check-release` that simply shows a report of what packages should be published, and whether the new version should be PATCH, MINOR, or MAJOR. This script was built using [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog), which solves for me the problems of iterating over git commits that follow a [commitizen](https://www.npmjs.com/package/commitizen) convention for the commit messages. Here's what `check-release` looks like:

```text
> cyclejs git:(master)  npm run check-release

> @ check-release /Users/staltz/oss/cyclejs
> _scripts/check-release.js

RELEASES TO DO

We checked all packages and recent commits, and discovered that according to semver.org you should release new versions for the following packages.

`jsonp` needs a new PATCH version released because:
  . fix(jsonp): subscribe bug #8

`most-adapter` needs a new MAJOR version released because:
  . fix(most-adapter): comply with new stream adapter interface
    BREAKING CHANGE
  . feat(most-adapter): replace holdSubject() with subject
    BREAKING CHANGE

`rx-adapter` needs a new MINOR version released because:
  . feat(rx-adapter): add remember() method
```

Then, we have a script called `release` that simply executes the publishing which `check-release` recommended. It will run `npm version patch` (or `npm version minor` etc) and:

- On `preversion`, `npm test` the package
- On `version`, make the bundle using browserify, generate the README.md with API from the source using `markdox`, generate the changelog with `conventional-changelog`
- On `postversion`, git commit as `release(THEPACKAGE): vTHENEWVERSION`, git push, and npm publish

And there aren't more scripts than these. Going custom allowed us to, well, *customize* exactly how we wanted. Bash's syntax kind of sucks sometimes, like:

```text
git commit -m \"release(${PWD##*/}): v$(cat package.json | ../node_modules/.bin/jase version)\"
```

But once you write it down, it's very simple and unverbose. I like it that I have a few small scripts to maintain.

What I described might or might not work for you. Make up your own mind.
