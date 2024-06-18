"use client";
import React, { useState, useMemo } from "react";

const TopPosts = ({ data }) => {

  return (
    <div className="bg-white shadow-md rounded-lg px-3 py-5 h-fit">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-xl font-semibold">Top Posts</div>
          
        </div>

        {/* <div>
          <select
            className="p-2 rounded-md text-sm"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value={"byImpressions"}>By Impressions</option>
            <option value={"byLikes"}>By Likes</option>
            <option value={"byComments"}>By Comments</option>
          </select>
        </div> */}
      </div>

      <div className="grid md:grid-cols-3 gap-3 py-4 grid-col-1">
        {data?.topPosts?.map((post, index) => (
          <iframe
            key={index}
            src={post.src}
            className="w-full h-96 shadow-md border-[1px] border-gray-200 rounded-lg cursor-pointer"
            title={post.title}
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default TopPosts;
