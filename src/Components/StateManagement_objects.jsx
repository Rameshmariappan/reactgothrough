import React, { useState } from 'react'

const StateManagement_objects = () => {
    const initialValueObjects={
        name:"",
        city:"",
        personid:null,
        age:null
    }
    const [initialObjectState,setInitialObjectState]=useState(initialValueObjects)
    const onchangeEvent = (e)=>{
        setInitialObjectState({...initialObjectState , 
            [e.target.name] : e.target.value})
    }
  return (
    <div>
        <h1>name:{initialObjectState.name}</h1>
        <h1>city:{initialObjectState.city}</h1>
        <h1>personid:{initialObjectState.personid}</h1>
        <h1>age:{initialObjectState.age}</h1>
        <input type="text" value={initialObjectState.name} name="name" onChange={(e)=>onchangeEvent(e)}/>
        <input type="text" value={initialObjectState.city} name="city" onChange={(e)=>onchangeEvent(e)}/>
        <input type="number" value={initialObjectState.personid} name="personid" onChange={(e)=>onchangeEvent(e)}/>
        <input type="number" value={initialObjectState.age} name="age" onChange={(e)=>onchangeEvent(e)}/>
        <h1>{JSON.stringify(initialObjectState)}</h1>
    </div>
  )
}

export default StateManagement_objects