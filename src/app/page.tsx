import { getAllPosts } from "@/lib/posts";
import FeaturedPostCard from "@/components/FeaturedPostCard";
import Hero from "@/components/Hero";

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 6);

  return (
    <div className="flex flex-1 flex-col">
      <Hero />

      {latestPosts.length > 0 && (
        <div className="mx-auto w-full max-w-6xl flex-1 px-6 py-16">
          <h2 className="text-xl font-semibold tracking-tight">Latest posts</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <FeaturedPostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
