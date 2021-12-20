import axios, { Axios } from "axios"
import { useEffect, useState } from "react"
import UserList from "../components/UserList"
import Spnner from "../components/Spnner"
function Users (){
    const [users, setUsers] = useState([])
    const [loading, setLoding] = useState(true)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            setUsers(response.data)
            setLoding(false)
        })
    },[])
   
    return (
        <>
            <h1>users</h1>
            {loading ?
            <Spnner/> :
            <UserList users={users}/>
            }
        </>
    )
}
export default Users