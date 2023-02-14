import React, {useState} from "react";
import {Link} from "react-router-dom";

export default function LoginForm(props) {console.log(props)
    const [formData,setFormData] = useState(
        {
            login: "",
            password:""
        }
    )


    function onChange(e){
        setFormData(prevData=>({
            ...prevData,
            [e.target.name]:e.target.value
        }))
        console.log(formData)
    }

    function handleSubmit(e){
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "basic a2hvZGFuZDpLaG9kUGFzcw==");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://fb9e89fb-2f2a-4b98-8692-6cb626847247.mock.pstmn.io/msg/122a0340-673e-4293-ba5f-b042e478d53e", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    return <form className="login_form" onSubmit={handleSubmit}>
        <label>Login: <br></br>
            <input name={"login"} className="form-input"
                   type={"text"} onChange={onChange} value = {formData.login}></input>
        </label>
        <label>Password: <br></br>
            <input name={"password"} className="form-input"
                   type={"password"} onChange={onChange} value = {formData.password}></input>
        </label>
        <button className={"login-button"}>Log in</button>
        <span>Don't have account yet? <Link to="../register">Register now</Link></span>
    </form>
}