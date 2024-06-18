import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  let data;

  if (body.timeStamp === "yearly") {
    data = {
      audience: {
        followers: 4000,
        post: 40,
        engagement: 60323,
        followersChange: 7.12,
        postChange: -6.92,
        engagementChange: 9.99,
      },
      countryInsights: [
        {
          name: "USA",
          percentage: 35,
          change: 8.41,
          flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/640px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png",
        },
        {
          name: "India",
          percentage: 30,
          change: 72.51,
          flag: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
        },
        {
          name: "Canada",
          percentage: 25,
          change: -10.43,
          flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg",
        },
        {
          name: "China",
          percentage: 10,
          change: 5.11,
          flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/255px-Flag_of_the_People%27s_Republic_of_China.svg.png",
        },

        {
          name: "UK",
          percentage: 7,
          change: -5.43,
          flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/800px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",
        },

        
      ],
      genderInsights: {
        male: 30,
        female: 45,
        other: 25,
      },
      followerStats: [
        {
          timeStamp: "Jan",
          followers: 3999,
        },
        {
          timeStamp: "Feb",
          followers: 4050,
        },
        {
          timeStamp: "Mar",
          followers: 4320,
        },
        {
          timeStamp: "Apr",
          followers: 4250,
        },
        {
          timeStamp: "May",
          followers: 4300,
        },
        {
          timeStamp: "Jun",
          followers: 4325,
        },
      ],
      engagementRate: [
        {
          timeStamp: "Sun",
          engagement: -20,
        },
        {
          timeStamp: "Mon",
          engagement: 10,
        },
        {
          timeStamp: "Tue",
          engagement: 5,
        },
        {
          timeStamp: "Wed",
          engagement: 15,
        },
        {
          timeStamp: "Thur",
          engagement: 11,
        },
        {
          timeStamp: "Fri",
          engagement: 0,
        },
        {
          timeStamp: "Sat",
          engagement: -5,
        },
      ],
      type: "Yearly",
      topPosts: [
        {
          src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7142123822438039552",
          title: "Post 1",
        },
        {
          src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7144682794294665216",
          title: "Post 2",
          
        },
        {
          src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7036323504971001857",
          title: "Post 3",
        },
      ]
    };
  } else if (body.timeStamp === "monthly") {
    data = {
      audience: {
        followers: 4400,
        post: 5,
        engagement: 28345,
        followersChange: -5.12,
        postChange: -5.12,
        engagementChange: 4.54,
      },
      countryInsights: [
        {
          name: "India",
          percentage: 40,
          change: -1.51,
          flag: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
          
        },
        {
          name: "UK",
          percentage: 25,
          change: -5.43,
          flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/800px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",
        },
        {
          name: "USA",
          percentage: 15,
          change: 10.43,
          flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/640px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png",
        },
       
        {
          name: "Canada",
          percentage: 10,
          change: -10.43,
          flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg",
        },
        {
          name: "China",
          percentage: 7,
          change: 5.11,
          flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/255px-Flag_of_the_People%27s_Republic_of_China.svg.png",
        },
      ],
      genderInsights: {
        male: 60,
        female: 35,
        other: 5,
      },
      followerStats: [
        {
          timeStamp: "1st",
          followers: 3999,
        },
        {
          timeStamp: "2nd",
          followers: 4095,
        },
        {
          timeStamp: "3rd",
          followers: 3800,
        },
        {
          timeStamp: "4th",
          followers: 4250,
        },
        {
          timeStamp: "5th",
          followers: 4400,
        },
        {
          timeStamp: "6th",
          followers: 4325,
        },
        {
          timeStamp: "7th",
          followers: 3999,
        },
        {
          timeStamp: "8th",
          followers: 4095,
        },
        {
          timeStamp: "9th",
          followers: 3800,
        },
        {
          timeStamp: "10th",
          followers: 4250,
        },
        {
          timeStamp: "11th",
          followers: 4400,
        },
        {
          timeStamp: "12th",
          followers: 4325,
        },
        {
          timeStamp: "13th",
          followers: 3999,
        },
        {
          timeStamp: "14th",
          followers: 4095,
        },
        {
          timeStamp: "15th",
          followers: 3800,
        },
        {
          timeStamp: "16th",
          followers: 4250,
        },
        {
          timeStamp: "17th",
          followers: 4400,
        },
        {
          timeStamp: "18th",
          followers: 4325,
        },
      ],
      engagementRate: [
        {
          timeStamp: "Sun",
          engagement: -7,
        },
        {
          timeStamp: "Mon",
          engagement: 17,
        },
        {
          timeStamp: "Tue",
          engagement: -22,
        },
        {
          timeStamp: "Wed",
          engagement: 28,
        },
        {
          timeStamp: "Thur",
          engagement: 15,
        },
        {
          timeStamp: "Fri",
          engagement: -8,
        },
        {
          timeStamp: "Sat",
          engagement: 19,
        },
    ],
      type: "Monthly",
      topPosts: [
        {
          src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7036323504971001857",
          title: "Post 1",
        },
        {
          src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7142123822438039552",
          title: "Post 2",
        },
        {
          src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7144682794294665216",
          title: "Post 3",
        },
      ]
    };
  } else if (body.timeStamp === "weekly") {
    data = {
      audience: {
        followers: 3500,
        followersChange: 10.1,
        post: 2,
        postChange: -4.92,
        engagement: 16032,
        engagementChange: 12.43,
      },
      countryInsights: [
        {
          name: "India",
          percentage: 30,
          change: 72.51,
          flag: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
        },
        {
          name: "USA",
          percentage: 28,
          change: 10.43,
          flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/640px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png",
        },
        {
          name: "UK",
          percentage: 25,
          change: -5.43,
          flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/800px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",
        },
        {
          name: "Canada",
          percentage: 10,
          change: -10.43,
          flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg",
        },
        {
          name: "China",
          percentage: 7,
          change: 5.11,
          flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/255px-Flag_of_the_People%27s_Republic_of_China.svg.png",
        },
      ],
      genderInsights: {
        male: 70,
        female: 25,
        other: 5,
      },
      followerStats: [
        {
          timeStamp: "Sun",
          followers: 4325,
        },
        {
          timeStamp: "Mon",
          followers: 3999,
        },
        {
          timeStamp: "Tue",
          followers: 4095,
        },
        {
          timeStamp: "Wed",
          followers: 4000,
        },
        {
          timeStamp: "Thur",
          followers: 4250,
        },
        {
          timeStamp: "Fri",
          followers: 4450,
        },
        {
          timeStamp: "Sat",
          followers: 4325,
        },
      ],
      engagementRate: [
        {
          timeStamp: "Sun",
          engagement: 50,
        },
        {
          timeStamp: "Mon",
          engagement: -50,
        },
        {
          timeStamp: "Tue",
          engagement: 10,
        },
        {
          timeStamp: "Wed",
          engagement: 15,
        },
        {
          timeStamp: "Thur",
          engagement: 11,
        },
        {
          timeStamp: "Fri",
          engagement: 0,
        },
        {
          timeStamp: "Sat",
          engagement: -5,
        },
      ],
      type: "Weekly",
      topPosts: [
        {
          src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7144682794294665216",
          title: "Post 1",
        },
        {
          src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7036323504971001857",
          title: "Post 2",
        },
        {
          src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7142123822438039552",
          title: "Post 3",
        },
      ]
    };
  } else {
    data = "Default";
  }

  return NextResponse.json({ data });
}
