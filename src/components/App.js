import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((singlenote) => (
        <Note
          key={singlenote.key}
          title={singlenote.title}
          content={singlenote.content}
        />
      ))}
      ;
      <Footer />
    </div>
  );
}

export default App;
