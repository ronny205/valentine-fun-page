import React, {useState} from "react";
import './index.css'

function App() {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  return (
    <div className="valentine-container">
      <h2>Will you be my valentine?</h2>
      <div className="buttons-container">
        <button className="yes-button">Yes</button>
        <button
          className={`no-button ${hovered ? "yes-style" : ""}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          {hovered ? "Yes" : "No"}
        </button>
      </div>
    </div>
  );
}

export default App;
