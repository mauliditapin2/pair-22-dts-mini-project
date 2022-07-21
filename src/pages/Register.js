import React from 'react'
import LoginOrRegisterForm from '../component/LoginOrRegisterForm'

export default function Register() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      margin: 'auto',
      backgroundColor: '#3E065F',
      padding: '20px 20px 20px 20px',
      position: 'fixed'

    }}>
      <LoginOrRegisterForm loginOrRegister={"register"} />
    </div>

  )
}
