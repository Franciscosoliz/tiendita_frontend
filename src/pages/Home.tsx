// pages/Home.tsx

import MainSlider from '../components/MainSlider';
import PromoBanner from '../components/PromoBanner';
import CategorySection from '../components/CategorySection';
import ProductCarousel from '../components/ProductCarousel';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <MainSlider />
      <PromoBanner />
      <CategorySection />
      <ProductCarousel />
      <Footer />
    </>
  );
};

export default Home;
