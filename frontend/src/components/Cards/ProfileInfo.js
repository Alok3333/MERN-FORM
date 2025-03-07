import React from "react";
import { getTwoCharacterFromName } from "../../utils/helper";

const ProfileInfo = ({ onLogOut }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "rgb(52, 52, 52)",
          fontSize: "16px",
        }}
      >
        {getTwoCharacterFromName("vasudev krishn")}
      </div>
      <div>
        <p style={{ margin: 0 }}>vasudev krishn</p>
        <button
          style={{
            border: "none",
            background: "none",
            color: "#ccc",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={onLogOut}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
