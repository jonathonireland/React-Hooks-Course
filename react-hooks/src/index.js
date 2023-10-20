import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function App(){
  const [status] = useState("Not Delivered");
  return (
    <div>
      <h1>The package is: {status}.</h1>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name="Alex" />
  </React.StrictMode>
);

