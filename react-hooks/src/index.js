import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {useFetch} from "./useFetch";

function App({login}) {
  const { loading, data, error } = useFetch(
    `https://api.github.com/users/${login}`
  );
  if(loading) return <h1>loading...</h1>;
  if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>
  return (
    <div>
     {JSON.stringify(data, null, 2)}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App login="jonathonireland" />
);
