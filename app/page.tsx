import Image from "next/image";
import Greetings from "./_components/Greetings";
import AccountInsights from "./_components/DashboardComponents/AccountInsights";
import FollowerGraph from "./_components/DashboardComponents/FollowerGraph";
import AudienceCountry from "./_components/DashboardComponents/AudienceCountry";
import TopPosts from "./_components/DashboardComponents/TopPosts";
import GenderInsights from "./_components/DashboardComponents/GenderInsights";

export default function Home() {
  return (
    <div className="w-full p-4 bg-[#efefef] h-fit">
      <Greetings/>
      <div className="p-2 flex flex-col gap-4 py-8">
        <AccountInsights/>
        <div className="flex gap-4">
          <FollowerGraph/>
          <AudienceCountry/>
        </div>
        <div className="flex">
          <GenderInsights/>
        </div>
        <div className="h-full">
        <TopPosts/>
        </div>
      </div>
    </div>
  );
}
