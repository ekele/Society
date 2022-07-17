import React from  "react";
import UserInput from  "./UserInput";


function Login (props){
    if (props.isRegistered === "true") {
        return (
            <div className="Login">
                <form>
                    <UserInput type="text" placeholder="Username" />
                    <UserInput type="password" placeholder="Password" />
                    <button type="submit">Login</button>
                    <a href="?">Forgot password</a>
                </form>
                <form action="../../public/createaccount.html">
                    <button type="submit">Create new account</button>
                    <a href="?">Geotag a location and activity</a>
                </form>
            </div>
        )
    } else {
        return (
            <div className="Login">
                <form>
                    <UserInput type="text" placeholder="First name" />
                    <UserInput type="text" placeholder="Last name" />
                    <UserInput type="email" placeholder="email" />
                    <UserInput type="password" placeholder="Password" />
                    <button type="submit">Create account</button>
                </form>
            </div>
        )
    }
    
}

export default Login;