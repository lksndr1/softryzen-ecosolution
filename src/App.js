import './styles/general.css';
import Header from './components/header/Header';
import Mainsec from './components/main/Mainsec';
import About from './components/about/About';
import Electricity from './components/electricity/Electricity';
import Cases from './components/cases/Cases';

function App() {
  return (
    <div className="App">
      <Header />
      <Mainsec />
      <About />
      <Electricity />
      <Cases />
      
    </div>
  );
}

export default App;
