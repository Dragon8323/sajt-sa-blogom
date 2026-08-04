import Link from "next/link";
import { getAllPosts, getAllTags } from "@/lib/posts";
import { FacebookIcon, InstagramIcon, PawIcon, XIcon, YouTubeIcon } from "@/components/icons";
import NewsletterForm from "@/components/NewsletterForm";

const exploreLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About Me" },
];

const socialLinks = [
  { href: "#", label: "Facebook", Icon: FacebookIcon },
  { href: "#", label: "X (Twitter)", Icon: XIcon },
  { href: "#", label: "Instagram", Icon: InstagramIcon },
  { href: "#", label: "YouTube", Icon: YouTubeIcon },
];

export default function Footer() {
  const topics = getAllTags().slice(0, 6);
  const recentPosts = getAllPosts().slice(0, 3);
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-zinc-950 text-zinc-400">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-white">
              <PawIcon className="size-6" />
              Pet Corner
            </Link>
            <p className="mt-4 max-w-xs text-sm text-zinc-400">
              Stories and tips about dogs, cats, and every other pet in between.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white/40 hover:bg-white/5"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-200">Explore</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {topics.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-zinc-200">Topics</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {topics.map((tag) => (
                  <li key={tag}>
                    <Link
                      href={`/blog?tag=${encodeURIComponent(tag)}`}
                      className="transition-colors hover:text-white"
                    >
                      {tag}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {recentPosts.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-zinc-200">Recent Posts</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {recentPosts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="line-clamp-1 transition-colors hover:text-white"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-14 border-t border-white/10 pt-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-zinc-200">Stay Updated</h3>
              <p className="mt-2 max-w-sm text-sm text-zinc-400">
                Get new posts about pet care and stories sent straight to your inbox.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>

        <p className="mt-14 text-center text-sm text-zinc-500">
          © {year} Pet Corner. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
