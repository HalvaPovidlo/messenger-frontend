import { useState } from 'react'
import '../App.css'
import RegisterForm from "../components/RegisterForm.jsx";
import LoginForm from "../components/LoginForm.jsx";
import ContactList from "../components/ContactList.jsx";
import Chat from "../components/Chat";

export default function Messenger() {

  return (
    <div className="messenger">
        <ContactList></ContactList>
        <Chat></Chat>
    </div>
  )
}

