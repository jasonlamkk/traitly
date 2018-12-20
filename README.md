# traitly
A lightweight Traits like module in JavaScript

[![Build Status](https://travis-ci.org/jasonlamkk/traitly.svg?branch=master)](https://travis-ci.org/jasonlamkk/traitly) [![dependencies Status](https://david-dm.org/jasonlamkk/traitly/status.svg)](https://david-dm.org/jasonlamkk/traitly) [![devDependencies Status](https://david-dm.org/jasonlamkk/traitly/dev-status.svg)](https://david-dm.org/jasonlamkk/traitly?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Bring Traits from PHP to JavaScript** ✨

A Trait is distinguishing quality or characteristic.

Borrowed from PHP:

> Traits is a mechanism for code reuse in single inheritance languages. A Trait is intended to reduce some limitations of single inheritance by enabling a developer to reuse sets of methods freely in several independent classes living in different class hierarchies.

# Usage / Samples

TODO

# Features

* **ES6/ESNext** - Write _ES6_ code and _Babel_ will transpile it to ES5 for backwards compatibility
* **Test** - _Mocha_ with _Istanbul_ coverage
* **Lint** - Preconfigured _ESlint_ with _Airbnb_ config
* **CI** - _TravisCI_ configuration setup
* **Minify** - Built code will be minified for performance

# Commands
- `npm run clean` - Remove `lib/` directory
- `npm test` - Run tests with linting and coverage results.
- `npm test:only` - Run tests without linting or coverage.
- `npm test:watch` - You can even re-run tests on file changes!
- `npm test:prod` - Run tests with minified code.
- `npm run test:examples` - Test written examples on pure JS for better understanding module usage.
- `npm run lint` - Run ESlint with airbnb-config
- `npm run cover` - Get coverage report for your code.
- `npm run build` - Babel will transpile ES6 => ES5 and minify the code.
- `npm run prepublish` - Hook for npm. Do all the checks before publishing your module.

# Installation
Just clone this repo and remove `.git` folder.

# Contribution

* Suggestions - feel free to post issues/suggestions
* Add more traits - Inside the trails/* folder are collections of common reusable codes. Feel free to add any traits that help solve some common problems. If you want to promote your web services / APIs / libraries, you are also welcomed to contribute sample code about them.  
* Any things useful

**Make a better JavaScript world :) **

# License
MIT (c) 2018 Jason Lam [we are hiring](http://linkedin.com/in/jasonlamkk)
