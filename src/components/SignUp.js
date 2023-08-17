import React, { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import userContext from '../context/usercontext/userContext';

export default function SignUp() {

    const context = useContext(userContext);
    const { signUp } = context;
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", phone: "", confirmPassword: "" });
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }
    const handleSubmit = async () => {
        if (credentials.password != credentials.confirmPassword) {
            return alert("Your Password and Confirm Password did not match")
        }
        const response = await signUp(credentials.name, credentials.email, credentials.password, credentials.phone);
        if (response.success)
            alert("Successfully Your account has been created");
        else
            alert(response.error);
    }
    return (
        <div className='d-flex flex-column justify-content-center my-3 '>
            <div className='align-self-center'> <h3>Sign Up as User</h3> </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Name</span>
                <input type="text" aria-label="First name" class="form-control" name='name' value={credentials.name} onChange={onChange} />
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange} />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Phone</span>
                <input type="text" aria-label="First name" class="form-control" name='phone' value={credentials.phone} onChange={onChange} />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange} />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" name='confirmPassword' value={credentials.confirmPassword} onChange={onChange} />
            </div>
            <div className='align-self-center '>
                <button type="submit" class="btn btn-primary " onClick={handleSubmit}>Create Account</button>
            </div>
        </div>
    )
}
