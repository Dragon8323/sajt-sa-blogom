import type { Metadata } from "next";
import { getAllPosts, getAllTags } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import TagBadge from "@/components/TagBadge";

export const metadata: Metadata = {
  title: "Blog",
  description: "All blog posts.",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const { tag } = await searchParams;
  const posts = getAllPosts();
  const tags = getAllTags();
  const filteredPosts = tag ? posts.filter((post) => post.tags.includes(tag)) : posts;

  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>

      {tags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {tag && <TagBadge tag={tag} active />}
          {tags
            .filter((t) => t !== tag)
            .map((t) => (
              <TagBadge key={t} tag={t} />
            ))}
        </div>
      )}

      <div className="mt-8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => <PostCard key={post.slug} post={post} />)
        ) : (
          <p className="text-zinc-600 dark:text-zinc-400">No posts found for this tag.</p>
        )}
      </div>
    </div>
  );
}
