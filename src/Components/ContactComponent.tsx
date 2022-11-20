import React, {useState} from "react";


export function ContactComponent() {
    const [contactsUser, setContactsUser] = useState('contacts__user')

    function contactsPut() {

    }

    return (
        <>
            <div className="contacts__title">Messages</div>

            <div className="contacts__search"><input className="icon" placeholder="Search"/></div>

            <div className="contacts__sort">
                <div className="contacts__sort__by">Sort by</div>
                <div className="contacts__newest">Newest</div>
                <svg width="5" height="4" viewBox="0 0 5 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2.47508 3.64996L0 1.17488L0.825417 0.350042L2.47508 2.00029L4.12475 0.350042L4.95017 1.17488L2.47508 3.64996Z"
                        fill="#2D9CDB"/>
                </svg>
            </div>

            <div className="contacts__list">{[...Array(10)].map((x, i) => <div className="contacts__user">

                <div className="contacts__user__left" key={i}>
                    <img src="/Img/FotoUser.png"></img>
                    <div className="contacts__name__last__message">
                        <div className="contacts__name">John Doe</div>
                        <div className="contacts__last__message">How are you doing?</div>
                    </div>
                </div>
                <div className="contacts__time__status">
                    <div className="contacts__time">16:45</div>
                    <div className="contacts__status">
                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.801 4.88L6.507 5.586L10.74 1.353L11.447 2.06L6.507 7L3.325 3.818L4.032 3.111L5.0945 4.1735L5.801 4.8795V4.88ZM5.802 3.466L8.278 0.989502L8.983 1.6945L6.507 4.171L5.802 3.466ZM4.3885 6.2935L3.682 7L0.5 3.818L1.207 3.111L1.9135 3.8175L1.913 3.818L4.3885 6.2935Z"
                                fill="#27AE60"/>
                        </svg>
                    </div>
                </div>
            </div>)}


            </div>


        </>
    )
}