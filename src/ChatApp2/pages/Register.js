import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Register = () => {

    const formQuestions = {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const [formDetails, setFormDetails] = useState(formQuestions)

    const submitHandler = (event) => {
        event.preventDefault()
        alert("form")
    }

    const changeHandler = (event) => {
        setFormDetails(event.target.value)
    }


    return (
        <>
            <FormContainer>
                <form onSubmit={submitHandler}></form>
                <div className="title">
                    <h1>ChatApp</h1>
                </div>
                <input type="text" placeholder="Username" name="username" onChange={changeHandler} />
                <input type="email" placeholder="Email" name="email" onChange={changeHandler} />
                <input type="password" placeholder="Password" name="password" onChange={changeHandler} />
                <input type="password" placeholder="Confirm Password" name="confirmPassword" onChange={changeHandler} />

                <button>Create Account</button>
                <span>
                    Already have an account ?<Link to="/login">Login</Link>
                </span>
            </FormContainer>
        </>
    )
}

const FormContainer = styled.div`
height: 100vh;
width: 100vw;
`

export default Register