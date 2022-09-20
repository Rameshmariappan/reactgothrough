import React,{useState} from 'react'

const StateManagement2 = () => {
    const initialvalue = 0
    const [originalValue, setOriginalValue] = useState(initialvalue)
    const myFunctionInc = ()=>{
        for(let i=0;i<10;i++){
            setOriginalValue(prevValue => prevValue + 1 )
        }
    }
  return (
    <div>
        <h1>Values : {originalValue}</h1>
        <button onClick={() => setOriginalValue(initialvalue)}>Reset</button>
        <button onClick={() => setOriginalValue(prevValue => prevValue + 1)}>Update</button>
        <button onClick={() => setOriginalValue(prevValue => prevValue - 1)}>Decrement</button>
        <button onClick={myFunctionInc}>Decrement by 10</button>
    </div>
  )
}

export default StateManagement2