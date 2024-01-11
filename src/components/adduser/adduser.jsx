import React, { useState } from 'react'
import axios from 'axios'
import './adduser.css'

const AddUser = ({ handleAdd }) => {
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

    const handleSubmit = (event) => {
        event.peventDefault()
        const newUser = {
            name,
            username,
            email,
            address:
                { street, suite, city, zipcode, geo: { lat: '', lng: '' }, },
            phone, 
            website,
            company:{
                name: companyName,
                catchPhrase,
                bs
            }
        }

        axios.post('https://jsonplaceholder.typicode.com/users', newUser)
            .then((response) => {
                handleAdd(response.data)
                setName('')
                setUsername('')
                setEmail('')
                setStreet('')
                setSuite('')
                setCity('')
                setZipcode('')
                setLat('')
                setLng('')
                setPhone('')
                setWebsite('')
                setCompanyName('')
                setCatchPhrase('')
                setBs('')
            })
            .catch((error) => {
                console.error('Error adding data:', error)
            })
    }

    return (
        <div>
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
                <input className='left-input' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input className='right-input' type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
                <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type='text' placeholder='Street' value={street} onChange={(e) => setStreet(e.target.value)} /><br/>
                <input type='text' placeholder='Suite' value={suite} onChange={(e) => setSuite(e.target.value)} />
                <input type='text' placeholder='City' value={city} onChange={(e) => setCity(e.target.value)} /><br/>
                <input type='text' placeholder='ZipCode' value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
                <input type='text' placeholder='Lat' value={lat} onChange={(e) => setLat(e.target.value)} /><br/>
                <input type='text' placeholder='Lng' value={lng} onChange={(e) => setLng(e.target.value)} />
                <input type='text' placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} /><br/>
                <input type='text' placeholder='Website' value={website} onChange={(e) => setWebsite(e.target.value)} />
                <input type='text' placeholder='Company Name' value={companyName} onChange={(e) => setCompanyName(e.target.value)} /><br/>
                <input type='text' placeholder='Catch Phrase' value={catchPhrase} onChange={(e) => setCatchPhrase(e.target.value)} />
                <input type='text' placeholder='Bs' value={bs} onChange={(e) => setBs(e.target.value)} /><br/>
                <button type='submit'>Add User</button>
            </form>
        </div>
    )
}

export default AddUser