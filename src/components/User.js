import React from 'react'
import { Link } from 'react-router-dom'


function User({user}) {
  return (
    <div className='user'>
        <h1>Name: {user.name}</h1>
        <h3>Username: {user.username}</h3>
        <button><Link to={`/users/${user.id}`}>View More...</Link></button>
    </div>
    
  )
}

export default User