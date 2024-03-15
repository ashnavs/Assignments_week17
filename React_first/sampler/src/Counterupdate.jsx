import React, { useState , useEffect} from "react";

function Counterupdate(){
    const [count,setCount] = useState(0)
    const [count2,setCount2] = useState(0)
    useEffect(()=>{
        console.log('Mounting...');
        // return()=>{
        //     console.log('Unmounting...');
        // }
        console.log('Updating...'+count);
       console.log('count2'+count2);
    },[count,count2])
   
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <br/>
            <h1>Hello iam a component : {count}</h1>

            <button onClick={()=>setCount2(count2+1)}>Increment</button>
            <h1>Hello iam a component : {count2}</h1>
        </div>
    )
}

export default Counterupdate;