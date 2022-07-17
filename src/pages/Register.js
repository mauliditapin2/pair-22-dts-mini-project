import React from 'react'
import LoginOrRegisterForm from '../component/LoginOrRegisterForm'

export default function Register() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      margin: 'auto',
      background: `url("https://nerdmovieproductions.it/wp-content/uploads/2022/04/thor.jpg") no-repeat center center fixed` ,
      padding: '10em'

  }}>
    <LoginOrRegisterForm loginOrRegister={"register"} />
  </div>

  )
}
