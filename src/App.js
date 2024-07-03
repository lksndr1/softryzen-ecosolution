import './styles/general.css';
import Header from './components/header/Header';
import Mainsec from './components/main/Mainsec';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Mainsec />
      <About />
      
    </div>
  );
}

export default App;
