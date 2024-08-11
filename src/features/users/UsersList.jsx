import React from 'react'
import UserItem from './UserItem'
import './users.css'

const UsersList = ({users}) => {
  return (
    <div className='row'>
       {users.map((user) =>(
        <UserItem key={user.id} user={user} />
      ))} 
    </div>
  )
}

export default UsersList