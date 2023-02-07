import React,{useState} from 'react';


// +,-버튼 기능
const Input =() =>{
    const [textValue,setTextValue]=useState("");

    const onChange=(e)=>{
        setTextValue(e.target.value);
    };

    return (
        <div>
            <input type="text" value={textValue} onChange={onChange}/><br/>
            <p>{textValue}</p>
        </div>
    )
}

export default Input;
