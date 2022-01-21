import React from 'react';
import ReactDOM from 'react-dom';
import App2 from 'Components/App2';

const App = () => <h1>My React and TypeScript App!</h1>;

ReactDOM.render(
  <React.StrictMode>
    <App />
    <img src="images/areaChart.png" alt="Italian Trulli" />
    <App2 />
  </React.StrictMode>,
  document.getElementById('root'),
);
