import React, {useState} from 'react'
import {
    createBrowserRouter,
    redirect,
    RouterProvider,
    Route,
    createRoutesFromElements,
} from "react-router-dom";

import RegisterForm from "./components/RegisterForm.jsx";
import ErrorPage from "./components/error-page.jsx";
import LoginForm from "./components/LoginForm.jsx";
import Messenger from "./routes/Messenger";
import Test from "./components/TEST.jsx";

export default function App() {

    const [AuthData, setAuthData] = useState({login: "", password: ""})

    const loader = async () => {
        if (!AuthData.login) {
            return redirect("/login");
        }
        return true
    }

    function logout() {
        setAuthData({login: "", password: ""})
    }

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route
                    path={"/"}
                    element={<Messenger logout={()=>{logout()}} AuthData={AuthData}/>}
                    errorElement={<ErrorPage/>}
                    loader={loader}
                >
                </Route>
                <Route
                    path={"/login"}
                    element={<LoginForm AuthData={AuthData} setAuthData={setAuthData}
                    />}
                    errorElement={<ErrorPage/>}
                />
                <Route
                    path={"/register"}
                    element={<RegisterForm setAuthData={setAuthData}></RegisterForm>}
                    errorElement={<ErrorPage></ErrorPage>}
                />
                <Route
                    path={"/test"}
                    element={<Test></Test>}
                    errorElement={<ErrorPage></ErrorPage>}
                />
            </Route>
        )
    );

    return (<RouterProvider router={router}></RouterProvider>)
}