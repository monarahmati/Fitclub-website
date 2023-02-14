import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero'
import Join from './components/Join-us/Join-us';
import Plan from './components/Plan/Plan';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials'




function App() {
  return (
    <div className="App">
      <Hero/>
      <br/>
      <Programs/>
      <Reasons/>
      <Plan/>
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
