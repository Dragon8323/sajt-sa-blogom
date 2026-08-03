import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Pet Corner</h1>
      <p className="mt-3 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
        Stories, tips, and everything in between about life with dogs, cats, and every other pet
        that&apos;s stolen a piece of our hearts.
      </p>
      <div className="mt-6 flex gap-4 text-sm font-medium">
        <Link
          href="/blog"
          className="rounded-full bg-foreground px-5 py-2.5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          Read the blog
        </Link>
        <Link
          href="/about"
          className="rounded-full border border-black/[.08] px-5 py-2.5 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
        >
          About me
        </Link>
      </div>

      {latestPosts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-xl font-semibold tracking-tight">Latest posts</h2>
          <div className="mt-4">
            {latestPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
