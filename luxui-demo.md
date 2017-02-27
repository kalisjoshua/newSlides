# LuxUI

A new approach to web applications

---

# What is Lux?

LuxUI is a UI rendering framework for hypermedia APIs.

---

# What's the goal?

The goal of LuxUI is to put the API in ***complete*** control of application
logic.

---

# How?

The LuxUI strategy enforces a strict separation between the concepts of "what"
and "how" to render the UI.

---

![Traditional Web Applications](http://oi66.tinypic.com/2eg9zbl.jpg)

---

![LuxUI Web Applications venn diagram](http://oi67.tinypic.com/2i92nw7.jpg)

---

# Why?

---

# Drive hypermedia adoption.

I wanted to create a compelling reason for API developers to adopt hypermedia.

---

# Automate... me.

I am a UI developer who no longer wants to build - repetitive - UIs; or see
others do it when I don't think that they need to.

---

# Empower everyone.

---

# Show some code!

---

## Demo outline.

  1. Application setup
    1. First API Resource (root)
    2. Import LuxUI
    3. LuxUI Configuration
    4. Start the application
    5. Custom Styles
  2. Static Page
    1. Add the route to the API `links`
    2. Define a ReactJS component
    3. Import ReactJS (for JSX)
    4. Static page routes
    5. Default page (window.location)
  3. API Collection resource
    1. Link object in "root" resource
    2. New endpoint
      1. Resource `class`
      2. `entities`
      3. `properties`
  4. API Item resource
    1. NOTE: No link is "root" resource
    2. New Endpoint
      1. Resource `class`
      2. `actions`
      3. Action `class`
      4. Action `fields`
      5. Link "self"
  5. Custom components
    1. Add the field entry in the API
    2. Define a new ReactJS component
    3. Register the new component with the application
