import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import "../logincss/login.css";
import "../logincss/logintwo.css";
import loginImage from "../img1.jpg";
import LoginFormTwo from '../forms/loginFormTwo';
import SignupFormTwo from '../forms/signupFormTwo';

function LoginTwo() {

    const [name, setName] = useState("")

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [loggedIn, setLogged] = useState(true)

    function login (event) {
        event.preventDefault()
        if (username === "ade@ropay.ng" && password === "Justdome") {
            setLogged(!loggedIn)
            alert("Successfully Logged In")
        } else {
            alert("what is happening")
        }
    }
    function signUp (event) {
        event.preventDefault()
        
        if (password===confirmPassword) {

            if (localStorage.getItem("username") !== username){
                localStorage.setItem("name", name)
                localStorage.setItem("username", username)

                localStorage.setItem("password", password)
                localStorage.setItem("registered",true)
            } else {
                alert("Username Already Used")
            }
        } else {
            alert("Check password again")
        }
        
    }

    return (
        <div>
            <Link to="/">
                <button className="back-button">Back</button>
            </Link>
            <div className="login-two-page">
                <div className="login-pop">
                    <div className="inner inner-left">
                        <img src={loginImage} alt="Login" />
                    </div>
                    <div className=" inner inner-right">
                        <Router>
                            <Switch>
                                <Route exact path="/login-two">
                                    <LoginFormTwo login={login} setUsername={setUsername} setPassword={setPassword} />
                                </Route>
                                <Route exact path="/signup-two">
                                    <SignupFormTwo signUp={signUp} setUsername={setUsername} setPassword={setPassword} setConfirmPassword={setConfirmPassword} setName={setName} />
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(LoginTwo)
