import React, { useState } from 'react'
import "./Chat.css"

import { Avatar, IconButton } from '@mui/material'
import { SearchOutlined, AttachFile, MoreVert } from '@mui/icons-material'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import MicIcon from '@mui/icons-material/Mic'


const Chat = () => {

    const [input, setInput] = useState("")

    const changeHandler = (event) => {
        setInput(event.target.value)
    }

    const clickHandler = (event) => {
        event.preventDefault()
    }

    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at..</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className={`chat__message ${true && 'chat__receiver'} `}>
                    <span className="chat__name">
                        Yogendra
                    </span>
                    Hey Guys
                    <span className="chat__timestamp">
                        3:55 pm
                    </span>
                </p>
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={changeHandler} placeholder='Write a message' type="text" />
                    <button onClick={clickHandler} type='submit'>Send Message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat