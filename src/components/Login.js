import React, { useContext, useState } from 'react'
import userContext from '../context/usercontext/userContext';
import alertContext from '../context/alert/alertContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const context = useContext(userContext);
    const { loginUser } = context;
    const alertcontext = useContext(alertContext);
    const { showAlert } = alertcontext;
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }
    const handleSubmit = async () => {
        const response = await loginUser(credentials.email, credentials.password);
        if (response.success) {
            showAlert("You have logged in successfully!", "success");
            localStorage.setItem("token", response.authtoken);
            navigate("/");
        }
        else
            showAlert(response.error, "danger");
    }

    return (
        <div className='d-flex flex-column justify-content-center my-3'>
            <div className='align-self-center '> <h3>Login </h3> </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" name='email' id="exampleInputEmail1" value={credentials.email} baaria-describedby="emailHelp" onChange={onChange} />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" name='password' value={credentials.password} class="form-control" id="exampleInputPassword1" onChange={onChange} />
            </div>
            <div className='align-self-center '>
                <button type="submit" class="btn btn-primary " onClick={handleSubmit}> Login </button>
            </div>
        </div>
    )
}
