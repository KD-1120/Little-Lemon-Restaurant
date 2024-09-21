import './App.css';
import HeroSection from './components/heroSection';
import NavigationBar from './components/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import SpecialsSection from './components/specialSection';
import TestimonialsSection from './components/testimonials';
import LittleLemonDescription from './components/about';

function App() {
  return (
    <main className="App">
      <NavigationBar/>
      <HeroSection/>
      <SpecialsSection/>
      <TestimonialsSection/>
    </main>
  );
}

export default App;
