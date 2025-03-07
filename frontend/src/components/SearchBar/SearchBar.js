import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

const searchStyle = {
  cursor: "pointer",
  marginRight: "10px",
};

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div
      style={{
        width: "20%",
        display: "flex",
        alignItems: "center",
        padding: "10px 0px",
        borderRadius: "4px",
        backgroundColor: "rgb(52, 52, 52)",
      }}
    >
      <input
        type="text"
        placeholder="Search Notes..."
        value={value}
        onChange={onChange}
        style={{
          width: "100%",
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
          padding: "0px 10px",
          color: "#fff",
        }}
      />
      {value && (
        <IoIosClose
          style={{ cursor: "pointer", marginRight: "10px" }}
          size={25}
          onClick={onClearSearch}
        />
      )}
      <CiSearch size={25} style={searchStyle} onClick={handleSearch} />
    </div>
  );
};

export default SearchBar;
