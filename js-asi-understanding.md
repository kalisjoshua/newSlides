# Understanding JavaScript's Automatic Semicolon Insertion

---

# Valid Syntax Problems

---

## Cases

  1. The `return` statements
  2. Accidental globals
  3. Lines starting with: `[`, or `(`

---

## The `return` Statement

```javascript
function alwaysTrue() {
  return // returns "undefined" not "true"; from the next line
    true // never, ever, executed
}
```

<a class="jsbin-embed" href="http://jsbin.com/gapoxoj/embed?js,console">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.41.9"></script>

### Mitigating

  - Write `return` statements as the last in a function or method.
  - Return a variable rather than a raw value.

---

## Accidental Globals

Assigning to a variable without a scope declaration - const, let, or var - will
add the variable to the global scope by default; when not in "strict" mode.

```javascript
function isolation() {
  var one = 1; // declare a new variable within this scope
      two = 2; // accidental global variable; no declaration: const, let, or var
}
```

### Mitigating

  - Make use of `'use strict'`.
  - Only declare one variable per statement.

---

## Connecting Lines
