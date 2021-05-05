import React, { useEffect } from "react";
import { gsap } from "gsap";

function HeroHeader() {
  useEffect(() => {
    gsap.fromTo(
      "#heroText",
      { opacity: 0 },
      { opacity: 1, duration: 1.2, delay: 0.2 }
    );
  }, []);
  return (
    <div className="heroTextSection">
      <h1 id="heroText">Stories meet their widest audience ever</h1>
    </div>
  );
}

export default HeroHeader;
