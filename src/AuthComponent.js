import React from "react";
import { useEffect, useState } from "react";
import {Button} from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";


const cookies = new Cookies();


export default function AuthComponent(){

  const token = cookies.get("TOKEN");
  const [message, setMessage] = useState('');

  //add the header in the config to can make api call to a protect endpoint, dont forget tha array after the function to prevent continous calling
  useEffect( () => {
    const configuration = {
      method: 'get',
      url: 'https://auth-app-exercise.herokuapp.com/auth-endpoint',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    axios(configuration)
      .then( (result) => {
        setMessage(result.data.message);
      })
      .catch( (error) => {
        error = new Error()
      })
  }, [])

  //logout user, destroy the token
  const logout = () => {
    cookies.remove("TOKEN", {path: "/"});
    window.location.href= "/"
  }

  return (
    <div>
      <h1 className="authcomponent">You have to be logged to reach me!</h1>
      <h2 className="text-center text-success">{message}</h2>

      <Button type="submit" variant="danger"
       onClick={() => logout()}>Logout</Button>
    </div>
  )
}