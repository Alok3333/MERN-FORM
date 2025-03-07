import React from "react";
import { GoDotFill } from "react-icons/go";
import { MdEditDocument } from "react-icons/md";
import { TbHttpDelete } from "react-icons/tb";

function NoteCard({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) {
  return (
    <div
      style={{
        border: "1px solid rgb(52, 52, 52)",
        borderRadius: "6px",
        padding: "20px",
        backgroundColor: "#000",
        margin: "10px",
        // width: "29%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h6 style={{ margin: 0, fontSize: "12px", fontWeight: 500 }}>
            {title}
          </h6>
          <span style={{ fontSize: "18px", fontWeight: 500 }}>{date}</span>
        </div>
        <GoDotFill
          style={{ color: !isPinned ? "green" : "red", cursor: "pointer" }}
          onClick={onPinNote}
        />
      </div>
      <p style={{ margin: 0, fontWeight: 600, marginTop: "10px" }}>
        {content?.slice(0, 60)}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            color: "rgb(52, 52, 52)",
            fontSize: "18px",
            fontWeight: 500,
          }}
        >
          {tags}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <MdEditDocument
            style={{ color: "#0000FF", cursor: "pointer" }}
            onClick={onEdit}
            size={20}
          />
          <TbHttpDelete
            style={{ color: "#FF0000", cursor: "pointer" }}
            onClick={onDelete}
            size={20}
          />
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
