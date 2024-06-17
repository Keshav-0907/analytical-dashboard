import React from "react";
import { TrendingUp, TrendingDown, EllipsisVertical } from "lucide-react";

const AccountInsights = () => {
  return (
    <div className="grid grid-cols-3 gap-10">
      <div className="bg-white shadow-md px-3 rounded-lg flex flex-col py-5 gap-2 cursor-pointer">
      <div className="text-sm text-gray-600 flex justify-between">
          <div>Total Followers</div>
          <EllipsisVertical size={20} />
        </div>
        <div className="flex items-end justify-between px-2">
          <div className="font-semibold text-4xl">8,873</div>

          <div className="text-green-600 flex items-center gap-1 border-[1px] border-green-600 rounded-full px-2">
            <TrendingUp size={15} />
            <span className="">12%</span>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md px-3 rounded-lg flex flex-col py-5 gap-2 cursor-pointer">
        <div className="text-sm text-gray-600 flex justify-between">
          <div>Total Posts</div>
          <EllipsisVertical size={20} />
        </div>
        <div className="flex items-end justify-between px-2">
          <div className="font-semibold text-4xl">62</div>

          <div className="text-green-600 flex items-center gap-1 border-[1px] border-green-600 rounded-full px-2">
            <TrendingUp size={15} />
            <span className="">2%</span>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md px-3 rounded-lg flex flex-col py-5 gap-2 cursor-pointer">
      <div className="text-sm text-gray-600 flex justify-between">
          <div>Total Engagement</div>
          <EllipsisVertical size={20} />
        </div>
        <div className="flex items-end justify-between px-2">
          <div className="font-semibold text-4xl">48,873</div>

          <div className="text-green-600 flex items-center gap-1 border-[1px] border-green-600 rounded-full px-2">
            <TrendingUp size={15} />
            <span className="">12%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInsights;
