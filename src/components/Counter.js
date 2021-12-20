import React from "react";
import { useState } from "react/cjs/react.development";

function Counter({click}){
    const clickString = click || "click"
 const [count,setCount] =useState(0)
 const inCrement = () =>{
     setCount(count+1)
 }
 return (
     <button onClick={inCrement}>{clickString}{count}</button>
 )
}
export default Counter