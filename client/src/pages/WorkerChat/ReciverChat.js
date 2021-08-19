import React from 'react'

const ReciverChat = ({ reciverName, avatarImg, chatText, date, uId }) => {
    const msgDate = new Date(date)
    // const msgDate = date
    const onContextMenuHandler = (e) => {
        e.preventDefault();
        alert('context menu Reciver')
    }

    return <div class="incoming_msg"  >
        <div class="incoming_msg_img" >
            <img src={avatarImg ? avatarImg : "https://ptetutorials.com/images/user-profile.png"} alt="sunil" /> </div>
        <div class="received_msg">
            <div class="received_withd_msg" onContextMenu={onContextMenuHandler}>
                <p>{chatText}</p>
                <span class="time_date"> {msgDate?.toDateString()}</span></div>
        </div>
    </div>
}

export default ReciverChat