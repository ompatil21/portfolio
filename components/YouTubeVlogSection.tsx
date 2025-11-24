"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Video = {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    publishedAt: string;
};

const YouTubeVlogSection = () => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const res = await fetch("/api/youtube-videos");
                const data = await res.json();
                setVideos(data.videos || []);
            } catch (err) {
                console.error("Failed to load YouTube videos", err);
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, []);

    if (!loading && videos.length === 0) {
        // if no videos or env not set, just skip rendering the section
        return null;
    }

    return (
        <section className="px-4 md:px-6 lg:px-0 py-20">
            <div className="mx-auto max-w-6xl">
                {/* Heading */}
                <div className="mb-12 text-center space-y-4">
                    <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] uppercase tracking-[0.25em] text-slate-300/80">
                        <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Off-screen • YouTube
                    </p>

                    <h2 className="heading text-2xl md:text-3xl lg:text-4xl text-slate-50">
                        I vlog sometimes{" "}
                        <span className="text-purple">for fun</span>
                    </h2>

                    <p className="text-sm md:text-base text-slate-300/80 max-w-2xl mx-auto">
                        Short dev logs, life in Australia, and the occasional chaotic
                        experiment. Here are a few recent videos from my channel.
                    </p>
                </div>

                {/* Video grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {loading
                        ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
                        : videos.map((video) => <VideoCard key={video.id} video={video} />)}
                </div>
            </div>
        </section>
    );
};

export default YouTubeVlogSection;

const SkeletonCard = () => (
    <div
        className={cn(
            "relative overflow-hidden rounded-2xl border border-white/5",
            "bg-[radial-gradient(circle_at_top,_rgba(148,163,255,0.18),transparent_55%),_linear-gradient(135deg,#020617,#020617_40%,#020617)]",
            "shadow-[0_18px_45px_rgba(15,23,42,0.85)] backdrop-blur-md",
            "animate-pulse"
        )}
    >
        <div className="aspect-video w-full bg-slate-800/70" />
        <div className="p-4 space-y-3">
            <div className="h-4 w-3/4 bg-slate-800 rounded-md" />
            <div className="h-3 w-1/2 bg-slate-800 rounded-md" />
            <div className="flex gap-2 pt-1">
                <span className="h-3 w-16 bg-slate-800 rounded-full" />
                <span className="h-3 w-20 bg-slate-800 rounded-full" />
            </div>
        </div>
    </div>
);

const VideoCard = ({ video }: { video: Video }) => {
    const youtubeUrl = `https://www.youtube.com/watch?v=${video.id}`;

    const publishedDate = (() => {
        try {
            return new Date(video.publishedAt).toLocaleDateString("en-AU", {
                day: "numeric",
                month: "short",
                year: "numeric",
            });
        } catch {
            return "";
        }
    })();

    return (
        <a
            href={youtubeUrl}
            target="_blank"
            rel="noreferrer"
            className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/10",
                "bg-[radial-gradient(circle_at_top,_rgba(148,163,255,0.22),transparent_55%),_linear-gradient(145deg,#020617,#020617_40%,#020617)]",
                "shadow-[0_18px_45px_rgba(15,23,42,0.9)] backdrop-blur-md",
                "transition-transform duration-300 ease-out",
                "hover:-translate-y-1.5 hover:shadow-[0_26px_70px_rgba(15,23,42,1)]"
            )}
        >
            {/* Glow ring on hover */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-fuchsia-500/30 via-sky-500/20 to-indigo-500/20 blur-[1.5px]" />
            </div>

            {/* Thumbnail */}
            <div className="relative w-full aspect-video overflow-hidden">
                <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* subtle gradient at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* play badge */}
                <div className="absolute left-3 bottom-3 flex items-center gap-2 text-xs font-medium text-slate-50">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/40 border border-white/30 backdrop-blur-sm">
                        ▶
                    </span>
                    <span className="uppercase tracking-[0.16em] text-[0.65rem] text-slate-200/95">
                        Watch on YouTube
                    </span>
                </div>
            </div>

            {/* Text content */}
            <div className="p-4 flex flex-col gap-3 relative z-10">
                <div className="flex items-center justify-between gap-2 text-[0.7rem] text-slate-400">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2 py-1 border border-white/10">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                        Vlog
                    </span>
                    {publishedDate && (
                        <span className="text-[0.7rem] text-slate-400/90">
                            {publishedDate}
                        </span>
                    )}
                </div>

                <h3 className="text-sm md:text-base font-semibold text-slate-50 line-clamp-2">
                    {video.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-2">
                    {video.description}
                </p>
            </div>
        </a>
    );
};
