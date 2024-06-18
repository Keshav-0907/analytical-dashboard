import React from "react";

const Greetings = ({ setTimeStamp, timeStamp }) => {
  
  const getCurrentGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return "Good morning";
    } else if (currentHour < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };

  console.log('hh', timeStamp)

  const greetingMessage = getCurrentGreeting();

  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="text-2xl font-semibold">{greetingMessage}, Keshav!</div>
        <div className="text-sm">Here are your Analytics</div>
        
      </div>

      <div>
        <select
          className="p-2 bg-gray-300 rounded-md"
          onChange={(e) => setTimeStamp(e.target.value)}
        >
          <option value={"weekly"}>Last Week</option>
          <option value={"monthly"}>Last Month</option>
          <option value={"yearly"}>Last Year</option>
        </select>
      </div>
    </div>
  );
};

export default Greetings;
