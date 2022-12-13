import React, { useEffect, useState } from 'react'
import "./Sidebar.css"

// ICONS
// import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar, IconButton } from '@mui/material'
import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import ChatIcon from '@mui/icons-material/Chat'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { SearchOutlined } from '@mui/icons-material'

import SidebarChat from './SidebarChat'

const Sidebar = () => {

    // const [rooms, setRooms] = useState([])

    // useEffect(() => {

    // }, [])


    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>


                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search" type="text" />
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat addNewChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar