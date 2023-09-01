import { useState,useEffect } from "react";
import "./App.css";
import { FileExp } from "./Component/FileExp";


function App() {
  const [inputName, setInputName] = useState("");
  const [store, setStore] = useState([
    {
      id: 0,
      name: "Root",
      type: "folder",
      children: [],
      parentId:-1,
      deleted: false,
    }
  ]);
  useEffect(() => {
    console.log("store has been updated:", store);
  }, [store]);
  const [render, setRender] = useState(false);
  console.log("hii app me aagaya");
  console.log(store);
  return (
    <div className="App">
      <div className="header" style={{ marginInline: "20px" }}>
        <h1 className="heading">React File Explorer</h1>
        <p style={{ display: "inline-block", marginRight: "10px" }}>
          Enter File/Folder Name:
        </p>
        <input
          type="text"
          placeholder="Enter File/Folder Name"
          value={inputName}
          onChange={(e) => {
            setInputName(e.target.value);
          }}
        />
        <hr></hr>
      </div>
      <div className="body">
        <FileExp
          store={store}
          inputName={inputName}
          setInputName={setInputName}
          storeMain={store}
          setStore={setStore}
        />
      </div>
    </div>
  );
}

export default App;

