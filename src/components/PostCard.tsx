import Link from "next/link";
import { formatDate, type PostMeta } from "@/lib/posts";
import TagBadge from "@/components/TagBadge";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="border-b border-black/[.08] py-6 dark:border-white/[.145]">
      <Link href={`/blog/${post.slug}`} className="group">
        <h2 className="text-xl font-semibold tracking-tight group-hover:text-red-500">
          {post.title}
        </h2>
      </Link>
      <time dateTime={post.date} className="text-sm text-zinc-500 dark:text-zinc-400">
        {formatDate(post.date)}
      </time>
      {post.description && (
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">{post.description}</p>
      )}
      {post.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>
      )}
    </article>
  );
}
