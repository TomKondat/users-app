import React from 'react'
import './users.css'

const UserItem = ({user}) => {
  return (
    <div className='card'>
      <img src={user.image} alt="" />
      <h1>{user.name}</h1>
      <h3>{user.age} years old</h3>
      <button className='card-button'>Say Hi!</button>
    </div>
  )
}

export default UserItem