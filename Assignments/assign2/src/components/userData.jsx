// import React,{useState,useEffect} from 'react'


// function userData({count}) {
//     const [data,setData] = useState(null);

//     useEffect(()=>{
//         fetchData();
//     },[count]);

//     const fetchData = async () => {
//         try {
//             const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
//             const jsonData = await response.json();
//             setData(jsonData)
//         } catch (error) {
//             console.log('Erro',error);
//         }
//     }

//   return (
//     <div>
//     <h1>User Data:{data}</h1>
//     <ul>
//       {data.map(user => (
//         <li key={user.id}>
//           <strong>Name:</strong> {user.name}<br />
//           <strong>Email:</strong> {user.email}<br />
//           <strong>Username:</strong> {user.username}<br />
//           <br />
//         </li>
//       ))}
//     </ul>
//   </div>
//   )
// }

// export default userData
