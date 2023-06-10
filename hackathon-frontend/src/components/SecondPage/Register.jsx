import React from 'react';
import axios from "axios";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from '@material-tailwind/react';

import { useState } from "react";

export default function Example() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phno, setPhno] = useState('');
  const [pwd, setPwd] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [cause, setCause] = useState('');
  
  const [segment, setSegment] = useState('');
  const handleChange = (event) => {
    setUsername(event.target.value);
  };
  
  const handleChange2 = (event) => {
    setEmail(event.target.value);
  };
  const handleChange3 = (event) => {
    setPhno(event.target.value);
  };
  const handleChange4 = (event) => {
    setPwd(event.target.value);
  };
  const handleChange5 = (event) => {
    setDob(event.target.value);
  };
  const handleChange6 = (event) => {
    setGender(event.target.value);
  };
  const handleChange7 = (event) => {
    setCity(event.target.value);
  };
  const handleChange8 = (event) => {
    setState(event.target.value);
  };
  const handleChange9 = (event) => {
    setSegment(event.target.value);
  };
  const handleChange10 = (event) => {
    setCause(event.target.value);
  };
  function register() {
    axios({
      
      method: 'post',
      url: 'http://localhost:5000/api/v1/auth/register',
      data: {
        name: username,
        email: email,
        phone: phno,
        password: pwd,
        dob: dob,
        gender: gender,
        city: city,
        state: state,
        segment: segment,
        cause: cause
      }
    }).then((response) => {
      window.location = "/overview";
      }).then ((error) => {alert(error.message);});
  }
  
  return (
    <div className="flex justify-center items-center h-screen">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Register
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 h-screen">
          <div className="mb-4 flex flex-col gap-6">
            <Input type="text" size="lg" label="Name" onChange={handleChange} value={username} />
            <Input type="text" size="lg" label="Email" onChange={handleChange2} value={email} />
            <Input type="tel" size="lg" label="Phone Number" onChange={handleChange3} value={phno} />
            <Input type="password" size="lg" label="Password" onChange={handleChange4} value={pwd}/>
            <Input type="date" size="lg" label="Date of Birth" onChange={handleChange5} value={dob}/>
            <Input type="text" size="lg" label="Gender" onChange={handleChange6} value={gender}/>
            <Input type="text" size="lg" label="City" onChange={handleChange7} value={city}/>
            <Input type="text" size="lg" label="State" onChange={handleChange8} value={state}/>
            <Input type="text" size="lg" label="Segment" onChange={handleChange9} value={segment}/>
            <Input type="text" size="lg" label="Cause" onChange={handleChange10} value={cause}/>
            
          </div>
          
          <Button className="mt-6" fullWidth onClick={register}>
            Register
          </Button>
          
        </form>
      </Card>
    </div>
  );
}