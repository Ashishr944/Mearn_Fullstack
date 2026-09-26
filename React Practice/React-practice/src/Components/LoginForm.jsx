import React, { useState } from 'react'

const LoginForm = () => {
    const [formData, setFormData] = useState({email: "", password: ""});
    function handleSubmit(e) {
        e.preventDefault();
        console.log("Student Details: ", formData);
    } 

    // const handleEmail= (e) => {
    //     setFormData((prev) => ({...prev, email: e.target.value}))
    // }
    // const handlePassword= (e) => {
    //     setFormData((prev) => ({...prev, password: e.target.value}))
    // }

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setFormData((prev) => ({...prev, [name] : value}))
    }
    
  return (
    <div>


        <form onSubmit={handleSubmit}>
            <input 
            type="email" 
            name='email' 
            placeholder='Enter email' 
            onChange={handleChange}
            />
            <input 
            type="password" 
            name='password' 
            placeholder='Enter Password' 
            onChange={handleChange}
            />
            <button type='submit'>Submit</button>
        </form>


      
    </div>
  )
}

export default LoginForm
