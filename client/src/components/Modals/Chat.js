import React, { useState } from 'react';
import './Chat.css'

const Chat = ({ handleClose, display }) => {
    let inDisplay;
    display ? inDisplay = 'block' : inDisplay = 'none';
    return (
        <modal className="popup-box" style={{ display: inDisplay }}>
            <div className="container">
                <div className="row bootstrap snippets bootdeys">
                    <div className="col-md-3">
                        <div className="box box-primary direct-chat direct-chat-primary">
                            <div className="box-header with-border">
                                <h3 className="box-title">Direct Chat</h3>

                                <div className="box-tools pull-right">
                                    <span data-toggle="tooltip" title="" className="badge bg-light-blue" data-original-title="3 New Messages">3</span>
                                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                                    </button>
                                    <button type="button" className="btn btn-box-tool" data-toggle="tooltip" title="Contacts" data-widget="chat-pane-toggle">
                                        <i className="fa fa-comments"></i></button>
                                    <button type="button" className="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="direct-chat-messages">
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

                                <div className="box-footer">
                                    <form action="#" method="post">
                                        <div className="input-group">
                                            <input type="text" name="message" placeholder="Type Message ..." className="form-control">
                                            
                                            {/* <span className="input-group-btn">
                                                    <button type="submit" className="btn btn-primary btn-flat"></button>
                                                </span> */}
                                            </input>
                                        </div>
                                    </form>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </modal >

    )
}


export default Chat;
