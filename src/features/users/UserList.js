/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers } from './usersSlice'
import { Link } from 'react-router-dom'

const UserList = () => {
    
    const users = useSelector(selectAllUsers)
    const renderUsers = users.map(user => (
        <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
        </li>
    ))
  return (
    <div>
        <h2>User List</h2>
        { renderUsers }

    </div>
  )
}

export default UserList
