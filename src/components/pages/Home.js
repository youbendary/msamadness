import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <section id="events">
        <Cards />
      </section>
      <Footer />
    </>
  );
}

export default Home;