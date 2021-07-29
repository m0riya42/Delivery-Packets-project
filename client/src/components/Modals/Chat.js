import React from 'react';
import './Chat.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'



const Chat = ({ handleClose, display, msgs, myIcon, userIcon }) => {
    let inDisplay;
    display ? inDisplay = 'block' : inDisplay = 'none';
    return (
        <div className="popup-box" style={{ background: "transparent", display: inDisplay, position: 'absolute', zIndex: 1 }}>

            <div className="col-lg-3" style={{ display: inDisplay, bottom: "-30%" }}>
                <div className="chatStyle chatStylebox box-primary direct-chat direct-chat-primary chatStyle" style={{ background: 'url(/assets/images/chat_pattern.png)', backgroundSize: '318px' }} >
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
                            <div className="direct-chat-msg">
                                <div className="direct-chat-info clearfix">
                                    <span className="direct-chat-name pull-left">Alexander Pierce</span>
                                    <span className="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>
                                </div>
                                <img className="direct-chat-img" src="https://bootdey.com/img/Content/user_1.jpg" alt="Message User Image" />
                                <div className="direct-chat-text">
                                    Is this template really for free? That's unbelievable!
                                </div>
                            </div>

                            <div className="direct-chat-msg right">
                                <div className="direct-chat-info clearfix">
                                    <span className="direct-chat-name pull-right">Sarah Bullock</span>
                                    <span className="direct-chat-timestamp pull-left">23 Jan 2:05 pm</span>
                                </div>
                                <img className="direct-chat-img" src="https://bootdey.com/img/Content/user_2.jpg" alt="Message User Image" />
                                <div className="direct-chat-text">
                                    You better believe it!
                                </div>
                            </div>
                        </div>

                        <div className="box-footer" style={{ background: "#cbe2cf" }}>
                            <form action="#" method="post">
                                <div className="input-group">
                                    <input type="text" name="message" placeholder="Type Message ..." className="form-control">
                                    </input>
                                    <span className="input-group-btn">
                                        <button type="submit" style={{ background: "#2ec365" }} className="btn btn-primary btn-flat">Send</button>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Chat;
