import React, { useState, useEffect } from 'react';
import axios from "axios";

const EditUser = ({ userToEdit, handleUpdate, handleCancel }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [street, setStreet] = useState('')
    const [suite, setSuite] = useState('')
    const [city, setCity] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [lat, setLat] = useState('')
    const [lng, setLng] = useState('')
    const [phone, setPhone] = useState('')
    const [website, setWebsite] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [catchPhrase, setCatchPhrase] = useState('')
    const [bs, setBs] = useState('')
    console.log(userToEdit)

    useEffect(() => {
        setName(userToEdit.name)
        setEmail(userToEdit.email)
        setUsername(userToEdit.username)
        setStreet(userToEdit.street)
        setSuite(userToEdit.suite)
        setCity(userToEdit.city)
        setZipcode(userToEdit.zipcode)
        setLat(userToEdit.lat)
        setLng(userToEdit.lng)
        setPhone(userToEdit.phone)
        setWebsite(userToEdit.website)
        setCompanyName(userToEdit.companyName)
        setCatchPhrase(userToEdit.catchPhrase)
        setBs(userToEdit.bs)
    }, [userToEdit])

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedUser = { ...userToEdit, name, 
            username, 
            email, 
            street, 
            suite, 
            city, 
            zipcode, 
            lat, 
            lng, 
            phone, 
            website, 
            companyName, 
            catchPhrase, 
            bs }

        axios.put(`https://jsonplaceholder.typicode.com/users/${userToEdit.id}`, updatedUser)
            .then(() => { handleUpdate(updatedUser) })
            .catch((error) => {
                console.error('error updating user:', error)
            })
    }

    return (
        <div>
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type='submit'>Update user</button>
                <button onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    )
}

export default EditUser