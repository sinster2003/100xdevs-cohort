import React, { useState } from 'react'
import Input from './templates/Input'

const Otp = () => {

  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center"
    }}>
        <div style={{
            display: "flex",
            gap: "1rem"
        }}>
        <Input id={0}/>
        <Input id={1}/>
        <Input id={2}/>
        <Input id={3}/>
        </div>
        <button>Login</button>
    </div>
  )
}
     
export default Otp