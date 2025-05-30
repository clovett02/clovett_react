import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App.tsx';
import Sidepanel from './components/Sidepanel.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <div className='SidepanelContainer'>
        <Sidepanel/>
      </div>
      <div className='AppContainer'>
        <App />
      </div>
    </div>
  </React.StrictMode>
);
