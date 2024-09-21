import './App.css';
import HeroSection from './components/heroSection';
import NavigationBar from './components/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import SpecialsSection from './components/specialSection';
import TestimonialsSection from './components/testimonials';
import {About} from './components/about';
import CTA from './components/cta';
import Footer from './components/footer';

function App() {
  return (
    <main className="App">
      <NavigationBar/>
      <HeroSection/>
      <SpecialsSection/>
      <TestimonialsSection/>
      <About/>
      <CTA/>
      <Footer/>
    </main>
  );
}

export default App;
