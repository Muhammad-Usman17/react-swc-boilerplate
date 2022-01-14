import React from "react";
import ReactDOM from "react-dom";
import App2 from "Components/App2/App2.jsx";

const App = () => <h1>My React and TypeScript App!</h1>;

ReactDOM.render(
  <React.StrictMode>
    <App />
    <App2 />
  </React.StrictMode>,
  document.getElementById("root")
);
