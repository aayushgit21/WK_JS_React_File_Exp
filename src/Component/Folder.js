import React from "react";
import { File } from "./File";
let uniqueId = 0;
const generateId = () => {
  uniqueId++;
  return uniqueId;
};

export const Folder = (props) => {
  const addFile = (store, id) => {
    const obj = {
      id: generateId(),
      name: props.nameToCreate,
      type: "file",
      children: null,
      deleted: false,
    };

    store.map((item) => {
      if (item.id === id) {
        item.children.push(obj);
        props.setInputName("");
        console.log("Hi");
        console.log(store);
      } else if (item.children != null) {
        addFile(item.children, id);
      }
    });
    // props.setStore(updatedStore);
  };
  const addFolder = (store, id) => {
    const obj = {
      id: generateId(),
      name: props.nameToCreate,
      type: "folder",
      children: [],
      deleted: false,
    };

    store.map((item) => {
      if (item.id === id) {
        item.children.push(obj);
        props.setInputName("");
        console.log("Hii");
        console.log(store);
      } else if (item.children != null) {
        addFolder(item.children, id);
      }
    });
    // props.setStore(updatedStore);
  };
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
      <label style={{ margin: "3px" }}>📁{props.inputName}</label>
      <button
        style={{ margin: "3px", borderRadius: "20px" }}
        onClick={() => addFile(props.store, props.id)}
      >
        📝
      </button>
      <button
        style={{ margin: "3px", borderRadius: "20px" }}
        onClick={() => addFolder(props.store, props.id)}
      >
        📁
      </button>
      <button
        style={{ margin: "3px", borderRadius: "20px" }}
        onClick={() => deleteNode(props.store, props.id)}
      >
        🗑
      </button>
    </div>
  );
};
