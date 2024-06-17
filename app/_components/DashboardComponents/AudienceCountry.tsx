import React from "react";

const CountryData = [
  {
    name: "India",
    percentage: 40,
    change: 72.51,
  },
  {
    name: "United States",
    percentage: 30,
    change: 10.43,
  },
  {
    name: "United Kingdom",
    percentage: 15,
    change: -5.43,
  },
  {
    name: "Canada",
    percentage: 10,
    change: -10.41,
  },
  {
    name: "Others",
    percentage: 5,
    change: 5,
  },
];

const AudienceCountry = () => {
  return (
    <div className="bg-white shadow-md rounded-lg px-3 py-5 w-1/4">
      <div className="font-bold pb-5">Followers By Location</div>

      <div className="grid grid-cols-1 gap-5">
        {CountryData.map((country, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">{country.name}</div>
              <div className="text-sm font-medium">{country.percentage}%</div>
            </div>
            <div className={`text-xs ${country.change > 0 ? 'text-green-600' : 'text-red-600'}`}>{country.change}%</div>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudienceCountry;
