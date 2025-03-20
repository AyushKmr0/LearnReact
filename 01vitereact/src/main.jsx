import { StrictMode, createElement } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  );
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_black',
//       children: 'Hello world'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Googles
  </a>
);

const anotherUser = "Hello World"

const reactElement = createElement(   // it enject bydefault automatically.. and bable(transpilar) inject this ..... // JSX is transpiled by Babel to React.createElement() during the build process.

  'a',  // element
  {href: 'https://google.com', target: '_black'},  // set attributes or empty {}
  'click me to visit google',   // Text enject 


  // anotherUser   // final expression reutrned is called evaluated expression (variables enjected)
);

createRoot(document.getElementById("root")).render(
  
  // <App />
  reactElement

);
