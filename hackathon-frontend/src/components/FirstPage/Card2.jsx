import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";


export default function Example() {

  
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/login`; 
      navigate(path);
    }
  return (
    <Card className="mt-6 w-96 m-3">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Are you an intern?
        </Typography>
        <Typography>
          Be part of our 10 Day program.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button onClick={routeChange}>Login</Button>
      </CardFooter>
    </Card>
  );
}
