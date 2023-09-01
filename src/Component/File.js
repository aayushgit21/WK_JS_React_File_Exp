import React from "react";
import { deleteNode } from "./Folder";

export const File = (props) => {
  return (
    <div>
      <label style={{ margin: "3px" }}>📝{props.inputName}</label>
      <button
        style={{ margin: "3px", borderRadius: "20px" }}
        onClick={() => deleteNode(props.data, props.id,props.parentId,props)}
      >
        🗑
      </button>
    </div>
  );
};
