import React from "react";
import HomeComponent from "../components/Home";
import Services from "../components/Services";
import Technologies from "../components/Technologies";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <HomeComponent />
      <Services />
      <Technologies />
      <Footer />
    </>
  );
};

export default Home;
