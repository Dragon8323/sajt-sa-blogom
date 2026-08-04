import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex h-[85vh] max-h-[820px] min-h-[560px] w-full items-end overflow-hidden">
      <Image
        src="/pexels-madkourfujifilm-30561670.jpg"
        alt="A curious puppy looking back over its shoulder"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/40" />

      <div className="relative z-10 w-full px-6 pb-16 md:px-12">
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
          A happy pet makes
          <br />
          a happy home.
        </h1>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-medium">
          <Link
            href="/blog"
            className="rounded-full bg-white px-5 py-2.5 text-black transition-colors hover:bg-zinc-200"
          >
            Read the blog
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-white/60 px-5 py-2.5 text-white transition-colors hover:bg-white/10"
          >
            About me
          </Link>
          <a
            href="mailto:gagapex@gmail.com?subject=Subscribe%20me%20to%20Pet%20Corner"
            className="rounded-full bg-red-500 px-5 py-2.5 text-white transition-colors hover:bg-red-600"
          >
            Subscribe
          </a>
        </div>
      </div>
    </section>
  );
}
