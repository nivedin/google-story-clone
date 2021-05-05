import React, { useEffect } from "react";
import { photos, videos } from "../data";
import { gsap } from "gsap";

function VideoElement({ src }) {
  return (
    <div className="heroElement">
      <video
        playsInline=""
        autoPlay
        webkit-playsinline="true"
        loop
        muted
        src={src}
        className="collageElement"
      ></video>
    </div>
  );
}

function ImageElement({ src }) {
  return (
    <div className="heroElement">
      <img src={src} alt="heroImg" className="collageElement" />
    </div>
  );
}

function HeroCollage() {
  const leftImages = photos.slice(0, 2);
  const rightImages = photos.slice(2, photos.length);

  const [leftVideo, rightVideo] = videos;

  useEffect(() => {
    const tl = gsap.timeline({
      delay: 0.5,
    });

    tl.fromTo(
      ".heroElement",
      { y: 300 },
      {
        y: 0,
        duration: 1,
        delay: function (index) {
          return 0.2 * index;
        },
      }
    );
  }, []);

  return (
    <div className="heroCollage">
      <div className="leftColumn">
        {leftImages.map((src, i) => (
          <ImageElement src={src} key={i} />
        ))}
        <VideoElement src={leftVideo} />
      </div>
      <div className="rightColumn">
        {rightImages.map((src, i) => (
          <ImageElement src={src} key={i} />
        ))}
        <VideoElement src={rightVideo} />
      </div>
    </div>
  );
}

export default HeroCollage;
