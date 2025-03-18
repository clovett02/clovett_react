import './App.css';
import './css/main.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Sidepanel from './components/Sidepanel';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <body>
          <BrowserRouter>
          <Sidepanel/>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='resume' element={<Resume />}/>
              <Route path='projects' element={<Projects />} />
            </Routes>
          </BrowserRouter>
      </body>
      
    </div>
  );
}

export default App;
