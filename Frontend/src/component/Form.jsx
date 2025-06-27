import { useState } from "react";
import "../App.css";

function Form(){
const [userName,setname]=useState();
const [userPass,setpass]=useState();

function name(evt){
    setname(evt.target.value)
}
function password(){
    setpass(evt.target.value )
}


    return(
        <>
        <div className="parent">
            <h1 className="heading">NETFLIX</h1>
            <div className="parform">
                  <h1 className="heading-s">sing in</h1>
               <form   action="http://localhost:3000/login" method="post">
             
               <input onChange={name}  placeholder="Enter email or mobile number" name="email"></input> <br></br>
               <input onChange={password}  placeholder="password" type="password" name="password"></input><br></br>
               <button>sing in</button>
            </form>
            </div>
           
        </div>
        
        
        
        </>
    )
}
export default Form;