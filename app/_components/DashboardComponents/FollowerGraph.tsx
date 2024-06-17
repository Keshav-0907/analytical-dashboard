"use client";
import React, { useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const FollowerGraph = () => {
  // const [showData, setShowData] = useState("followers");

  // const toggleShow = () => {
  //   if (showData === "followers") {
  //     setShowData("post");
  //   } else {
  //     setShowData("followers");
  //   }
  // };
  const FollowerData = [200, 3000, 2000, 2780, 1890, 2390, 2000];
  const xLabels = [
    "1 Dec 2023",
    "2 Dec 2023",
    "3 Dec 2023",
    "4 Dec 2023",
    "5 Dec 2023",
    "6 Dec 2023",
    "7 Dec 2023",
  ];

  return (
    <div className="bg-white shadow-md px-3 rounded-lg flex flex-col py-5 gap-2 cursor-pointer w-3/4">
      {/* <div>
        <button onClick={toggleShow} className="text-blue-500 font-semibold">
          {showData === "followers" ? "Show Post" : "Show Followers"}
        </button>

        <div className="flex border border-gray-700 rounded-md w-fit px-2">
          <button
            className="text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            onClick={toggleShow}
          >
            Followers
          </button>
          <button
            className="text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            onClick={toggleShow}
          >
            Posts
          </button>
        </div>
      </div> */}
      <LineChart
        series={[{ data: FollowerData, label: "Followers" }]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
        yAxis={[{ scaleType: "linear" }]}
      />
    </div>
  );
};

export default FollowerGraph;
