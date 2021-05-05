import "./App.css";
import FeatureSlidesMain from "./components/FeatureSlides/FeatureSlidesMain";
import Hero from "./components/Heros/Hero";
import "./styles/styles.scss";

function App() {
  return (
    <div className="App">
      <Hero />
      <FeatureSlidesMain />
      <div className="footer">Build your ideal story today.</div>
    </div>
  );
}

export default App;
