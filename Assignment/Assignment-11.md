# Theory:

● What is prop drilling ?

-> If data is in parent component and you want to access it in child/ grandchild component. so you pass data from parent to child to grand child, so the whole process is known as prop drilling.

● What is lifting the state up ?

-> Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. This is known as lifting state up.

● What is Context Provider and Context Consumer ?

-> Context Provider : Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.

The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.

Context Consumer : A React component that subscribes to context changes. Using this component lets you subscribe to a context within a function component.

Requires a function as a child. The function receives the current context value and returns a React node. The value argument passed to the function will be equal to the value prop of the closest Provider for this context above in the tree. If there is no Provider for this context above, the value argument will be equal to the defaultValue that was passed to createContext().

● If you don't pass a value to the provider does it take the default value ?

-> The defaultValue argument is only used when a component does not have a matching Provider above it in the tree. This default value can be helpful for testing components in isolation without wrapping them. Note: passing undefined as a Provider value does not cause consuming components to use defaultValue.

# Coding:

● Practice React Context with code examples
● Try out Nestes Contexts

# References:

● Lifting State Up
● React Context
