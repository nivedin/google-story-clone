import React, { useEffect, useRef, useState } from "react";
import { featureSlides } from "../data";
import cn from "classnames";
import FeatureSlides from "./FeatureSlides";
import { gsap } from "gsap";

function RenderImages({ activeFeatureIndex }) {
  return featureSlides.map(({ imageUrl }, index) => (
    <img
      className={cn({ "as-primary": activeFeatureIndex === index })}
      src={imageUrl}
      alt="imageAlt"
      key={index}
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
  ));
}

function FeatureSlidesMain() {
  const [activeFeatureIndex, setFeatureIndex] = useState(0);
  const featureSliderRef = useRef(null);
  const featureSlidesRightRef = useRef(null);

  useEffect(() => {
    function stopTrigger() {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: featureSlidesRightRef.current,
          start: "top top",
          end: () => `+=${featureSliderRef.current.offsetHeight}`,
          scrub: true,
          pin: true,
        },
      });
      return tl;
    }
    const master = gsap.timeline();
    master.add(stopTrigger());
  }, []);
  return (
    <div ref={featureSliderRef} className="featureSlidesContainer">
      <div className="featureSlidesLeft">
        {featureSlides.map((feature, index) => (
          <FeatureSlides
            key={feature.imageUrl}
            title={feature.title}
            description={feature.description}
            index={index}
            updateActiveImage={setFeatureIndex}
          />
        ))}
      </div>
      <div ref={featureSlidesRightRef} className="featureSlidesRight">
        <RenderImages activeFeatureIndex={activeFeatureIndex} />
      </div>
    </div>
  );
}

export default FeatureSlidesMain;
