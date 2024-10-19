import { useEffect, useState } from "react"
import User from "./User"
export default function Users() {
     const [Count, setCount]=useState([])
     useEffect(()=>{
          fetch('https://jsonplaceholder.typicode.com/todos')
          .then(res=>res.json())
          .then(data=>setCount(data))
     },[])
  return (
    <div>
     <h1>Count: {Count.length}</h1>
     {
          Count.map(singleData=> <User TotalData={singleData}></User>)
     }
    </div>
  )
}
