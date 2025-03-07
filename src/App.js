import './App.css';
import './css/main.css';
import Home from './pages/Home';
import Sidepanel from './components/Sidepanel';

function App() {
  return (
    <div className="App">
      <body>
        <Sidepanel/>
        <Home/>
      </body>
      
    </div>
  );
}

export default App;
