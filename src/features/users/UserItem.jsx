import React from 'react'
import './users.css'
import { Link } from 'react-router-dom'

const UserItem = ({user}) => {

  return (
    <Link to={`/${user.id}`} className='card'>
    <div  >
      <img src={user.image} alt="" />
      <h1>{user.name}</h1>
      <h3>{user.age} years old</h3>
      <button className='card-button'>Say Hi!</button>
    </div>
    </Link>
  )
}

export default UserItem