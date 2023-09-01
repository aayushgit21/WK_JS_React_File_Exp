import React from "react";

export const File = (props) => {
  const deleteNode = (store, id) => {
    store.map((el) => {
      if (el.id === id) {
        el.deleted = true;
        props.setInputName("");
        console.log("deleted.");
        console.log(store);
      } else if (el.children != null) {
        deleteNode(el.children, id);
      }
    });
  };
  return (
    <div>
      <label style={{ margin: "3px" }}>📝{props.inputName}</label>
      <button
        style={{ margin: "3px", borderRadius: "20px" }}
        onClick={() => deleteNode(props.store, props.id)}
      >
        🗑
      </button>
    </div>
  );
};
