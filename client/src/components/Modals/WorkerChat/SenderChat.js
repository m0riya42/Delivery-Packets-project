import React from 'react'

const SenderChat = ({ avatarImg, chatText, date }) => {
    const msgDate = new Date(date)

    return <div class="outgoing_msg">
        <div class="sent_msg">
            <p>{chatText}</p>
            <span class="time_date"> {msgDate?.toDateString()}</span> </div>
    </div>
}

export default SenderChat