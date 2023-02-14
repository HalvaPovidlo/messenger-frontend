import React, {useState} from "react";
import {Link, redirect, useNavigate} from "react-router-dom";
import {getMessagesHistory, getUsers} from "../API/API.js";

export default function LoginForm(props) {
    let navigate = useNavigate()

    const [formData, setFormData] = useState(
        {
            login: "",
            password: ""
        }
    )


    function onChange(e) {
        setFormData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            let res = await getMessagesHistory(formData)
            let resText = await res.text();
            if (res.status == 200) {
                props.setAuthData(formData);
                navigate('/')
            } else {
                alert("Check password")
            }
        } catch (err) {
            console.log(err)
        }
    }

    return <form className="login_form" onSubmit={handleSubmit}>
        <label>Login: <br></br>
            <input name={"login"} className="form-input"
                   type={"text"} onChange={onChange} value={formData.login}></input>
        </label>
        <label>Password: <br></br>
            <input name={"password"} className="form-input"
                   type={"password"} onChange={onChange} value={formData.password}></input>
        </label>
        <button className={"login-button"}>Log in</button>
        <span>Don't have account yet? <Link to="../register">Register now</Link></span>
    </form>
}