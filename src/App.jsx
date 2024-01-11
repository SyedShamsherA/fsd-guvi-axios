import React, { useState } from 'react'
import UserList from './components/userlist/userlist'
import AddUser from './components/adduser/adduser'
import EditUser from './components/edituser/edituser'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [userToEdit, setUserToEdit] = useState(null)

  const handleAdd = (newUser) => {
    setUsers([...users, newUser])
  }

  const handleEdit = (user) => {
    setEditMode(true)
    setUserToEdit(user)
  }

  const handleUpdate = (updatedUser) => {
    setEditMode(false)
    setUserToEdit(null)
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)))
  }

  const handleCancel = () => {
    setEditMode(false)
    setUserToEdit(null)
  }

  return (
    <div className='App'>
      <UserList handleEdit={handleEdit} />
      {!editMode && <AddUser handleAdd={handleAdd} />}
      {editMode && (
        <EditUser userToEdit={userToEdit} handleUpdate={handleUpdate} handleCancel={handleCancel} />
      )}
    </div>
  )
}

export default App
