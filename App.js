import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "title", key: "h1" },
  "Heading 1 from parcel"
);

const heading2 = React.createElement(
  "h2",
  { id: "title", key: "h2" },
  "Heading 2"
);

const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
]);

// Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")

/**
 * <div class="title">
      <h1>H1</h1>
      <h2>H2</h2>
      <h3>H3</h3>
    </div>;
*/

const h1 = React.createElement("h1", { key: "hed1" }, "Heading 1");

const h2 = React.createElement("h2", { key: "hed2" }, "Heading 2");

const h3 = React.createElement("h3", { key: "hed3" }, "Heading 3");

const title = React.createElement("div", { class: "title" }, [h1, h2, h3]);

// 1. commit -> Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")

// Create the same element using JSX

const h1JSX = <h1 key="heading1">Heading 1 using JSX</h1>;

const h2JSX = <h2 key="heading2">Heading 2 using JSX</h2>;

const h3JSX = <h3 key="heading3">Heading 3 using JSX</h3>;

const titleJSX = React.createElement("div", { class: "title" }, [
  h1JSX,
  h2JSX,
  h3JSX,
]);

// 2. commit -> Create the same element using JSX

// Create a functional component of the same with JSX

const H1FComp = () => <h1>Heading 1 using Functional Component</h1>;

const H2FComp = () => <h2>Heading 2 using Functional Component</h2>;

const H3FComp = () => <h3>heading 3 using Functional Component</h3>;

const TitleFComp = () => {
  return (
    <div>
      <H1FComp />
      <H2FComp />
      <H3FComp />
    </div>
  );
};

// 3. commit -> Create a functional component of the same with JSX

// Pass attributes into the tag in JSX

// Compositon of Component(Add a component inside another)

const Component1 = () => {
  return (
    <div>
      <h1>Componenet 1</h1>
    </div>
  );
};

const Component2 = () => {
  return (
    <div>
      <Component1 />
      <h2>Component 2</h2>
      <p>Component inside another Component</p>
    </div>
  );
};

// 4. commit -> Compositon of Component(Add a component inside another)

// {TitleComponent} vs {<TitleComponent />} vs {<TitleComponent></TitleComponent>} in JSX

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(title);

// root.render(titleJSX);

// root.render(<TitleFComp />);

root.render(<Component2 />);
