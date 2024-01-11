import React, { useState , useEffect } from "react";
import axios from "axios";
import './userlist.css'

const UserList = ({ handleEdit }) => {
    const [users , setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            setUsers(response.data)
        })
        .catch((error) => {
            console.error("error fetching data:", error)
        })
    }, [])

    const handleDelete = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(() => {
            setUsers(users.filter(user => user.id !== id))
        })
        .catch((error) => {
            console.error('Error deleting the user data: ', error)
        })
    }

    return(
        <div>
            <h2>User List</h2>
            <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <p className="username">Name : {user.name} - {user.email}</p><br/>
                        <p>Username : {user.username}</p><br />
                        <p>Address : {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p><br />
                        <p>Latitude : {user.address.geo.lat}</p>
                        <p>Longitude : {user.address.geo.lng}</p>
                        <p>Phone : {user.phone}</p>
                        <p>Website : {user.website}</p>
                        <p>Company: {user.company.name} || {user.company.catchPhrase} || {user.company.bs}</p>
                        <button onClick={() => handleEdit(user)}>Edit</button>
                        <button onClick={() => handleDelete()}>Delete</button>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    )
}

export default UserList