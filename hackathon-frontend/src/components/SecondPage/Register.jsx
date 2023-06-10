import React from 'react';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from '@material-tailwind/react';

export default function Example() {
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
            <Input type="text" size="lg" label="Name" />
            <Input type="text" size="lg" label="Email" />
            <Input type="tel" size="lg" label="Phone Number" />
            <Input type="password" size="lg" label="Password" />
            <Input type="date" size="lg" label="Date of Birth" />
            <Input type="text" size="lg" label="Gender" />
            <Input type="text" size="lg" label="City" />
            <Input type="text" size="lg" label="State" />
            <Input type="text" size="lg" label="Segment" />
            <Input type="text" size="lg" label="Cause" />
            
          </div>
          
          <Button className="mt-6" fullWidth>
            Register
          </Button>
          
        </form>
      </Card>
    </div>
  );
}