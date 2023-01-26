# Chapter 06 - Exploring the world

● What is Microservices?

-> Microservices are an architectural and organizational approach to software development where software is composed of small independent services that communicate over well defined APIS. These services are owned by small, self-contained teams.

Microservices architectures make applications easier to scale and faster to develop, enabling innovation and accelerating time-to-market for new features.

● What is Monolith architecture ?

-> A monolithic architecture is a traditional model of a software program, which is built as a unified unit that is self-contained and independent from other applications. A monolithic architecture is a singular, large computing network with one code base that couples all of the business concern together.To make a change to this sort of application requires updating the entire stack by accessing the code base and building and deploying an updated version of the service-side interface. This makes updates restrictive and time-consuming.

● What is the difference between Monlith and Microservices ?

-> Monolith - Easy deployment - Easier to develop - Easy Debugging - Simplified testing

Microservices - Flexible scaling - continous deployment - Technology flexibility - High reliability

● Why do we need a useEffect Hook ?

-> By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.

Yes! By default, it runs both after the first render and after every update.

● What is Optional Chaining ?

-> The optional chaining ?. is a safe way to access nested object properties, even if an intermediate property doesn’t exist.

● What is Shimmer UI ?

-> A shimmer screen is a version of the UI that doesn’t contain actual content. Instead, it mimics the page’s layout by showing its elements in a shape similar to the actual content as it is loading and becoming available (i.e. when network latency allows).

A shimmer screen is essentially a wireframe of the page, with placeholder boxes for text and images.

● What is the difference between JS expression and JS statement

-> Expressions: At its core, an expression is a bit of JavaScript code that produces a value.

Statements: A JavaScript program is a sequence of statements. Each statement is an instruction for the computer to do something.

● What is Conditional Rendering, explain with a code example

-> In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.

Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them.

Consider these two components:

```
function UserGreeting(props) {
return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
return <h1>Please sign up.</h1>;
}
```

We’ll create a Greeting component that displays either of these components depending on whether a user is logged in:

```
function Greeting(props) {
const isLoggedIn = props.isLoggedIn;
if (isLoggedIn) {
return <UserGreeting />;
}
return <GuestGreeting />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// Try changing to isLoggedIn={true}:
root.render(<Greeting isLoggedIn={false} />);
```

● What is CORS ?

-> Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.

For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.

The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers. Modern browsers use CORS in APIs such as XMLHttpRequest or Fetch to mitigate the risks of cross-origin HTTP requests.

● What is async and await ?

-> The async function declaration declares an async function where the await keyword is permitted within the function body. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

Async functions can contain zero or more await expressions. Await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected. The resolved value of the promise is treated as the return value of the await expression. Use of async and await enables the use of ordinary try / catch blocks around asynchronous code.

● What is the use of `const json = await data.json();` in getRestaurants()

-> data.json() is a method that let you extraxt a JSON object from the data. The method returns a promise, so you have to wait for the JSON.

**Coding Assginment:**

● Play with useEffect Hook to see when it is called ?(before and after render)
● Play with dependency array in useEffect Hook
● Play with the developer console by putting a debugger in render and useEffect
● Call an actual API to get the data
● Handle error in your API call
● Build Shimmer UI when data is not loaded
● Render your UI with actual API data
● Make Search functionality work
● Make a Login Logout button which toggles with a state
