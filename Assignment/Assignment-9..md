# Theory

● When and why do we need lazy() ?

-> The React.lazy function lets you render a dynamic import as a regular component.

It is a React component that allows you to load components asynchronously.

It is used to increase an application's performance by reducing initial loading time.

● What is suspense ?

-> `<Suspense>` lets you display a fallback until its children have finished loading.

```
<Suspense fallback={<Loading />}>
  <SomeComponent />
</Suspense>

```

React will display your loading fallback until all the code and data needed by the children has been loaded.

● Why we got this error : A component suspended while responding to synchronous input. This will cause thr UI to be replaced with a loading indicator. TO fix, updates that suspend should be wrapped with startTransition ? How does suspense fix this error ?

-> The core of this is just having a component suspend without a suspense boundary:

```
import { Suspense } from "react";

const SuspenseTrigger = () => {
  throw new Promise(() => {});
};

export default function App() {
  return (
    <div className="App">
      <h1>Suspense example</h1>
      {/* <Suspense fallback={<div>loading...</div>}> */}
      <SuspenseTrigger />
      {/* </Suspense> */}
    </div>
  );
}
```

The sandbox seems to give slightly odd behaviour on reloading, so you'll need to do these steps in order to show the issue:

1. Open the sandbox - this starts with no suspense happening (the suspending component is commented out), and should just display "Suspense Example"

2. In App.js, uncomment the <SuspenseTrigger /> line. This suspends on render but there is no suspense boundary so we see the misleading error. This replicates what I'm seeing when Relay suspends to wait for a query result.

3. The simplest fix is to add a suspense boundary, rather than using startTransition as described in the error message. To check this, uncomment the remaining two commented lines in App.js. This gives a fallback component as expected, and resolves the error without requiring startTransition:

Adding startTransition in cases where it makes sense seems to be a nice-to-have addition after a suspense boundary is in place, in that it will delay the transition until the suspending component is ready. However a) this doesn't seem to be the primary problem - that's the lack of suspense boundary, b) the suspense boundary is much easier to add and more general, and c) it seems like it may not always be possible to use a transition. For example where the problem occurs on first load as in the minimal example, or in my react-router case where we can benefit from using startTransition in some places, but it's difficult to make sure any possible navigation route is done as a transition, and missing any out will lead to an error unless we also add a suspense boundary.

So my feeling is that if the error message also suggested adding a suspense boundary, it would reinforce good practice, and in my case would also have got me much more quickly to the real issue of a misplaced <Suspense> component. There may well be other approaches I'm missing, in which case they could be added to the message or in a referenced docs page?

Link : https://github.com/facebook/react/issues/25629

● Advantages and disadvantages of using this code splitting pattern ?

-> Advantages : Code-Splitting is a feature supported by bundlers like Webpack, Rollup and Browserify (via factor-bundle) which can create multiple bundles that can be dynamically loaded at runtime.

Code-splitting your app can help you “lazy-load” just the things that are currently needed by the user, which can dramatically improve the performance of your app. While you haven’t reduced the overall amount of code in your app, you’ve avoided loading code that the user may never need, and reduced the amount of code needed during the initial load.

Disadvantages : The only drawback about code splitting is that you can only use it in client side rendering.

● When do we and why do we need suspense ?

-> React.Suspense lets you specify the loading indicator in case some components in the tree below it are not yet ready to render. In the future we plan to let Suspense handle more scenarios such as data fetching.

# Coding

● Create your custom hooks
● Try out lazy and suspense
● Make your code clean.

# References:

● https://reactjs.org/docs/hooks-custom.html

● https://beta.reactjs.org/apis/react/lazy#suspense-for-code-splitting
