import './css/app.css';
import { BrowserRouter, Routes, Route } from 'react-router';
// import Sidepanel from './components/Sidepanel';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';

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