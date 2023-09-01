import React from "react";
import { Folder } from "./Folder";
import { File } from "./File";
export const FileExp = ({ store, inputName, setInputName,storeMain,setStore }) => {
  return (
    <div style={{ paddingLeft: "20px" }}>
      {store.map((el) => (
        <div key={el.id}>
          {el.deleted === false &&
            (el.type === "folder" && el.deleted === false ? (
              <React.Fragment>
                <Folder
                  key={el.id}
                  store={[...store]}
                  data={storeMain}
                  id={el.id}
                  parentId={el.parentId}
                  inputName={el.name}
                  nameToCreate={inputName}
                  setInputName={setInputName}
                  setStore={setStore}
                />
                {el.children != [] && el.children != null && (
                  <FileExp
                    store={[...el.children]}
                    storeMain={[...store]}
                    data={storeMain}
                    inputName={inputName}
                    setInputName={setInputName}
                    setStore={setStore}
                  />
                )}
              </React.Fragment>
            ) : (
              <File
                key={el.id}
                store={[...store]}
                data={storeMain}
                id={el.id}
                parentId={el.parentId}
                inputName={el.name}
                nameToCreate={inputName}
                setInputName={setInputName}
                setStore={setStore}
              />
            ))}
        </div>
      ))}
    </div>
  );
};
