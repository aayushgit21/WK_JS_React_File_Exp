import React from 'react'

export const File=(props)=>{
  return (
    <div>
        <label style={{margin:"3px"}}>📝{props.inputName}</label>
        <button style={{margin:"3px",borderRadius:"20px"}} onClick={()=> deleteNode(props.store,props.id)}>🗑</button>
    </div>
  )
}