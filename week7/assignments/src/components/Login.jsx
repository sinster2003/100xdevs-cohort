import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();

  return (
    <div>
        <input placeholder='Enter your mobile number' value={phone} onChange={(e) => setPhone(e.target.value)}/>
        <button onClick={() => {
            if(phone && phone.length === 10) {
                navigate("/otp")
            }
        }}>Send OTP</button>
    </div>
  )
}

export default Login