import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function HeroFooter() {
  const ref = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top center",
        scrub: true,
        // markers: true,
      },
    });
    tl.to(
      ".heroContainer",
      {
        backgroundColor: "white", // camelCase
        duration: 0.25, // seconds
      },
      "-=2"
    );
    tl.fromTo(
      textRef.current,
      {
        y: 0,
        opacity: 0,
      },
      {
        y: 200,
        opacity: 1,
      },
      "-=2"
    );
  }, []);
  return (
    <div ref={ref} className="heroTextSection">
      <h1 ref={textRef}>Stories meet their widest audience ever</h1>
    </div>
  );
}

export default HeroFooter;
