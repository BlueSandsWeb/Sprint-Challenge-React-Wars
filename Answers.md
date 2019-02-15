# Answers

1.  What is React JS and what problems does it try and solve?

  React is a user interface library.  It is designer to help speed up rendering changes to the DOM of a website.  It is often considered to be the View in the Model View Controller model for making websites and web apps.  React solves the DOM being too slow in rerendering large scale, data heavy websites such as facebook.  The other problem it works at solving is having too many items trying to change the DOM at the same time, enough to where you get unintended consequences without a system to work within.  It makes a system for making those changes, by seperating the state of the website from the DOM very explicitly and breaking them up into pieces that are easier to work with (components).

2.  What does it mean to _think_ in react?

  Thinking in react, is to think of different parts of a website as components and subcomponents. It's kind of like thinking of the website like it's made of legos, and you can put it together using different combinations of components.  Thinking this way makes it much easier to build a website with react.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

  A functional / presentational component is one that accepts props as an argument and returns a react element.  The Class / Stateful component is what actually calls the render function, as well as holding the state for itself and all of the functional components that live within it.  The Class component is typically what houses functional components.

4.  Describe state.

  State is the object where the data for a component and it's child components is stored. State is also what the current state of the data is while it's running in the website / web app.  The state of the application is also what you change in order to change the data on the website/app.  It is immutable except for being changed via the setState() method.

5.  Describe props.

  Props are the properties from the parent component that are passed to the child component.  This could be a function or data that is being passed down to the child components. 
