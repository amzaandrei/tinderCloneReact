import React from 'react'
import './Chats.css'
import Chat from './ChatCell/Chat'

const Chats = () => {
    return (
        <div className="chats">
            <Chat
                name="Sarah"
                message="How are you ;)"
                timeStamp="35 minutes ago"
                profilePic="https://scontent-muc2-1.xx.fbcdn.net/v/t1.0-9/90233761_2812610838849429_1496467060916486144_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=cahA95YmDr4AX-CZpZl&_nc_ht=scontent-muc2-1.xx&oh=0e70676496fc0885833d147937654f64&oe=5F55993B"
                />
            <Chat
            name="Cojoc"
            message="LOL ;)"
            timeStamp="15 minutes ago"
            profilePic="https://-muc2-1.xx.fbcdn.net/v/t1.0-9/90233761_2812610838849429_1496467060916486144_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=cahA95YmDr4AX-CZpZl&_nc_ht=scontent-muc2-1.xx&oh=0e70676496fc0885833d147937654f64&oe=5F55993B"
            />
            <Chat
                name="Vlad"
                message="How are you ;)"
                timeStamp="35 minutes ago"
                profilePic="https://scontent-muc2-1.xx.fbcdn.net/v/t1.0-9/81929069_2978811812150938_3267686473998008320_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=3umZuchPeb0AX_u0S3n&_nc_ht=scontent-muc2-1.xx&oh=b8d3b35bd3c2003dccf25f6cc23a0602&oe=5F5508A2"
                />
        </div>
    )
}

export default Chats
