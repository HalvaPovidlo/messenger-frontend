import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {registerUser} from "../API/API.js";

export default function RegisterForm(props) {
    let navigate = useNavigate()

    const [formData, setFormData] = useState(
        {
            name: "",
            surname: "",
            login: "",
            password: "",
            password_repeat: "",
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
        //validation
        if (formData.password !== formData.password_repeat) {
            alert("passwords don't match!");
            return 0;
        }
        try {
            let user = {
                ...formData
            }
            delete user.password_repeat;

            let res = await registerUser(user)
            let resText = await res.text();
            alert(resText)
            //   let resJson = await res.text();
            if (res.status == 200) {
                props.setAuthData({login: user.login, password: user.password})//here we need to do it sync mb
                navigate('/')
            }

        } catch (err) {
          alert(err)
        }
    }

    return <form className="register-form">
        <label>Name: <br></br>
            <input name={"name"} className="form-input"
                   type={"text"} onChange={onChange} value={formData.name}></input>
        </label>
        <label>Surname: <br></br>
            <input name={"surname"} className="form-input"
                   type={"text"} onChange={onChange} value={formData.surname}></input>
        </label>
        <label>Login: <br></br>
            <input name={"login"} className="form-input"
                   type={"text"} onChange={onChange} value={formData.login}></input>
        </label>
        <label>Password: <br></br>
            <input name={"password"} className="form-input"
                   type={"password"} onChange={onChange} value={formData.password}></input>
        </label>
        <label>Repeat password: <br></br>
            <input name={"password_repeat"} className="form-input"
                   type={"password"} onChange={onChange} value={formData.password_repeat}></input>
        </label>
        <button className={"register-form__button"} onClick={handleSubmit}>Register</button>
        <span>Already registered? <Link to="../login">Login now</Link></span>
    </form>
}