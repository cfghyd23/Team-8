import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
  } from "@material-tailwind/react";
   
  export default function Example() {
    return (
    //   Creating card for LOgin
      <Card className="w-96 m-10">

        {/* Creating CardHeader */}
        <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 flex justify-center items-center h-15">
          <Typography variant="h3" color="white">
            Login
          </Typography>
        </CardHeader>

        {/* Creating CardBody */}
        <CardBody className="flex flex-col gap-4">
          <Input label="Email" size="lg" />
          <Input label="Password" size="lg" />
        </CardBody>

        {/* Creating CardFooter */}
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth>
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don't have an account?
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="blue"
              className="ml-1 font-bold">
              Sign up
            </Typography>
          </Typography>
        </CardFooter>

      </Card>
    );
  }