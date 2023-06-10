import React from "react";
import {
  Card,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function Todo({ title, description, color }) {
  const listItems = description.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return (
    <Card className="mt-6 m-3" color={color} style={{ width: "250px", height: "480px" }}>
      <CardBody>
        <Typography variant="h5" color="white" className="mb-2 font-bold text-center text-xl">
          {title}
        </Typography>
        <Typography color="white" className="font-normal">
          <ul>{listItems}</ul>
        </Typography>
      </CardBody>
    </Card>
  );
}

