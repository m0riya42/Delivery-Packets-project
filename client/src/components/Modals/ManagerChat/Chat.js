import React, { useEffect, useState, useContext } from 'react';
import './Chat.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import ReciverChat from './ReciverChat';
import SenderChat from './SenderChat'
import SendButton from './SendButton';
import { socket, onSendMessage } from '../../../socket_io'
import { ChatMessages } from '../../../App'


//get messages from the server and than use socket io to communicate
const Chat = ({ handleClose, display, senderName, senderIcon, reciverIcon, reciverName, msgs, handleNewMsg }) => {
    // const { chatMsgs, setChatMsgs } = useContext(ChatMessages)
    // console.log('IF SAVED MESSAGES')
    // console.log(msgs)
    // console.log(chatMsgs)
    const [chat, setChat] = useState([]);
    useEffect(() => {
        setChat(msgs)
    }, [msgs])

    useEffect(() => {
        socket.on("private message", ({ from, to, msg, date, uId }) => {
            // setChatMsgs()
            // setChat([...chat, { from, to, msg, date, uId }])
            handleNewMsg({ from, to, msg, date, uId }) //to make sure only the right messages will be here
            // setChatMsgs([...chatMsgs, { from, to, msg, date, uId }])
            console.log('update', from, to, msg, date, uId)
        })
    })

    const sendText = (senderText) => {
        console.log(senderText)
        onSendMessage({ from: senderName, msg: senderText, to: reciverName })

    }



    let inDisplay;
    display ? inDisplay = 'block' : inDisplay = 'none';
    return (<>
        {/* <div style=
        {{ background: 'red', position: 'relative', bottom: '-108%', height: '37px' }}
        id="chatButton"></div> */}
        <div className="popup-box" style={{ background: "transparent", display: inDisplay, position: 'realetive', height: "auto", top: "38%" }}>
            <div className="col-lg-3" style={{ display: inDisplay, bottom: "-30%" }}>
                <div className="chatStyle chatStylebox box-primary direct-chat direct-chat-primary chatStyle" style={{ background: 'url(/assets/images/chat_pattern.png)', backgroundSize: '318px', filter: 'drop-shadow(1px 1px 1px black)' }} >
                    <div className="box-header with-border" style={{ height: "40px" }}>
                        <div className="box-tools pull-right">

                            <span className="close-icon" onClick={handleClose} style={{ display: "contents", marginLeft: -"35px", marginTop: -"14px", color: 'rgb(87 96 91)' }}>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                        </div>
                    </div>
                    <div className="box-body">
                        <div className="direct-chat-messages" style={{ height: "300px" }}>
                            {
                                chat?.map(({ from, to, msg, date, uId }, index) => {
                                    return from !== reciverName ? <SenderChat avatarImg={senderIcon} chatText={msg} date={date} /> : <ReciverChat avatarImg={reciverIcon} reciverName={reciverName} chatText={msg} date={date} />
                                })
                            }


                            {/* <SenderChat avatarImg={senderIcon} />
                            <ReciverChat avatarImg={reciverIcon} reciverName={reciverName} /> */}
                        </div>
                        <SendButton sendText={sendText} />
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}


export default Chat;
