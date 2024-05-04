import React, {useState} from "react";
const Form=()=>{
    const state = useState();
    const [name,setName] = useState("");
    const[fullName,setfullName]=useState();

    const inputEvent =(event) =>{
       setName(event.target.value);

    };
    const onSubmit=()=>{
        setfullName(name);
    }
    return(
    <>
    <div>
        <h1>Hello{fullName}</h1>
        <input type="text" placeholder="Enter Your Name"
        onChange={inputEvent}
        value={name}
        ></input>
        <button onClick={onSubmit}>Submit</button>
    </div>
    </>
    );
}
export default Form;