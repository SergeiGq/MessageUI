import React, {useState} from "react";
import store from "../Redux/store";
import axios from "axios";
import {getToken} from "../Redux/AdditionalFile";
import {AuthChanges} from "../Redux/AuthState";

export function AuthComponent() {
    const [reg, setReg] = useState(true)
    const [pass, setPass] = useState('')
    const [Log, setLog] = useState('')
    const [isActive, setIsActive] = useState(store.getState().Auth)

    function check(event: React.FormEvent) {
        event.preventDefault()
    }

    async function logIn(login: string, password: string) {
        const response = await axios.post(`https://localhost:44372/token?username=${login}&password=${password}`)

        store.dispatch(getToken(response.data))
        console.log(store.getState().token)

        setIsActive(false)
        store.dispatch(AuthChanges(true))





    }

    return (
        <>{isActive&&
            <div className="Log__Form">
                <div className="reg__and__logIn">
                    <div className="Text__Reg" onClick={() => setReg(true)}>Registration</div>
                    <div className="Text__LogIn" onClick={() => setReg(false)}>Log In</div>
                </div>
                {reg && <div className="reg__form " onSubmit={check}>
                    <div className="reg__nickname"><input placeholder="Nickname"/></div>
                    <div className="reg__login"><input placeholder="Login"/></div>
                    <div className="reg__password"><input placeholder="Password"/></div>

                    <div>
                        <button>REGISTRATION</button>
                    </div>
                </div>}
                {
                    !reg &&
                    <div className="logIn__form" onSubmit={check}>
                        <div className="reg__login"><input onChange={event => setLog(event.target.value)} value={Log}
                                                           placeholder="Login"/></div>
                        <div className="reg__password"><input onChange={event => setPass(event.target.value)}
                                                              value={pass} placeholder="Password"/></div>
                        <div>
                            <button onClick={() => logIn(Log, pass)}>LOGIN</button>
                        </div>
                    </div>
                }
            </div>
        }
        </>
    )
}
