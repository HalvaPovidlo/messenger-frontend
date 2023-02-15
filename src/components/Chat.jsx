import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {getMessagesHistory, sendMessage} from "../API/API.js";

export default function Chat(props) {

    const [currentMessage, setCurrentMessage] = useState("");
    const [history, setHistory] = useState([]);

    useEffect(() => {
        async function loadChatData() {
            let response = await getMessagesHistory(props.currentContact.id, props.AuthData)
            let responseJson = await response.json()
            if (JSON.stringify(history) != JSON.stringify(response.history)) setHistory(responseJson.history)
        }

        loadChatData();
        let intervalId = setInterval(() => {
            loadChatData();
        }, 2000)
        return () => {
            clearInterval(intervalId)
        }
    }, [props.currentContact])

    async function sendCurrentMessage() {
        try {
            let response = await sendMessage(props.currentContact.id, props.AuthData, currentMessage);
            let responseText = await response.text()
        } catch (err) {
            alert(err);
        }
    }

    return <div className={"chat"}>
        <div className={"chat__history"}>
            {history && <ul className={"chat__messages-list"}>
                {history.map(message => (
                    <li className={"chat__message"}>
                        <spanc
                            className={"chat__message-sender"}>{message.id === props.currentContact.id ? props.currentContact.name : "Me"}:<br/>
                        </spanc>
                        {message.text}</li>
                ))}
            </ul>}
        </div>
        <div className="chat__send-panel">
        <textarea className={"chat__textarea"} value={currentMessage} onChange={(e) => {
            e.preventDefault();
            setCurrentMessage(e.target.value)
        }}></textarea>
        <button className={"chat__send-button"} onClick={() => {
           if(currentMessage)sendCurrentMessage().then(() => {
                setCurrentMessage("")
            })
        }}>send
        </button>
        </div>
    </div>
}