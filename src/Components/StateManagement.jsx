import React, { useState } from 'react'

 const StateManagement = () => {
   const [update,setUpdate]=useState(0)
  return (
    <>
      <h1>Values : {update}</h1>
      <button onClick={() => setUpdate(update + 1)}>Update</button>
    </>
  )
}
export default StateManagement