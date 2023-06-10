import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function Example() {
  return (
    <Card className="mt-6 w-96 m-3">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Are you an admin?
        </Typography>
        <Typography>

        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Login</Button>
      </CardFooter>
    </Card>
  );
}
