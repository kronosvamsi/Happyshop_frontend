import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";

function HomePage() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Footer />
    </div>
  );
}

export default HomePage;
