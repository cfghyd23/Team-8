import React from "react";

function Certificate({ name }) {
  return (
    <div className="certificate">
      <h1>Certificate of Achievement</h1>
      <p>This is to certify that</p>
      <h2>{name}</h2>
      <p>has successfully completed the course</p>
      <p>React Fundamentals</p>
    </div>
  );
}

export default Certificate;
