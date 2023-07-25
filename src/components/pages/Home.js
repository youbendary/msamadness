import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <section id="nav-bar" />
      <HeroSection />
      <section id="events">
        <Cards />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default Home;