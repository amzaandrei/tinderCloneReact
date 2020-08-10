import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import "./ChatScreen.css"
import { useParams } from "react-router-dom"

const ChatScreen = () => {

    let { person } = useParams();

    const handleSend = (e) => {
        e.preventDefault()
        setMessages([...messages, {message: input}])
        setInput('')
    }

    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            name: "Sarah",
            image: "https://scontent-muc2-1.xx.fbcdn.net/v/t1.0-9/90233761_2812610838849429_1496467060916486144_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=cahA95YmDr4AX-CZpZl&_nc_ht=scontent-muc2-1.xx&oh=0e70676496fc0885833d147937654f64&oe=5F55993B",
            message: "yo what's up"
        },
        {
            name: "Sarah",
            image: "https://scontent-muc2-1.xx.fbcdn.net/v/t1.0-9/90233761_2812610838849429_1496467060916486144_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=cahA95YmDr4AX-CZpZl&_nc_ht=scontent-muc2-1.xx&oh=0e70676496fc0885833d147937654f64&oe=5F55993B",
            message: "nice to hear you"
        },
        {
            message: "LOOOL"
        }
    ])

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">You matched with {person} on date 16/03/2000</p>
            {messages.map((message) => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                            className="chatScreen__logo"
                            src={message.image}
                            alt={message.name}
                        />
                        <div className="chatScreen__text">
                            <p>{ message.message }</p>
                        </div>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                        <div className="chatScreen__currentUserText">
                            <p>{ message.message }</p>
                        </div>
                    </div>
                )
            ))}
            <form className="chatScreen__form">
                <input 
                value={input} 
                onChange={e => setInput(e.target.value)} 
                className="chatScreen__inputField" 
                placeholder="type a message..." 
                type="text" />
                <button onClick={ handleSend }className="chatScreen__button">SEND</button>
            </form>
        </div>
    )
}

export default ChatScreen
