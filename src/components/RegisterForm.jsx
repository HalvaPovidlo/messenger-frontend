import React, {useState} from "react";
import {Link} from "react-router-dom";

export default function RegisterForm(){
 /*
 *
    var raw = JSON.stringify({
        "name": "Андрей",
        "surname": "Ходько",
        "password": "pass",
        "login": "khodand"
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:9090/registration", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
 *
 * */
    return <form className="login_form">
        <label>Login:<br></br>
            <input className="form-input" type={"text"}></input>
        </label>
        <label>Password: <br></br>
            <input className="form-input" type={"password"}></input>
        </label>
        <label>Repeat password: <br></br>
            <input className="form-input" type={"password"}></input>
        </label>
        <button className={"register-button"}>Register</button>
        <span>Already registered? <Link to="../login">Login now</Link></span>
    </form>
}