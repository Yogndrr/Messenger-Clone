import React from 'react'
import "./WhatsApp.css"
import Chat from './components/Chat'
import Sidebar from './components/Sidebar'

const WhatsApp = () => {
  return (
    <div className='app'>
      <div className="app__body">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default WhatsApp