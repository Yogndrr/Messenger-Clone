import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import "./Message.css"

const Message = ({ messageMod, usernameMod }) => {

    const isUser = usernameMod === messageMod.usernamePers

    // If the username is equals the message's username then the following will be true

    // const isUser = usernameMod === messageMod.username

    return (
        <div className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? "message__userCard" : "message__guestCard"}>
                <CardContent>
                    <Typography color="black" variant='h5' component='h2'>
                        {/* {messageMod.username} : {messageMod.message} */}

                        {messageMod.usernamePers} : {messageMod.text}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Message