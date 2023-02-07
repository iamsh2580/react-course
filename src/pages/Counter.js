import React,{useState} from 'react';


// +,-버튼 기능
const Counter =() =>{
    const [num,setNum]=useState(0);
    const Increase = ()=>{
        setNum(num+1);
    }
    const Decrease = ()=>{
        setNum(num-1);
    }
    return (
        <div>
            <button onClick={Increase}>+1</button>
            <button onClick={Decrease}>-1</button>
            <p>{num}</p>
        </div>
    )
}

export default Counter;
