import React from 'react'
import { Link } from 'react-router-dom'


export default () => {
  console.log('%c RENDER Nav', 'color: orange; font-size: 20px')

  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/admin'>Admin</Link>
        </li>
        <li>
          <Link to='/admin/setting'>Setting</Link>
        </li>
      </ul>
    </div>
  )

}