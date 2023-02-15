import {useEffect, useState} from 'react'

import RegisterForm from "../components/RegisterForm.jsx";
import LoginForm from "../components/LoginForm.jsx";
import ContactList from "../components/ContactList.jsx";
import Chat from "../components/Chat";
import {getUsers} from "../API/API.js";
import {useNavigate} from "react-router-dom";

export default function Messenger(props) {
    const [contacts, setContacts] = useState([]);
    const [userInfo, setUserInfo] = useState({})
    const [currentContact, setCurrentContact] = useState({id: "", name: "", surname: "", login: ""})
    const navigate = useNavigate();

    useEffect(() => {
        async function loadContacts() {
            try {
                let res = await getUsers();
                let resJson = await res.json();
                setContacts(resJson.users.filter(user => {
                    if (user.login != props.AuthData.login) return true
                    else {
                        setUserInfo(user);
                        return false
                    }
                }));
            } catch (err) {
                alert(err);
            }

        }

        loadContacts();
    }, [])


    return (
        <div className="messenger">
            <header className={"messenger__header"}>{`${userInfo.name} ${userInfo.surname} (${userInfo.login})`}
                <button className={"logout-button"} onClick={() => {
                    props.logout();
                    navigate('/login')
                }}>Log out
                </button>
            </header>
            <main className={"messenger__main"}>
                <ContactList contacts={contacts} setCurrentContact={(contact) => {
                    setCurrentContact(contact);
                }}></ContactList>
                {currentContact.id && <Chat currentContact={currentContact} AuthData={props.AuthData}></Chat>}
            </main>

        </div>
    )
}


