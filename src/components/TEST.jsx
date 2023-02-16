import React, {useState} from "react";
import {Link, redirect, useNavigate} from "react-router-dom";
import {getMessagesHistory, getUsers} from "../API/API.js";

export default function Test() {

    async function handleClick(e) {
      let rs = await getUsers(AuthData);
      let rsJson = await rs.json();
      console.log(rsJson)
    }

    return <button onClick={handleClick}>ClickMe!</button>
}