import React,{ useState } from "react";
// import Employee from './Employee'
// import Counter from "./Counter";
// import Counteffect from "./Counteffect";
import Counterupdate from "./Counterupdate";
function App(){
  //COUNTER APP
  // const [count,setCount] = useState(0);
  // const addCount = ()=> {
  //   setCount(count+1);
   
  // }
  // const rCount = ()=>{
  //   setCount(count-1)
  // }

  //ARRAY OBJECT USING MAP
//   let emp = [{name:'ashna',age:23},
// {name:'ash',age:21},
// {name:'ashi',age:22}
// ]

//BUTTON HIDE/SHOW
const [state,setState] = useState(false)
  return(
    <div>
      {/* <button onClick={addCount}>Add</button>
   
      <Counter count={count}/> */}
      {/* {
        emp.map((obj,index)=>{
          return(
            <Employee key={index} name={obj.name} age={obj.age}/>
          )
        })
      } */}

      <h1 onClick={()=>setState(!state)}>Show/Hide</h1>
     {/* {<button onClick={()=>setState(!state)}>Show/Hide</button> } */}
      { state ? <Counterupdate/> : null}
      {/* { state && <Counterupdate/>} */}
    </div>
  )
}



export default App
