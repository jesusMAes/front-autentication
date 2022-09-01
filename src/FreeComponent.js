import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";



export default function FreeComponent(){
  const [message, setMessage] = useState('');
  //call the API with useEffect
  useEffect( () => {
    const configuration = {
      method: "get",
      url: 'https://auth-app-exercise.herokuapp.com/free-endpoint'
    };

    //call
    axios(configuration)
      .then( (result) => {
        setMessage(result.data.message);
      })
      .catch( (error) => {
        error = new Error();
      })
  }, [])

  return (
    <div>
      <h1 className="freecomponent">Everyone can access me!!</h1>
      <h3 className="text-center text-danger">{message}</h3>
    </div>
  )
}