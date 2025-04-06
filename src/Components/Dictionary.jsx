import React, { useState } from "react";

const Dictionary = () => {
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSearch = () => {
    const found = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.trim().toLowerCase()
    );

    if (found) {
      setDefinition(found.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial" }}>
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Search for a word..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "10px", fontSize: "16px", width: "250px" }}
      />
      <button
        onClick={handleSearch}
        style={{ padding: "10px 20px", marginLeft: "10px", fontSize: "16px" }}>
        Search
      </button>

      <div style={{ marginTop: "20px" }}>
        <h3>Definition:</h3>
        <p>{definition}</p>
      </div>
    </div>
  );
};

export default Dictionary;
