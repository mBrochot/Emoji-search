import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Line from "./components/Line";
import Footer from "./components/Footer";
import emoji from "./emoji.json";

function App() {
  const [research, setResearch] = useState("");

  const tabOfEmojis = [];
  for (let i = 0; i < emoji.length; i++) {
    if (emoji[i].keywords.indexOf(research.toLocaleLowerCase()) !== -1) {
      tabOfEmojis.push(emoji[i]);
    }
  }

  return (
    <div className="App">
      <Search research={research} setResearch={setResearch} />
      <div className="content">
        {tabOfEmojis.map((emoji, index) => {
          return <Line title={emoji.title} symbol={emoji.symbol} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
