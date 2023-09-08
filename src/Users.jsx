import { useEffect, useState } from "react"

export default function User () {
  const [Users, setUsers] = useState([]);
  useEffect( ()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h3>Users:{Users.length}</h3>
    </div>
  )
}