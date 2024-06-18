"use client";
import React, { useState, useEffect } from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const FollowerStats = ({data}) => {
  const TimeStamp = data?.followerStats?.map((item) => item?.timeStamp) || [];
  const Followers = data?.followerStats?.map((item) => item?.followers) || [];

  return (
    <div className="bg-white shadow-md px-3 rounded-lg flex flex-col py-5 gap-2 cursor-pointer w-3/4">
      <div className="font-bold pb-5">Followers Count</div>
      {TimeStamp.length > 0 && Followers.length > 0 ? (
        <LineChart
          series={[{ data: Followers, label: "Followers" }]}
          xAxis={[{ scaleType: "point", data: TimeStamp }]}
          yAxis={[{ scaleType: "linear" }]}
        />
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default FollowerStats;
