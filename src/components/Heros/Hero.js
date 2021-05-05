import React from "react";
import HeroCollage from "./HeroCollage";
import HeroFooter from "./HeroFooter";
import HeroHeader from "./HeroHeader";
import HeroPhoneBlock from "./HeroPhoneBlock";
import HeroUsedBy from "./HeroUsedBy";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

function Hero() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);
  return (
    <div className="heroContainer">
      <HeroHeader />
      <div className="heroMedia">
        <HeroCollage />
        <HeroPhoneBlock />
      </div>
      <HeroUsedBy />
      <HeroFooter />
    </div>
  );
}

export default Hero;
