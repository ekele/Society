import React from "react";
import Title from "./Title";
import Login from "./Login";

function App(props)
{
    if (props.tab === "home"){
        return (
            <div className="container">
                <Title />
                <Login isRegistered="true"/>
            </div>
        )
    }
    else if (props.tab === "createAccount"){
        return (
            <div className="container">
                <Login isRegistered="false"/>
            </div>
        )
    }
}

export default App;