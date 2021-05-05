import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// import imgSrc from "/images/hero-frame-v2.png";
const videoUrl =
  "https://kstatic.googleusercontent.com/files/c44f15bb7e678d651e18fdee3058f2948aa733849e0dea3daf7429bf0f77ec23bd670dba63e71739d5b53489c98689bdbb80c47cf55f44649d9d1bfdf3e4f0a0";

function HeroPhoneBlock() {
  const phoneRef = useRef(null);

  useEffect(() => {
    function intro() {
      const tl = gsap.timeline();
      tl.fromTo(phoneRef.current, { y: 200 }, { y: 0, duration: 1 });
      return tl;
    }
    function stopTrigger() {
      const tl = gsap.timeline({
        delay: 1,
        scrollTrigger: {
          trigger: phoneRef.current,
          start: "top top",
          end: "+=800",
          pin: true,
          scrub: true,
        },
      });
      tl.to(phoneRef.current, { scale: 1.2 }, "+=.2");
      tl.to(
        ".heroContainer",
        {
          backgroundColor: "#000",
          duration: 0.25,
        },
        "-=.5"
      );
      return tl;
    }

    const master = gsap.timeline();
    master.add(intro());
    setTimeout(() => {
      master.add(stopTrigger());
    }, 1000);
  }, []);
  return (
    <div className="heroPhoneBlack" ref={phoneRef}>
      <div
        className="heroPhoneTemplate"
        style={{ backgroundImage: "url('/images/hero-phone-frame-v2.png')" }}
      >
        <video
          src={videoUrl}
          playsInline
          autoPlay={true}
          webkit-playsinline="true"
          loop={true}
          muted
          className="collageElement"
        ></video>
      </div>
    </div>
  );
}

export default HeroPhoneBlock;
