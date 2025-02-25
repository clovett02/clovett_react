import './App.css';
import './css/main.css';
import Home from './pages/Home';
import Sidepanel from './components/Sidepanel';

function App() {
  return (
    <div className="App">
      <Sidepanel/>
      <Home/>
    </div>
  );
}

export default App;
