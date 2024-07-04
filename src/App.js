import './styles/general.css';
import Header from './components/header/Header';
import Mainsec from './components/main/Mainsec';
import About from './components/about/About';
import Electricity from './components/electricity/Electricity';
import Cases from './components/cases/Cases';
import Faq from './components/faq/Faq';
import Contact_us from './components/contact-us/Contact_us';

function App() {
  return (
    <div className="App">
      <Header />
      <Mainsec />
      <About />
      <Electricity />
      <Cases />
      <Faq />
      <Contact_us />
      
    </div>
  );
}

export default App;
