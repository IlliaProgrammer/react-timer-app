import React from 'react';
import ReactDOM from 'react-dom/client';
import Timer from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Timer autostart={false} step={500}/>
);

