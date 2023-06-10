import React from "react";
import FirstCard from "./Card1";
import SecondCard from "./Card2";

function FirstPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-row items-center">
        <FirstCard />
        <SecondCard />
      </div>
    </div>
  );
}

export default FirstPage;
