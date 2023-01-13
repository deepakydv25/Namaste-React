# Assignment

● Is JSX mandatory for React ?

-> JSX is not required for using React. Using React without JSX is especially convenient when you don't want to set up compilation in your build environment.

Each JSX element is just syntactic sugar for calling React.createElement(component, props, ...children). So, anything you can do with JSX can also be done with just plain JavaScript.

---

● Is ES6 mandatory for React ?

-> It is not mandatory ES6 to use for React, but it is highly recommended to use ES6 for React.

---

● `{TitleComponent}` vs `{<TitleComponent />}` vs `<TitleComponent></TitleComponent>` in JSX

● How can i write comments in JSX ?

-> // => use for single line commnet.

/\* \*/ => use for multiple line commnets.

---

● What is <React.Fragment></React.Fragment> and <></> ?

-> A common pattern in React is for a componet to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.

---

● What is Virtual DOM ?

-> Virtual DOM is a programming concept which is nothing but representation of UI is kept in memory and synced with DOM. The Virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.

---

● What is Reconciliation in React ?

-> Reconciliation is a process in wchich it re-render only that part of tree which got added or changed with the help of Diff algorithm.

---

● What is React Fiber ?

-> React Fiber is the new reconciliation engine in React 16. Its main goal is to enable incremental rendering of the Virtual DOM.

---

● Why we need keys in React ? When do we need keys in React ?

-> So if we do not add keys in React, then it will not understand which new elements or tags got added and will re-render whole tree and it will be a slow process. So, keys are unique and when we use it in React then it only re-render the new elements or tags which got added, not whole tree.

---

● Can we use index as keys in React ?

-> It is not recommaended to use index as keys.

No keys < Index Key < Keys

---

● What is props in React ? Ways to

-> Props are nothing but property. Which is passed to component. Props are Read-Only. Component must never modify it's own props. Such function are called pure. All React components must act like pure function with respect to their props.

---

● What is config Driven UI ?

->

---

**Coding Assignment:**

● Build a Food Ordering App

    ● Think of a cool name of your App
    ● Build a AppLayout
    ● Build a Header Component with Logo & Nav Items & Cart
    ● Build a Body Component
        ● Build a RestaurantList Component
        ● Build a RestaurantCard Component
            ● Use a static data initally
            ● Make your card dynamic(pass in props)
                ● Props - passing arguments to a function - Use Destructuring & Spread operator
            ● Render your cards with dynamic data of restaurants
            ● Use Array.map to render all the restaurants

# References

● Code Link: https://bitbucket.org/namastedev/namaste-react-live/src/master/
● React without JSX:https://reactjs.org/docs/react-without-jsx.html
● Virtual DOM: https://reactjs.org/docs/faq-internals.html
● Reconciliation: https://reactjs.org/docs/reconciliation.html
● React Fiber Architecture: https://github.com/acdlite/react-fiber-architecture
● React without ES6: https://reactjs.org/docs/react-without-es6.html
● Index Keys as Anti-Pattern: https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/
