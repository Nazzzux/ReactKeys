import React from 'react'
import { User } from './User'



export const Users = ( {users} ) => {
  return (
    <ul>
      {users.map((user) => {
        return (
          <li>
            <User 
              key={user.id} 
              name={user.name}
            />
          </li>
        )
      })}
    </ul>
  )
}





