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

// import React from "react";
// import { Folder } from "./Folder";
// import { File } from "./File";

// export const FileExp = (props) => {
//   return (
//     <div>
//       {props.store.map((el) =>
//         el.type === "folder" ? (
//           <Folder
//             store={props.store}
//             setStore={props.setStore}
//             id={el.id}
//             inputName={el.name}
//             nameToCreate={props.inputName}
//             key={el.id}
//           />
//           {el.children && el.children.length > 0 && (
//             <FileExp
//               data={el.children}
//               store={props.store}
//               setStore={props.setStore}
//               inputName={props.inputName}
//               setInputName={props.setInputName}
//             />
//           )}
//         ) : (
//           <File
//             store={props.store}
//             setStore={props.setStore}
//             inputName={el.name}
//             nameToCreate={props.inputName}
//             key={el.id}
//           />
//         )
//       )}
//     </div>
//   );
// };

// import React from "react";
// import { Folder } from "./Folder";
// import { File } from "./File";
// let uniqueId = 0;
// const genrateUniqueId = () => {
//   uniqueId++;
//   return uniqueId;
// };

// export const FileExp = (props) => {
//   const createFolder = (storeData, id) => {
//     let newNode = {
//       id: genrateUniqueId(),
//       name: props.inputName,
//       type: "folder",
//       children: [],
//     };
//     storeData.forEach((element) => {
//       if (element.id === id) {
//         element.children.push(newNode);
//         return;
//       } else if (element.children) {
//         createFolder(element.children, id);
//       }
//     });
//   };
//   const createFile = (storeData, id) => {
//     let newNode = {
//       id: genrateUniqueId(),
//       name: props.inputName,
//       type: "file",
//       children: null,
//     };
//     storeData.forEach((element) => {
//       if (element.id === id) {
//         element.children.push(newNode);
//         return;
//       } else if (element.children) {
//         createFile(element.children, id);
//       }
//     });
//   };

//   return (
//     <div>
//       {props.store.map((element) => {
//         if (element.type === "folder") {
//           return (
//             <div style={{ padding: "20px" }}>
//               <Folder
//                 folderData={element}
//                 setStore={props.setStore}
//                 setInputName={props.setInputName}
//               />

//               {element.children && (
//                 <FileExp
//                   data={element.children}
//                   store={props.store}
//                   setStore={props.setStore}
//                   inputName={props.inputName}
//                   setItemName={props.setInputName}
//                 />
//               )}
//             </div>
//           );
//         } else {
//           return (
//             <div style={{ padding: "20px" }}>
//               <File
//                 data={element}
//                 store={props.store}
//                 setStore={props.setStore}
//                 inputName={props.inputName}
//                 setItemName={props.setInputName}
//               />
//             </div>
//           );
//         }
//       })}
//     </div>
//   );
// };
