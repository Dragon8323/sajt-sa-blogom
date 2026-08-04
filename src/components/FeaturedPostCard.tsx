import Image from "next/image";
import Link from "next/link";
import { formatDate, type PostMeta } from "@/lib/posts";

export default function FeaturedPostCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900">
        {post.coverImage && (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>
      <h3 className="mt-4 text-lg font-semibold tracking-tight group-hover:text-red-500">
        {post.title}
      </h3>
      <time dateTime={post.date} className="text-sm text-zinc-500 dark:text-zinc-400">
        {formatDate(post.date)}
      </time>
      {post.description && (
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{post.description}</p>
      )}
    </Link>
  );
}
