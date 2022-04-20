import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";

export default function Amit()
{
    const [name,settime]=useState(0);

    React.useEffect(()=>{
        try{
            console.log("iowieosd");
        }catch(error){
            <p>nikal</p>
        }
    },[]);
   

    return (
        <>
        <p>you click {name}</p>
        <button onClick={()=>{
            settime(name+1)
        }}>
            Click me
        </button>
        </>
    );

}