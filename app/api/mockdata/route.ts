import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  return Response.json({
    followers: {
      data: [
        { date: "2024-06-10", count: 1000, growth: 2.5 },
        { date: "2024-06-11", count: 1025, growth: 1.25 },
        { date: "2024-06-12", count: 1050, growth: 2.44 },
        { date: "2024-06-13", count: 1070, growth: 1.9 },
        { date: "2024-06-14", count: 1100, growth: 2.77 },
        { date: "2024-06-15", count: 1120, growth: 1.82 },
        { date: "2024-06-16", count: 1150, growth: 2.68 },
      ],
    },
    engagementRate: {
      data: [
        { date: "2024-06-10", rate: 2.5, impressions: 10000 },
        { date: "2024-06-11", rate: 3.1, impressions: 10500 },
        { date: "2024-06-12", rate: 2.8, impressions: 11200 },
        { date: "2024-06-13", rate: 3.3, impressions: 12000 },
        { date: "2024-06-14", rate: 2.9, impressions: 12500 },
        { date: "2024-06-15", rate: 3.5, impressions: 13000 },
        { date: "2024-06-16", rate: 4.0, impressions: 13500 },
      ],
    },
    topPosts: [
      {
        id: 1,
        title: "Top Post 1",
        likes: 200,
        comments: 50,
        reach: 5000, // Added reach
        type: "Image", // Added post type
      },
      {
        id: 2,
        title: "Top Post 2",
        likes: 180,
        comments: 42,
        reach: 4500,
        type: "Video",
      },
      {
        id: 3,
        title: "Top Post 3",
        likes: 150,
        comments: 35,
        reach: 4000,
        type: "Text",
      },
    ],
    demographics: {
      age: {
        "18-24": 20,
        "25-34": 35,
        "35-44": 25,
        "45-54": 15,
        "55+": 5,
      },
      location: {
        countries: [
          { name: "India", percentage: 40 },
          { name: "United States", percentage: 30 },
          { name: "United Kingdom", percentage: 15 },
          { name: "Canada", percentage: 10 },
          { name: "Others", percentage: 5 },
        ],
      },
      gender: {
        male: 60,
        female: 40,
      },
    },
  });
}
