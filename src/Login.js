import React, { useState } from "react";
import {Form, Button} from 'react-bootstrap';
import axios from 'axios'
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default function Login(){
  //values and hooks to submit function
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);

  const handleSubmit = (e)=>{
    //prevent reload
    e.preventDefault();

    //request config
    const configuration = {
      method: 'post',
      url: 'https://auth-app-exercise.herokuapp.com/login',
      data: {
        email,
        password
      }
    }
    axios(configuration)
      .then((result) => {
        setLogin(true)
        cookies.set("TOKEN", result.data.token, {
          path: "/"
        })
        //redirect to auth page
        window.location.href = '/auth'
      })
      .catch((error) => {
        error = new Error()
      })


  }

  return (
    <>
    <h2>Login</h2>
    <Form onSubmit={(e)=> handleSubmit(e)}>
      <Form.Group controlId="formLoginEmail">
      <Form.Label>Email Adress</Form.Label>
      <Form.Control 
        type="email"
        name="email"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        placeholder="Enter Email" />
      </Form.Group>

      <Form.Group controlId="formLoginPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit"
         onClick={(e)=>handleSubmit(e)}>
        Submit
      </Button>
    </Form>
    {login ? (
      <p className="text-success">You are logged succesfully</p>
    ): (
      <p className="text-danger">You are not logged</p>
    )}
    </>
  )
}