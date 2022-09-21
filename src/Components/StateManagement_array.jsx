import React, { useState } from 'react'

const StateManagement_array = () => {
    const [arrayItemState,setArrayItemState]=useState([])
    const addArrayItems=()=>{
        setArrayItemState([...arrayItemState,{id:arrayItemState.length , value : Math.floor((Math.random() * 10) + 1)}])
    }
  return (
    <div>
        <button onClick={addArrayItems}>Add</button>
        {arrayItemState.map((item)=>(
            <li key={item.id}>{item.value}-{item.id}</li>
        ))}
    </div>
  )
}

export default StateManagement_array