import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/Cards/NoteCard";
import AddEditNotes from "./AddEditNotes";

const Home = () => {
  return (
    <>
      <Navbar />
      <div style={{ margin: "20px 200px", display: "flex", flexWrap: "wrap" }}>
        <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
          <NoteCard
            title="Meeting on 9th march"
            date="8th march 2025"
            content="Meeting on 9th march please be ready for that."
            tags="#Meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>

      <button
        style={{
          width: "48px",
          height: "48px",
          fontSize: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px 10px 10px 0px",
          position: "absolute",
          right: "50px",
          bottom: "50px",
          cursor: "pointer",
          outline: "none",
          border: "none",
        }}
      >
        +
      </button>

      <AddEditNotes />
    </>
  );
};

export default Home;
