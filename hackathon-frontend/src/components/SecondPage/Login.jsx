import React from 'react';
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from '@material-tailwind/react';
import { useState } from "react";

export default function Example() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [updated, setUpdated] = useState(username);
  
  

  const handleChange = (event) => {
    setUsername(event.target.value);
  };
  
  const handleChange2 = (event) => {
    setPassword(event.target.value);
  };
  
  
  


  function sign_in() {
    axios({
      
      method: 'post',
      url: 'http://localhost:5000/api/users/login',
      data: {
        email: username,
        password: password
      }
    }).then((response) => {
      setUpdated(username);
      window.location = "/overview";
      }).then ((error) => {alert(error.message);});
  }
  return (
    <div className="flex justify-center items-center h-screen bg-blue-50">
      <Card className="w-96 opacity-80">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 flex justify-center items-center h-15"
        >
          <Typography variant="h3" color="white">
            Login
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Email" size="lg" onChange={handleChange} value={username} name="username" id="username" />
          <Input label="Password" size="lg" onChange={handleChange2} value={password} />
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth onClick={sign_in}>
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don't have an account?
            <Typography
              as="a"
              href="/Register"
              variant="small"
              color="blue"
              className="ml-1 font-bold"
            >
              Register
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}
