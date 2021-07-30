import React from 'react';
import './Chat.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
// import axios from 'axios';
// import socketClient from "socket.io-client";
import ReciverChat from './ReciverChat';
import SenderChat from './SenderChat'
import SendButton from './SendButton';


var io = require('socket.io-client')
const ENDPOINT = 'http://127.0.0.1:9000'
var socket = io.connect(ENDPOINT);
socket.on('connect', function (socket) {
    console.log('Connected!');
})


// const SERVER = "http://localhost:9000";

// var socket = socketClient(SERVER);
// socket.on('connection', () => {
//     console.log(`I'm connected with the back-end`);
// });

const Chat = ({ handleClose, display, msgs, senderIcon, reciverIcon, reciverName }) => {








    let inDisplay;
    display ? inDisplay = 'block' : inDisplay = 'none';
    return (<>  <div style=
        {{ background: 'red', position: 'relative', bottom: '-108%', height: '37px' }}
        id="chatButton"></div>
        <div className="popup-box" style={{ background: "transparent", display: inDisplay, position: 'absolute', zIndex: 1 }}>
            <div className="col-lg-3" style={{ display: inDisplay, bottom: "-30%" }}>
                <div className="chatStyle chatStylebox box-primary direct-chat direct-chat-primary chatStyle" style={{ background: 'url(/assets/images/chat_pattern.png)', backgroundSize: '318px', filter: 'drop-shadow(1px 1px 1px black)' }} >
                    <div className="box-header with-border" style={{ height: "40px" }}>
                        <div className="box-tools pull-right">

                            <span className="close-icon" onClick={handleClose} style={{ display: "contents", marginLeft: -"35px", marginTop: -"14px", color: 'rgb(87 96 91)' }}>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                            {/* <button type="button" className="btn btn-box-tool" data-widget="remove" onClick={handleClose}><i class="fa fa-times"></i></button> */}
                        </div>
                    </div>
                    <div className="box-body">
                        <div className="direct-chat-messages" style={{ height: "300px" }}>
                            <SenderChat avatarImg={senderIcon} />
                            {/* avatarImg, chatText  */}
                            <ReciverChat avatarImg={reciverIcon} reciverName={reciverName} />
                            {/* reciverName, avatarImg, chatText */}
                        </div>
                        <SendButton />
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}


export default Chat;
