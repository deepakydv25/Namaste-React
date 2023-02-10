# Assignment 13 - Time for the test

**Theory**

● What are different types for testing?

-> - Unit Testing

    - Integration Testing

    - TDD

    - End-to-End Testing

    - Smoke Testing

    - Performance Testing

● What is Enzyme?
-> Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output.

● Enzyme vs React Testing Library

-> Enzyme

    - Focuses on unit testing means it tests components prop & states value, not actual user flow.

    - As it depends on components prop and state for testing, if you perform any changes in the code, then all test cases for that component will break. Still, If user behavior (user flow) is the same, your test cases will not work.

    - Can perform isolated testing, depends which rendering method you are using. If using shallow rendering, then will render parent component. If using the mount rendering, then it will load parent to child components to test.

    React Testing Library

    - It focuses on user flow-based testing means it performs testing as a real user interacting with your app.

    - It gives you more confidence in your code as it tests the same as real users interacting with your app.

    - It depends on the user flow, not on the code, which means if you make any changes in the code, not in user behavior (user flow), then your test cases will not break.

● What is Jest and why do we use it?

-> Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly.

**Coding**

● Setup React Testing Library
● Write Unit Tests for Header Component to test for Logo, Cart - 0 times and Online Status
● Write Integration Test case for search feature on the Homepage
● Write Integration Test case for Add to Cart flow
