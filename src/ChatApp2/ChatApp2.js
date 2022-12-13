import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Chat from './pages/Chat'
import "./ChatApp2.css"

const ChatApp2 = () => {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Register/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/register' element={<Chat/>} />
                </Routes>
            </BrowserRouter>
    )
}

export default ChatApp2