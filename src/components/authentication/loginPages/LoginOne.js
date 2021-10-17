import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, withRouter, useHistory } from "react-router-dom";
import "../logincss/login.css";
import "../logincss/loginone.css";
import loginImage from "../img.jpg";
import LoginForm from '../forms/loginForm';
import SignupForm from '../forms/signupForm'; 

function LoginOne() {

    const [name, setName] = useState("")

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [loggedIn, setLogged] = useState(true)

    const history = useHistory()

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
                history.push("/login-one")
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
            <div className="login-one-page">
                <div className="left">
                    <img src={loginImage} alt="Login" />
                </div>
                <div className="right">
                    <Router>
                        <Switch>
                            <Route exact path="/login-one">
                                <LoginForm login={login} setUsername={setUsername} setPassword={setPassword} />
                            </Route>
                            <Route exact path="/signup">
                                <SignupForm signUp={signUp} setUsername={setUsername} setPassword={setPassword} setConfirmPassword={setConfirmPassword} setName={setName} />
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
    )
}

export default withRouter(LoginOne)