import React from 'react'

const ReciverChat = ({ reciverName, avatarImg, chatText, date = new Date(2020, 8, 23) }) => {
    const msgDate = new Date(date)
    // const msgDate = date


    return <div class="incoming_msg">
        <div class="incoming_msg_img">
            <img src={avatarImg ? avatarImg : "https://ptetutorials.com/images/user-profile.png"} alt="sunil" /> </div>
        <div class="received_msg">
            <div class="received_withd_msg">
                <p>{chatText}</p>
                <span class="time_date"> {msgDate?.toDateString()}</span></div>
        </div>
    </div>
}

export default ReciverChat