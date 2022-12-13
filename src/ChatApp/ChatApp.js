import { Button, FormControl, InputLabel, Input } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Message from './components/Message'
// import db from './firebase'

const ChatApp = () => {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    {usernamePers:"Yogi",text:"Hello guys"},
    {usernamePers:"Yoge",text:"Yo bro"}
  ])
  
  const [username, setUsername] = useState("")

  const changeHandler = (event) => {
    setInput(event.target.value)
  }

  // // IMP
  // useEffect(() => {
  //   db.collection("messages").onSnapshot(snapshot =>{
  //     setMessages(snapshot.docs.map(doc=>doc.data()))
  //   })
  //   // When there is any changes in database it will run and save it in snapshot
  // }, [])


  useEffect(() => {
    // const username = prompt("Enter your name") is what it looks like
    setUsername(prompt("Enter your name"))
  }, [])

  const clickHandler = (event) => {
    // prevent default prevents page to be refreshed
    event.preventDefault()

    const newInput = {
      usernamePers: username,
      text: input
    }

    // const newInput = {
    //   username: username,
    //   message: input
    // }
    setMessages([...messages, newInput])
    setInput("")
  }

  return (
    <div className='App'>
      <h1>You are logged in as {username}</h1>
      <form>
        <FormControl>
          <InputLabel>Enter a message</InputLabel>
          <Input value={input} onChange={changeHandler} />
          <Button disabled={!input} variant='contained' color='primary' type='submit' onClick={clickHandler}>Send Message</Button>
          {/* Here it means Button is disabled if there is no input */}
          {/* And variant and color are features of material ui */}
        </FormControl>
      </form>
      {
        messages.map(message => (
          <Message usernameMod={username} messageMod={message} />
        ))
        // Like props and event you can write anything instead of message
        // But it will mean the same. Meaning it will refer the parameter as the individual message
      }
    </div>
  )
}

export default ChatApp