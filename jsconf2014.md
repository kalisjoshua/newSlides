# JSConf 2014
## Space-launch

---

# Firstly.
## JavaScript is Awesome!

---

# And, if you don't think so...

---

# Get out.

Not really, but seriously, it is.

---

## Day 1 Sessions

  1. Armchair Type Theory
  2. Emotional Safety
  3. Battle-tested Enterprise NodeJS
  4. Frontend Ops Tooling
  5. UI Algorithms
  6. Frontend Performance Testing
  7. RaveJS
  8. Regenerator
  9. Why does ReactJS Scale?

---

# 1. Armchair Type Theory

For your sanity's sake.

---

## Type Theory

JavaScript has some pretty awesome (snark!) types:

  * Number
  * String
  * etc.

But support for creating custom types is not supported.

---

## Type Theory (Why?)

  1. The only way to know your program is correct is to run it.
  2. Narrow the scope of what is a valid program.

---

## Type Theory

````javascript
function areaOfACircle(shape) {

  return Math.PI * shape.radius * shape.radius;
}

areaOfACircle(9); // Boom!
````

---

## Type Theory Applied

````javascript
function areaOfACircle(shape : Circle) {

  return Math.PI * shape.radius * shape.radius;
}
````

