import React from 'react'
import './Chat.css'


const SendButton = () => {

    return (
        <>
            <div className="box-footer" style={{ background: "#cbe2cf" }}>
                <form action="#" method="post">
                    <div style={{ direction: 'rtl' }} className="input-group">
                        <input type="text" name="message" placeholder="Type Message ..." className="form-control">
                        </input>
                        <span className="input-group-btn">
                            <button type="submit" style={{ background: "#2ec365" }} className="btn btn-primary btn-flat">שלח</button>
                        </span>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SendButton;
