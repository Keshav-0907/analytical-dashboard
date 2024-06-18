import React from "react";


const AudienceCountry = ({ data }) => {
  return (
    <div className="bg-white shadow-md rounded-lg px-3 py-5 md:w-1/4">
      <div className="font-bold pb-5">Followers By Location</div>

      <div className="grid grid-cols-1 gap-5">
        {data?.countryInsights?.map((country, index) => (
          <div key={index} className="flex flex-col justify-center cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <img
                  src={country.flag}
                  alt="flag"
                  className="w-5 h-5 rounded-full"
                />
                <div className="text-sm font-medium">{country.name}</div>
              </div>

              <div className="text-sm font-medium">{country.percentage}%</div>
            </div>
            <div
              className={`text-xs pl-7 flex items-center ${
                country.change > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {country.change}%
            </div>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudienceCountry;
