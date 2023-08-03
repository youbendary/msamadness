import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import Navbar from '../Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <span id="home" />
      <HeroSection />
      <span id="events" />
      <Cards />
      <span id="footer" />
      <Footer /> 
    </>
  );
}

export default Home;