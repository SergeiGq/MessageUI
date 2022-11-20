import React, {useState} from "react";
import axios from "axios";
import {ListFriend} from "./ListFriend";

interface IFormReg {
    login: string,
    password: string,
    nickname: string
}

interface IPropsLogIn {
    login: string,
    password: string
}

export let token:string = ''
let storageToken = localStorage.getItem('token')
let storageNick = localStorage.getItem('nick')
let nick:string = ''
if (storageToken!=undefined&&storageNick!=undefined){
    token=storageToken
    nick=storageNick

}


export function AuthComponent() {
    const [registerForm, setRegisterForm] = useState(false)
    const [loginForm, setLoginForm] = useState(false)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [nickname, setNickname] = useState('')
    const [loginInput, setLoginInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [isAuth,setIsAuth] = useState(token!='')

    function check(event: React.FormEvent) {
        event.preventDefault()
    }

     function Registration(login: string, password: string, nickname: string) {

        const response = axios
            .post(`https://localhost:44372/registr?login=${login}&password=${password}&nickname=${nickname}`)
        console.log(response)


        setRegisterForm(prev => !prev)
    }


    async function LoginIn(login: string, password: string) {

        const response = await axios.post(`https://localhost:44372/token?username=${login}&password=${password}`)



        console.log(response.data)
        token=response.data
        console.log()
        nick=(await getNickName()).data
        localStorage.setItem('token',response.data)
        localStorage.setItem('nick',nick)

        setIsAuth(prev=>!prev)
        setLoginForm(prev => !prev)
    }
    async function  getNickName(){
        const response = await axios.get(`https://localhost:44372/GetNicknameAuthUser`,{headers: {
                Authorization: `Bearer ${token}`}})
        return response
    }

    return (
        <>
            {!isAuth&&!registerForm && !loginForm &&
                <div className="Auth">
                    <button className="Log_In" onClick={() => setLoginForm(prev => !prev)}>Log In</button>
                    <button className="Log_In" onClick={() => setRegisterForm(prev => !prev)}>Register</button>
                </div>}
            {registerForm &&
                <div className="regForm" onSubmit={check}>
                    <div className="TitleReg">Register</div>
                    <div className="itemReg">Login</div>
                    <input className="input_reg" onChange={event => setLogin(event.target.value)} value={login}></input>
                    <div className="itemReg">Password</div>
                    <input className="input_reg" onChange={event => setPassword(event.target.value)}
                           value={password}></input>
                    <div className="itemReg">Nickname</div>
                    <input className="input_reg" onChange={event => setNickname(event.target.value)}
                           value={nickname}></input>
                    <button className="regButton" onClick={() => Registration(login, password, nickname)}>Register
                    </button>
                </div>}
            {
                loginForm &&
                <div className="regForm" onSubmit={check}>
                    <div className="TitleReg">Log In</div>
                    <div className="itemReg">Login</div>
                    <input className="input_reg" onChange={event => setLoginInput(event.target.value)}
                           value={loginInput}></input>
                    <div className="itemReg">Password</div>
                    <input className="input_reg" onChange={event => setPasswordInput(event.target.value)}
                           value={passwordInput}></input>
                    <button className="regButton" onClick={() => LoginIn(loginInput, passwordInput)}>Log in</button>
                </div>
            }
            {
                isAuth&&<div className="nick">
                    <div className='logOut'>{nick}</div><button onClick={()=>setIsAuth(false)}>Log out</button>
                </div>

            }
            {isAuth&&<ListFriend></ListFriend>}
        </>
    )
}