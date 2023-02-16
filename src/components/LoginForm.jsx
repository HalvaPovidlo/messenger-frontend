import React, {useContext, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {getMessagesHistory} from "../API/API.js";
import {AuthContext} from "../App.jsx";

export default function LoginForm(props) {
    const AuthData=useContext(AuthContext);
    let navigate = useNavigate()
    const [formData, setFormData] = useState(
        {
            login: "",
            password: ""
        }
    )

    useEffect(()=>{
        if(AuthData.login!="")navigate("/");
    },[AuthData]);

    function onChange(e) {
        setFormData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            let res = await getMessagesHistory('7e95a358-f703-45e2-ae19-aa51102a94de',formData)

            let resText = await res.text();
            if (res.status == 200) {
               props.setAuthData(formData)
            } else {
                alert("Check login and password")
            }
        } catch (err) {
            console.log(err)
        }
    }

    return <form className="login-form" onSubmit={handleSubmit}>
        <label>Login: <br></br>
            <input name={"login"} className="form-input"
                   type={"text"} onChange={onChange} value={formData.login}></input>
        </label>
        <label>Password: <br></br>
            <input name={"password"} className="form-input"
                   type={"password"} onChange={onChange} value={formData.password}></input>
        </label>
        <button className={"login-form__button"}>Log in</button>
        <span>Don't have account yet? <Link to="../register">Register now</Link></span>
    </form>
}