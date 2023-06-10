import React from "react";
import FirstCard from "./Card";

function FirstPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-row items-center">
        <FirstCard />
        <FirstCard />
      </div>
    </div>
  );
}

export default FirstPage;
