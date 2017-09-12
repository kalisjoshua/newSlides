# Code Quality

---

# WARNING

---

## Opinions Ahead

---

## Code quality is an _abstract_ goal.

---

## There is no _one_ recipe for it.

---

# Code Quality Continuum

![Code Quality Continuum](https://s3.amazonaws.com/code-quality-images/code-quality-continuum.png)

---

# How do we measure "quality"?

---

# Code Quality - Speed

How fast is the code with and/or without load?

![Turtle on a tiny skateboard](https://s3.amazonaws.com/code-quality-images/speed.gif)

---

# Code Quality - Readable

can a human easily scan and comprehend it

![A robot reading](https://s3.amazonaws.com/code-quality-images/readable.png)

---

# Code Quality - Maintainable

can another developer quickly make useful changes to it

![Boromir tells us to write maintainable code](https://s3.amazonaws.com/code-quality-images/maintainable.jpg)

---

# Code Quality - Testable

can the code be tested easily

![Write tests cat](https://s3.amazonaws.com/code-quality-images/write-tests.jpg)

---

# Code Quality - Tested

has the code been tested

![Sniff your pits; test](https://s3.amazonaws.com/code-quality-images/tested.jpg)

---

# Code Quality - Covered

is all of the code tested

![All tests pass](https://s3.amazonaws.com/code-quality-images/covered.jpg)

---

# Code Quality - Concise

is the minimum code needed used

![](https://s3.amazonaws.com/code-quality-images/concise.png)

---

# Code Quality - Efficient

does the code make good use of memory and resources

![](https://s3.amazonaws.com/code-quality-images/efficient.jpg)

---

# Code Quality - Documented

how the code works and, possibly, why it is needed are explained

![](https://s3.amazonaws.com/code-quality-images/documentation.jpg)

---

# Code Quality - Correct

the code is bug free

![](https://s3.amazonaws.com/code-quality-images/bug-free.jpg)

---

## Code Quality

Quality is a value measured in many ways:

  1. __Speed__
  2. __Readable__
  3. __Maintainable__
  4. __Testable__
  5. __Tested__
  6. __Covered__
  7. __Concise__
  8. __Efficient__
  9. __Documented__
  10. __Correct__
  11. ... and others.

---

# Where to start?

---

# Disclaimer

I apologize but all my examples are going to be in JavaScript; everything I show
should be easily achievable in any other language using similar tooling.

---

## Style Guide

A set of rules or guidelines used when writing source code to help authors
write consistently. A code base should appear as if one person wrote every part
regardless of how many people contributed to the end result.

  * [IdiomaticJS](https://github.com/rwaldron/idiomatic.js)
  * [AirBnB](https://github.com/airbnb/javascript)
  * Mozilla
  * Google
  * jQuery
  * ... [and many more](https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&es_th=1&ie=UTF-8#q=code%20style%20guide&es_th=1)

---

## Style Checker

Nobody wants to be the style cop. Add a tool to check for coding style as an
automated process; then nobody has to be the cop and you can all hate the
computer together, as it should be.

  * [JSCS](http://jscs.info/)
  * [ESLint](http://eslint.org/) - **Better**

---

## Linter

Let the computer nit pick your work for you. It will be better at it than you
will ever be; and it will be relentless. Add this as a tool in your toolbox as
well; automate all of the things.

  * [JSHint](https://github.com/jshint/jshint) - Good
  * [ESLint](http://eslint.org/) - **Better**

---

## Testing

  * [Mocha](http://mochajs.org/)
  * [Jasmine](http://jasmine.github.io/)

---

## Code Coverage

  * [IstanbulJS](https://github.com/gotwarlost/istanbul)
  * [Coveralls](https://coveralls.io/)

---

## Documentation

  * [JSDoc](http://usejsdoc.org/)

---

## Statistics
  * [Plato](https://github.com/es-analysis/plato)
  * [Codacy](https://www.codacy.com/)
  * [CodeClimate](https://codeclimate.com/)

