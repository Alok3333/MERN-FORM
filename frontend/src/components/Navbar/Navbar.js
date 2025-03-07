import React, { useState } from "react";
import ProfileInfo from "../Cards/ProfileInfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const navigate = useNavigate();
  const [serachQuery, setSearchQuery] = useState("");

  const onLogOut = () => {
    navigate("/login");
  };

  const handleSearch = () => {};

  const onClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          backgroundColor: "#000",
        }}
      >
        <div style={{ color: "white", fontWeight: "bold" }}>Notes</div>
        <SearchBar
          value={serachQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          handleSearch={handleSearch}
          onClearSearch={onClearSearch}
        />
        <ProfileInfo onLogOut={onLogOut} />
      </div>
    </>
  );
};

export default Navbar;
