import Image from "next/image";

export default function PostHero({
  title,
  coverImage,
}: {
  title: string;
  coverImage?: string;
}) {
  return (
    <section className="relative flex h-[66vh] min-h-[380px] w-full items-center justify-center overflow-hidden bg-zinc-900">
      {coverImage && (
        <Image src={coverImage} alt={title} fill priority sizes="100vw" className="object-cover" />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <h1 className="relative z-10 max-w-3xl px-6 text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {title}
      </h1>
    </section>
  );
}
