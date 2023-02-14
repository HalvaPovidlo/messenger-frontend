import React, {useState} from 'react'
import {
    createBrowserRouter,
    redirect,
    RouterProvider,
    Route,
    createRoutesFromElements
} from "react-router-dom";

import RegisterForm from "./components/RegisterForm.jsx";
import ErrorPage from "./components/error-page.jsx";
import LoginForm from "./components/LoginForm.jsx";
import Messenger from "./routes/Messenger";
import Test from "./components/TEST.jsx";

export default function App() {

    const [authData, setAuthData] = useState({login: "", password: ""})

    // WARNING: For POST requests, body is set to null by browsers.

    const loader = async () => {
        if (!authData.login) {
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
                    element={<Messenger logout={logout} authData={authData}/>}
                    errorElement={<ErrorPage/>}
                    loader={loader}
                >
                </Route>
                <Route
                    path={"/login"}
                    element={<LoginForm setAuthData={setAuthData}
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