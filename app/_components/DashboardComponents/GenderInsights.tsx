"use client";
import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const GenderInsights = ({data}) => {

  return (
    <div className="bg-white shadow-md rounded-lg px-3 py-5 h-fit">
      <div className="font-bold pb-5">Gender Insights</div>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: data?.genderInsights?.male, label: "Male" },
              { id: 1, value: data?.genderInsights?.female, label: "Female" },
              { id: 2, value: data?.genderInsights?.other, label: "Others" },
            ],
          },
        ]}
        width={400}
        height={200}
      />
    </div>
  );
};

export default GenderInsights;
