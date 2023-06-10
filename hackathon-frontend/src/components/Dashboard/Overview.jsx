import React from "react";
import CauseCard from "./CauseCard";

function Overview() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-row items-center">
        <CauseCard />
      </div>
    </div>
  );
}

export default Overview;