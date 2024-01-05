import "./Home.css";
import AnnouncementBar from "./../../components/AnnouncementBar/AnnouncementBar";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import LogoCloud from "../../components/LogoCloud/LogoCloud";
import Feature from "../../components/Feature/Feature";
import Component1 from "../../components/Component1/Component1";
import Testimonial from "../../components/Testimonial/Testimonial";
import CallToAction from "./../../components/CallToAction/CallToAction";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <LogoCloud />
      <Feature />
      <Component1 />
      <Testimonial />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
