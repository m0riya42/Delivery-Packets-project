import React from 'react'
import './Chat.css'


const SenderChat = ({ avatarImg, chatText }) => {

    return (
        <>
            <div className="direct-chat-msg right">
                <div className="direct-chat-info clearfix">
                    <span className="direct-chat-name pull-right">אני</span>
                    <span className="direct-chat-timestamp pull-left">Date/Hour</span>
                </div>
                <img className="direct-chat-img" src={avatarImg ? avatarImg : "https://bootdey.com/img/Content/user_2.jpg"} alt="Message User Image" />
                <div className="direct-chat-text">
                    {chatText ? chatText : 'יש לי משימה בשבילך'}
                </div>
            </div>
        </>
    )
}

export default SenderChat;
