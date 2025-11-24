// app/api/youtube-videos/route.ts
import { NextResponse } from "next/server";

const SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";
const CHANNELS_URL = "https://www.googleapis.com/youtube/v3/channels";

export async function GET() {
  const apiKey = process.env.YT_API_KEY;
  const channelId = process.env.YT_CHANNEL_ID; // we’ll still log this



  if (!apiKey) {
    console.warn("Missing YT_API_KEY env var");
    return NextResponse.json({ videos: [] }, { status: 200 });
  }

  try {
    // 1) First resolve the *real* channelId from your handle
    const handle = "@fourfools-squd";

    const channelsUrl = new URL(CHANNELS_URL);
    channelsUrl.searchParams.set("key", apiKey);
    channelsUrl.searchParams.set("part", "id,snippet");
    channelsUrl.searchParams.set("forHandle", handle);

    const chRes = await fetch(channelsUrl.toString(), { cache: "no-store" });
    const chData = await chRes.json();

    console.log("CHANNELS response:", JSON.stringify(chData, null, 2));

    const resolvedChannelId = chData.items?.[0]?.id;
    if (!resolvedChannelId) {
      console.warn("No channel found for handle", handle);
      return NextResponse.json({ videos: [] }, { status: 200 });
    }

    // 2) Now use that channelId to search for videos
    const url = new URL(SEARCH_URL);
    url.searchParams.set("key", apiKey);
    url.searchParams.set("channelId", resolvedChannelId);
    url.searchParams.set("part", "snippet,id");
    url.searchParams.set("order", "date");
    url.searchParams.set("maxResults", "6");

    const res = await fetch(url.toString(), { cache: "no-store" });
    const data = await res.json();

    console.log("SEARCH response:", JSON.stringify(data, null, 2));

    const videos =
      (data.items || [])
        .filter((item: any) => item.id?.kind === "youtube#video")
        .map((item: any) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail:
            item.snippet.thumbnails?.high?.url ??
            item.snippet.thumbnails?.medium?.url ??
            item.snippet.thumbnails?.default?.url,
          publishedAt: item.snippet.publishedAt,
        })) ?? [];

    return NextResponse.json({ videos });
  } catch (err) {
    console.error("Error fetching YouTube videos:", err);
    return NextResponse.json({ videos: [] }, { status: 200 });
  }
}
