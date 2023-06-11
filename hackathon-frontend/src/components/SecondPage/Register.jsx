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
      url: 'http://localhost:5000/api/users/signup',
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
      let formData = {
        email : email,
        body : `hi ${username},
        Marpu is an organization founded by Mr. Kadiri Raghu Vamsi, a National Youth Awardee. The word "Marpu" means "the change" and reflects the organization's mission to bring about positive transformations in society. The foundation is committed to various causes and operates based on four primary themes: environmental sustainability, economic development, social development, and partnerships for the goal.

1. Environmental Sustainability: Marpu Foundation recognizes the importance of preserving and protecting the environment. They actively promote sustainable practices and initiatives that contribute to a cleaner and greener planet. This may involve projects related to renewable energy, waste management, conservation of natural resources, and raising awareness about environmental issues.

2. Economic Development: Marpu Foundation focuses on fostering economic growth and development, particularly in marginalized communities. They work towards empowering individuals through skill development, entrepreneurship, and access to resources and opportunities. By promoting economic inclusion, they aim to reduce poverty and create sustainable livelihoods.

3. Social Development: Marpu Foundation is dedicated to social development and improving the lives of disadvantaged groups. They strive to address issues such as education, healthcare, gender equality, and social justice. Through various initiatives, they aim to uplift communities, provide equal opportunities, and advocate for the rights of marginalized individuals.

4. Partnerships for the Goal: Collaboration is a crucial aspect of Marpu Foundation's approach. They actively seek partnerships and alliances with other organizations, governments, and stakeholders to maximize their impact and achieve their goals. By fostering meaningful partnerships, they can pool resources, expertise, and ideas to address complex societal challenges more effectively.

Marpu Foundation values the power of volunteering and encourages individuals to get involved in their initiatives. They provide a supportive and inclusive environment for volunteers, recognizing that everyone has the potential to make a positive difference. In 2020, they were recognized as "The Best NGO in India" based on a survey conducted that year.

If you share their vision for a more just, sustainable, and compassionate world, Marpu Foundation invites you to join them in their mission. Whether you want to make a difference locally or globally, they offer opportunities to contribute towards creating a better future.`,
        subject : "Welcome to the platform",
        };
        console.log(formData)
      axios.post('https://marpu-email-service.onrender.com/mail', formData, {
        headers: {
          'Content-Type': 'multipart/form-data' // Make sure to set the correct content type
        },
        method: 'post',
        url: 'https://marpu-email-service.onrender.com/mail',
        
      }).then((response) => {console.log(response)}).then((error) => {console.log(error)})
      
      // window.location = "/overview";
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