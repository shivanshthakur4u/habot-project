import React from "react";
import Banner from "../components/Banner";
import AboutHabot from "../components/AboutHabot";
import VideoComponent from "../components/VideoComponent";
import FindYou from "../components/FindYou";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="flex flex-col">
      <Banner />
      <AboutHabot />
      <VideoComponent />
      <FindYou />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default Home;
