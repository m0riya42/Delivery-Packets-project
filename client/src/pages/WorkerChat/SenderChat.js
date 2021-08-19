import React from 'react'

const SenderChat = ({ avatarImg, chatText, date }) => {
    const msgDate = new Date(date)

    return <div class="outgoing_msg" >
        <div class="outgoing_msg_img" >
            <img src={avatarImg ? avatarImg : "https://ptetutorials.com/images/user-profile.png"} alt="sunil" /> 
        </div>
        <div class="sent_msg">
            <p style={{marginLeft: "-70px"}}>{chatText}</p>
            <span class="time_date"> {msgDate?.toDateString()}</span> </div>
            
    </div>
}

export default SenderChat