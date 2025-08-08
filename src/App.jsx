import React from "react";
import Background from "./components/Background";

function App() {
  return (
    <div>
      <Background />
      <h1 style={{ color: "white", position: "relative", zIndex: 1 }}>
        My React App
      </h1>
    </div>
  );
}

export default App;
