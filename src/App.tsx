import React from 'react';
import logo from './logo.svg';
import './App.css';

import {NavigationComponent} from "./Components/NavigationComponent";
import {ContactComponent} from "./Components/ContactComponent";
import {MessageComponent} from "./Components/MessageComponent";


function App() {
    return (
        <>
            <div className="main">
                <div className="auth__block">
                    <NavigationComponent/>
                </div>
                <div className="contacts__block">
                    {/*<AuthComponent></AuthComponent>*/}
                    <ContactComponent/>
                </div>
                <div className="messages__block">
                    <MessageComponent/>
                </div>
            </div>
        </>
    )
}

export default App;
