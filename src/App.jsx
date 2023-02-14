import React, {useState} from 'react'
import {
    createBrowserRouter,
    redirect,
    RouterProvider,
    Route,
    Routes,
    BrowserRouter,
    createRoutesFromElements
} from "react-router-dom";
import RegisterForm from "./components/RegisterForm.jsx";
import ErrorPage from "./components/error-page.jsx";
import LoginForm from "./components/LoginForm.jsx";
import Messenger from "./routes/Messenger";

export default function App() {
    /*  const [user, setUser] = useState({})
      const [count, setCount] = useState(0)
  // WARNING: For POST requests, body is set to null by browsers.
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      /*
          const router = createBrowserRouter([
              {
                  path: "/",

                  loader: async () => {

                      const user = 0;
                      if (!user) {
                          return redirect("/login");
                      }
                  },
                  element:<Messenger/>
              },
              {
                  path: "register",
                  element: <RegisterForm></RegisterForm>,
                  errorElement:<ErrorPage></ErrorPage>
              },
              {
                  path: "login",
                  props:{setUser},
                  element: <LoginForm></LoginForm>,
                  errorElement:<ErrorPage></ErrorPage>
              },
          ]);
      */
    const loader = async () => {
        console.log(1)
        const user = 0;
        if (!user) {
            return redirect("/login");
        }
    }
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route
                    path={"/"}
                    loader={loader}
                    element={<Messenger/>}
                    errorElement={<ErrorPage></ErrorPage>}
                >
                </Route>
                <Route
                    path={"login"}
                    element={<LoginForm></LoginForm>}
                    errorElement={<ErrorPage></ErrorPage>}
                />
                <Route
                    path={"register"}
                    element={<RegisterForm></RegisterForm>}
                    errorElement={<ErrorPage></ErrorPage>}
                />
            </Route>
        )
    );

    return (<RouterProvider router={router}></RouterProvider>)
}