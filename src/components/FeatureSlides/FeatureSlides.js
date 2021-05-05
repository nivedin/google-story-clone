import React, { useEffect, useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";

function FeatureSlides({ title, description, index, updateActiveImage }) {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);
  return (
    <div ref={ref} className="featureSlide">
      <h3 className="featureSlideTitle">{title}</h3>
      <p className="featureSlideDescription">{description}</p>
    </div>
  );
}

export default FeatureSlides;
