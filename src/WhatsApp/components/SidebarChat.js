import React from 'react'
import { Avatar } from '@mui/material'
import "./SidebarChat.css"

const SidebarChat = ({addNewChat}) => {

    const createChat = () => {
        const roomName=prompt("Please Enter a Chat Name")
        if (roomName){
            
        }
    }

    return !addNewChat ? (
        <div className='sidebarChat'>
            <Avatar />
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>Last message..</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add New Chat</h2>
        </div>
    )
}

export default SidebarChat