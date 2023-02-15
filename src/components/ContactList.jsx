import React, {useState} from "react";
import {Link} from "react-router-dom";

export default function ContactList(props) {
    let Contacts = props.contacts.map((contact) => <li className = {"contact-list__contact"} key={contact.id} onClick={() => {
        props.setCurrentContact(contact)
    }} >
        {contact.name} {contact.surname}
    </li>)

    return (<ul className={"contact-list"}>
        {Contacts}
    </ul>)
}