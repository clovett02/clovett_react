import './App.css';
import './css/main.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Sidepanel from './components/Sidepanel';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import { Component } from 'react';

export default function App(){
    return (
      <div className="App">
        <body>
            <BrowserRouter>
              <Routes>
                <Route element={<Sidepanel />}>
                  <Route path='/' element={<Home />} />
                  <Route path='resume' element={<Resume />} />
                  <Route path='projects' element={<Projects />} />
                </Route>
              </Routes>
            </BrowserRouter>
        </body>
        
      </div>
    )
  }