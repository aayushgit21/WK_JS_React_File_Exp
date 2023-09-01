import React from "react";
import { Folder } from "./Folder";
import { File } from "./File";
export const FileExp = ({ store, inputName, setInputName }) => {
  return (
    <div style={{ paddingLeft: "20px" }}>
      {store.map((el) => (
        <div key={el.id}>
          {el.deleted === false &&
            (el.type === "folder" && el.deleted === false ? (
              <React.Fragment>
                <Folder
                  store={store}
                  id={el.id}
                  inputName={el.name}
                  nameToCreate={inputName}
                  setInputName={setInputName}
                />
                {el.children != [] && el.children != null && (
                  <FileExp
                    store={el.children}
                    inputName={inputName}
                    setInputName={setInputName}
                  />
                )}
              </React.Fragment>
            ) : (
              <File
                store={store}
                inputName={el.name}
                nameToCreate={inputName}
                setInputName={setInputName}
              />
            ))}
        </div>
      ))}
    </div>
  );
};
