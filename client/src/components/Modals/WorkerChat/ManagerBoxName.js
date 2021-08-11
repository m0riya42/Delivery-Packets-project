import React from 'react'

const ManagerBoxName = ({ isActive, user, setChoosenManager }) => {

    console.log(user)


    const onClickManagerUser = (e) => {
        e.target.classList.add('active_chat')
        console.log(e.target)
        setChoosenManager(user)
    }
    return <div id="ManagerUser" onClick={onClickManagerUser} class={`chat_list ${isActive ? 'active_chat' : ''} `}>
        <div class="chat_people" style={{ display: 'flex', flexDirection: ' row-reverse', textAlign: 'right' }}>
            <div class="chat_img"> <img src={user.image} alt="sunil" /></div>
            <div class="chat_ib"><h5>{user.fullName} <span class="chat_date" style={{ float: 'left' }}>Dec 25</span></h5>
            </div>
        </div>
    </div>






}


export default ManagerBoxName