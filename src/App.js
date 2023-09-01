
import { useState } from 'react';
import './App.css';
import {File} from './Component/File'
import {Folder} from './Component/Folder'
import { FileExp } from './Component/FileExp';

function App() {
  const[inputName,setInputName]=useState("");
  const [store,setStore]=useState([{
    id:0,
    name:"Root",
    type:"folder",
    children:[],
    deleted:false
  }
])
const [render, setRender] = useState(false);
  console.log("hii")
  return (
    <div className="App">
      <div className='header' style={{marginInline:"20px"}}>
        <h1 className='heading'>React File Explorer</h1>
        <p style={{display:"inline-block",marginRight:"10px"}}>Enter File/Folder Name:</p>
        <input type='text' placeholder='Enter File/Folder Name' value={inputName} onChange={(e)=>{setInputName(e.target.value)}}/>
        <hr></hr>
      </div>
      <div className='body'>
        <FileExp store={store} inputName={inputName} setInputName={setInputName} /> 
      </div>
    </div>
  );
}

export default App;
