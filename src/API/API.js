export function getAuthorizationHeader(user) {

    return "basic " + btoa(`${user.login}:${user.password}`)
}

export async function getMessagesHistory(contactId, AuthData) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", getAuthorizationHeader(AuthData));

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    return fetch(`http://localhost:9090/msg/${contactId}`, requestOptions)
}

export async function registerUser(user) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(user);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch("http://localhost:9090/registration", requestOptions)
}

export async function getUsers() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    return fetch("http://localhost:9090/users", requestOptions)
}

export async function sendMessage(contactId, AuthData, text) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", getAuthorizationHeader(AuthData));
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "text": text
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(`http://localhost:9090/msg/${contactId}`, requestOptions)
}