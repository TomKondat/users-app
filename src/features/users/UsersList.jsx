import React from 'react'
import UserItem from './UserItem'
import './users.css'

const UsersList = ({usersArr}) => {
  return (
    <div className='row'>
       {usersArr.map((user) =>(
        <UserItem key={user.id} user={user} />
      ))} 
    </div>
  )
}

export default UsersList