REST
====

Relax. You can do it.

---

# The REST You Know

---

... is (probably) wrong.

---

# But That's OK.

We're all in the same boat, so you're not alone.

---

# Ready to get better?

[Audience participation]

---

# I wont do that again.

Promise.

---

# What is REST and why do I care?

---

## Adjenda

Here's what we are gonna cover.

  - What is REST
    + Definition
    + Clarification
  - Examples
    + A simple object collection
    + Less-obvious event modeling
  - Why does anyone care?

---

## What is REST?

  - **REST** - REpresentation State Transfer
  - An architectural style
  - REST is not HTTP, but HTTP does exhibit REST


  > "The World Wide Web represents the largest implementation of a system conforming to the REST architectural style." ~ [wikipedia](http://en.wikipedia.org/wiki/REST)

---

## What REST is not?

  - URIs without file extensions
    + http://example.com/index vs. http://example.com/index.html
  - SEO-friendly URIs
    + http://example.com/user-settings vs. http://example.com/User/Settings
  - Task-based URIs responding only to POST
    + http://example.com/GetUserData
    + http://example.com/SaveUserData
    + http://example.com/UpdateUserData
  - Much more...

---

## Maturity Model

The Richardson Maturity Model describes the three steps towards the glory of REST.

````
RESTful enlightenment
(Level 3) Hypermedia Controls
(Level 2) HTTP Verbs & Status Codes
(Level 1) Resources
The swamp of POX - Plain 'ole XML
````

---

# REST === HyperMedia

REST is supposed to mean HyperMedia.

---

# But...

REST has been done wrong for so long now that it has come to mean something different.

---

# HyperMedia is Hard(er).

Think application state; not resources.

---

# Lets focus on RRREST

*Realized Resource* REpresentation State Transfer

---

![](http://www.qasinternational.com.au/wp-content/uploads/2013/09/pirate2.jpg)

---

# Yes...

I made that up.

---

## What do you mean by *Realized*?

  - Realized
  - Realistic
  - Reasonably-simple
  - Rational
  - Radical
  - Ratified

By 'realized' I mean what most people acually do, or work towards as an ideal.

---

# RRRRRRRRRRRRRRREST

---

![](http://www.delish.com/cm/delish/images/FY/frosted-flakes-tony-tiger-del0311-lg.jpg)

---

# A Rose by Another Name

## Pragmatic REST

---

## Sample

A mythical API provides the Resource endpoint:

````
http://example.com/people/:id
````

### Request

````
GET /people/kalisjoshua HTTP/1.1
<headers>
````

### Response

````
HTTP/1.1 200 OK
<headers>

{
  "name": "Joshua T Kalis",
  "socks": "colorful"
}
````

---

## Some Basics - URIs

````
<scheme>://<host>:<port>/<path>?<search>#<fragment>
````

**http://example.com:80/path-to/resource?filter=active#anchor**

### Breakdown

URI piece | value
--------- | -----
scheme    | http or [https, ftp, etc.]
port      | 80 (80 is default; assumed if nothing is provided)
host      | example.com
path      | /path-to/resource
search    | ?filter=active
fragment  | #anchor - references an [id, name] in the page*

\* *Generally used by the browser to scroll to that element as a accessibility feature.*

---

## URIs

````
<scheme>://<host>:<port>/<path>?<search>#<fragment>
````

  - The `path` should identify a resource
    + A collection of objects
    + A single object with a unique identity
  - The `query` should filter or refine what is addressed by the `path`
    + Filtering a list of object based on a criteria
    + Returning only a subset of properties on a resource

RESTful HTTP APIs will be concerned with the `path` and `query` portions of the URI.

---

## HTTP Verbs

Verb    | Action | Idempotent | Side-effects
------- | ------ | ---------- | ------------
POST    | Create | no         | yes
GET     | Read   | yes        | no
PUT     | Update | yes        | yes
DELETE  | Delete | yes        | yes
OPTION* |||
HEAD*   |||
PATCH*  |||

  - **Idempotent** - repeating a request will not continually change the system
  - **Side-effects** - changes will occur as a result of the request

\* *Left as an exercise for the brave and over-achieving.*

---

# Examples Time

---

## BAD Examples

Don't do the following:

  1. `/v3/json/GetUser/1234` or `/v3/GetUser/1234.json`
    + Don't put the media type in the URI; put it in the request (accept) headers
    + Don't add verbs to the resource; use the proper HTTP verb
    + Pluralize the resource since it is a collection; 'Users' not 'User'
  2. `/MyCollectionOfThings/789/InstanceOfObject/432/NameOfGrouping/Property`
    + Don't filter properties in the URI; use a query to filter
    + Don't nest the URIs to match the data modeling; move resources closest to root as possible

*The APIs that offer these endpoints are not RESTful.*

---

# Do You Want To Design A Good API?

---

# You Want To Design A Good API.

---

## Do These Things First

  1. Evaluate business process*
  2. Identify objects (Resource) that need be represented in the API
  3. Define Verbs for each Resource

\* *We are not going to cover this here.*

---

## Plan

Resource   | POST   | GET    | PUT    | DELETE
---------- | ------ | ------ | ------ | ------
/cats      | Create a new cat resource | Retrieve a list of all Cats | Update the list of all Cats | Empty the list of all Cats
/cats/{id} | error | Retrieve Cat information | Update info about a specific Cat | Remove the Cat from the list of all Cats
/dogs      | Create a new dog resource | Retrieve a list of all Dogs | Update the list of all Dogs | Empty the list of all Dogs
/dogs/{id} | error | Retrieve Dog information | Update info about a specific Dog | Remove the Dog from the list of all Dogs
/pets      | error | Retrieve a list of all Pets | error | Empty the list of all Pets
/pets/{id} | error | Retrieve Pet information| error | Remove the Pet from the list of all Pets

---

## Best Practices

  - Use pluralized Resource endpoints
    + Dogs
    + Cats
    + Persons or People?
  - Use singular-ized nouns for namespaces
  - Model Resources as close to root of the API as:
    + Possible
    + Makes sense for the domain
  - Be **consistent** across all Resources

---

# Why Does Anyone Care?

---

## Library (Helper) - [AngularJS](https://docs.angularjs.org/api/ngResource/service/$resource)

````javascript
angular.module('app')
  .service('API', function ($resource) {
    
    return {
        Dogs: $resoure('/dogs')
      };
  });

angular.module('app')
  .controller('MainCtrl', function (API) {
    API.Dogs
      .get(function (data) {
        // Do something with data
      });

    API.Dogs
      .save({
        // New Dog representation saved to collection
      });
  });
````

---

## Library - [Fermata](https://github.com/natevw/fermata)

````javascript
var api = fermata.json('http://example.com'),
    Dogs = api.dogs;

Dogs.get(function (err, data) {
  // data is a JavaScript object
});

Dogs.post({/* data */}, function (err, result) {
  // report success or failure
});
````

---

## Good Reasons

  - Be part of a community
  - Help others; outside your immediate team
  - Get help from others; outside your immediate team
  - Benefit from the mistakes of other people; stand on the shoulders of giants

---

## Better Reasons

  - Performance
  - Scalability
  - Simplicity
  - Modifiability
  - Visibility
  - Portability
  - Reliability

All of the above are achievable with REST if employed correctly and consistently.

---

# And the best reason...

---

# Look like a genius

---

## Thank You

### Joshua T Kalis

  - [twitter](//twitter.com/kalisjoshua)
  - [github](//github.com/kalisjoshua)

### Resources

  - http://en.wikipedia.org/wiki/Representational_state_transfer
  - http://blog.steveklabnik.com/posts/2011-07-03-nobody-understands-rest-or-http
  - http://nicksda.apotomo.de/2010/10/rails-misapprehensions-crud-is-not-rest
  - http://kellabyte.com/2011/09/04/clarifying-rest/
