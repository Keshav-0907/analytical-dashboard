import React from "react";

const TopPosts = () => {
  return (
    <div className="bg-white shadow-md rounded-lg px-3 py-5 h-fit">
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold"> Top Posts </div>

        <div>
          <select className="p-2 rounded-md text-sm">
            <option>By Impressions</option>
            <option>By Likes</option>
            <option>By Comments</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 py-4">
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:share:7144682794294665216"
          className="w-96 min-h-96 shadow-md border-[1px] border-gray-200 rounded-lg"
          title="Embedded post"
        ></iframe>
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:share:7036323504971001857"
          className="w-96 h-full shadow-md border-[1px] border-gray-200 rounded-lg"
          title="Embedded post"
        ></iframe>
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:share:7086733687140069377"
          className="w-96 h-full shadow-md border-[1px] border-gray-200 rounded-lg"
          title="Embedded post"
        ></iframe>
      </div>
    </div>
  );
};

export default TopPosts;
