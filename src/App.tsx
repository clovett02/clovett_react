import './css/app.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home.tsx';
import Resume from './pages/Resume.tsx';
import Projects from './pages/Projects.tsx';

export default function App(){
    return (
      <div className="App">
            <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/resume' element={<Resume />} />
                  <Route path='/projects' element={<Projects />} />
              </Routes>
            </BrowserRouter>
        
      </div>
    )
  }