"use client";
import Image from "next/image";
import Greetings from "./_components/Greetings";
import AccountInsights from "./_components/DashboardComponents/AccountInsights";
import AudienceCountry from "./_components/DashboardComponents/AudienceCountry";
import TopPosts from "./_components/DashboardComponents/TopPosts";
import GenderInsights from "./_components/DashboardComponents/GenderInsights";
import EngagementRate from "./_components/DashboardComponents/EngagementRate";
import FollowerStats from "./_components/DashboardComponents/FollowerStats";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState([null]);
  const [timeStamp, setTimeStamp] = useState("monthly");

  console.log('here', timeStamp);
  useEffect(() => {
    axios
      .post("/api/mockdata",{
        timeStamp: timeStamp
      
      })
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, [timeStamp]);

  return (
    <div className="w-full p-4 bg-[#efefef] h-fit">
      <Greetings setTimeStamp={setTimeStamp}/>
      <div className="p-2 flex flex-col gap-4 py-8">
        <AccountInsights data={data}/>
        <div className="flex gap-4 md:flex-row flex-col">
          <FollowerStats data={data}/>
          <AudienceCountry data={data}/>
        </div>
        <div className="flex gap-4 md:flex-row flex-col">
          <EngagementRate datas={data}/>
          <GenderInsights data={data}/>
        </div>
        <div className="h-full"><TopPosts data={data}/></div>
      </div>
    </div>
  );
}
