# Assignment 12 - Let's buid our Store

**Theory**

● useContext vs Redux.

-> useContext

    - useContext is a hook

    - It is used to share data

    - Changes are made with the Context value

    - We can change the state in it

    - It re-renders all components whenever there is any update in the provider's value prop

    - It is better to use with small applications

Redux

    - Redux is state management library

    - It is used to manage data and state

    - Changes are made with pure functions i.e. reducers

    - The state is read-only. We cannot change them directly

    - It only re-render the update components

    - It is perfect for larger applications

● Advantage of using Redux Toolkit over Redux.

-> The Redux Toolkit package is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux:

    - Configuring a Redux store is too complicated

    - I have to add a lot of packages to get Redux to do anything useful

    - Redux requires too much boilerplate code

● Explain Dispatcher.

-> This hook returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed.

● Explain Reducer.

-> Reducers are functions that take the current state and an action as arguments, and return a new state result. In other words, (state, action) => newState

A Redux app really only has one reducer function: the "root reducer" function that you will pass to createStore later on. That one root reducer function is responsible for handling all of the actions that are dispatched, and calculating what the entire new state result should be every time.

● Explain slice.

-> A "slice" is a collection of Redux reducer logic and actions for a single feature in your app, typically defined together in a single file. The name comes from splitting up the root Redux state object into multiple "slices" of state.

● Explain selector.

-> A "selector function" is any function that accepts the Redux store state (or part of the state) as an argument, and returns data that is based on that state.

● Explain createSlice and the configuration it takes.

-> A function that accepts an initial state, an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.

**Coding**

● Practice making a stor, slices and do read and write operations using Redux Stroe
● Buid Cart Flow using Redux Store
