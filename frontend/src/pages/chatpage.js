
import React, { useEffect, useState } from 'react'
import axios from 'axios'
 
 
const chatpage = () => {
    const [chats, setChats] = useState([])
    const fetchChat = async () => {
        const { data } = await axios.get("/api/chat");

        setChats(data);
    };
   
    //calling fetchChat in useEffect
    useEffect(() => {
        fetchChat();
    }, []);


    return (<div>
        {chats.map(chat => (
            <div key={chat._id}> {chat.chatName}</div>
        ))}
    </div>)
};
 
export default chatpage;
 
