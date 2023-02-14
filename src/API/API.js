export function getAuthorizationHeader(user){

    return "basic "+btoa(`${user.login}:${user.password}`)
}

export async function getMessagesHistory(user){

    var myHeaders = new Headers();
    myHeaders.append("Authorization", getAuthorizationHeader(user));

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch("http://localhost:9090/msg/7e95a358-f703-45e2-ae19-aa51102a94de", requestOptions)
}

export async function registerUser(user){
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

export async function getUsers(){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    return fetch("http://localhost:9090/users", requestOptions)
}