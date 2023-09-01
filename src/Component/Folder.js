import React from "react";
let uniqueId = 0;
const generateId = () => {
  uniqueId++;
  return uniqueId;
};
export const deleteNode = (store, id, parentId,props) => {
  console.log("this is store",store);
  console.log("deleteNode called with id:", id, "parentId:", parentId);
  
  if (parentId === -1) {
    window.alert("Root can't be deleted");
    return;
  }

  props.data.map((item) => {
    console.log("inside forEach, item.id:", item.id);
    console.log(item);
    
    if (item.id === parentId) {
      console.log("parent found, item.id:", item.id);
      item.children = item.children.filter((child) => child.id !== id);
      props.setStore(store)
      console.log("Item deleted");
      console.log("this is store",store);
    } else if (item.children !== null) {
      deleteNode(item.children, id, parentId);
    }
  });
};
export const Folder = (props) => {
  console.log("props.data: ",props.data);
  const addFile = (store, id) => {
    console.log("store inside: ",store)
    const obj = {
      id: generateId(),
      name: props.nameToCreate,
      type: "file",
      children: null,
      parentId: id,
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
      parentId: id,
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
        onClick={() => deleteNode(props.data, props.id,props.parentId,props)}
      >
        🗑
      </button>
    </div>
  );
};
