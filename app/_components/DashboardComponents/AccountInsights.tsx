import React, { useEffect } from "react";
import { TrendingUp, TrendingDown, EllipsisVertical } from "lucide-react";
import CountUp from 'react-countup';


const AccountInsights = ({ data }) => {
  if (!data) return <div>Loading...</div>;
  return (
    <div className="grid md:grid-cols-3 md:gap-10 gap-3 grid-cols-1">
      <div className="bg-white shadow-md px-3 rounded-lg flex flex-col py-5 gap-2 cursor-pointer">
        <div className="text-sm text-gray-600 flex justify-between">
          <div className="flex gap-2">
            <div>Total Followers</div>{" "}
            <div className="flex justify-center items-center relative">
                <div className="absolute h-3 w-3 rounded-full bg-green-600">
                  {" "}
                </div>
                <div className="rounded-full h-3 w-3 bg-green-600 animate-ping"></div>
              </div>

          </div>
          <EllipsisVertical size={20} />
        </div>
        <div className="flex items-end justify-between px-2">
          <div className="font-semibold text-4xl">
          <CountUp end={data?.audience?.followers} duration={2.75}/>
            
          </div>

          <div className={`${data?.audience?.followersChange > 0 ? ('text-green-600 border-green-600') : ('text-red-600 border-red-600')} flex items-center gap-1 border-[1px]  rounded-full px-2`}>
            {
              data?.audience?.followersChange > 0 ? <TrendingUp size={15} /> : <TrendingDown size={15} />
            }
            <span className="text-sm">{data?.audience?.followersChange}%</span>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md px-3 rounded-lg flex flex-col py-5 gap-2 cursor-pointer">
        <div className="text-sm text-gray-600 flex justify-between">
          <div>Total Posts</div>
          <EllipsisVertical size={20} />
        </div>
        <div className="flex items-end justify-between px-2">
          <div className="font-semibold text-4xl">
          <CountUp end={data?.audience?.post} duration={2.75}/>
            
          </div>

          <div className={`${data?.audience?.postChange > 0 ? ('text-green-600 border-green-600') : ('text-red-600 border-red-600')} flex items-center gap-1 border-[1px]  rounded-full px-2`}>
            {
              data?.audience?.postChange > 0 ? <TrendingUp size={15} /> : <TrendingDown size={15} />
            }
            <span className="text-sm">{data?.audience?.postChange}%</span>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md px-3 rounded-lg flex flex-col py-5 gap-2 cursor-pointer">
        <div className="text-sm text-gray-600 flex justify-between">
          <div>Total Engagement</div>
          <EllipsisVertical size={20} />
        </div>
        <div className="flex items-end justify-between px-2">
          <div className="font-semibold text-4xl">
            <CountUp end={data?.audience?.engagement} duration={2.75}/>
          </div>

          <div className={`${data?.audience?.engagementChange > 0 ? ('text-green-600 border-green-600') : ('text-red-600 border-red-600')} flex items-center gap-1 border-[1px]  rounded-full px-2`}>
            {
              data?.audience?.engagementChange > 0 ? <TrendingUp size={15} /> : <TrendingDown size={15} />
            }
            <span className="text-sm">{data?.audience?.engagementChange}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInsights;
