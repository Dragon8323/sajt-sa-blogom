import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "A bit about the person behind Pet Corner.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">About Me</h1>
      <div className="prose prose-zinc mt-6 dark:prose-invert">
        <p>
          Hi, I&apos;m Dragan — welcome to Pet Corner. I started this blog because life with pets
          is full of small moments worth writing down: the funny habits, the hard days, and
          everything I&apos;ve learned along the way about keeping animals happy and healthy.
        </p>
        <p>
          Here you&apos;ll find a mix of personal stories about my own pets and practical tips on
          things like feeding, training, and everyday care — for dogs, cats, and anyone else with
          fur, feathers, or scales.
        </p>
        <p>
          This bio is still a placeholder — swap in your own pets&apos; names, your story, and
          whatever else you&apos;d like visitors to know about you.
        </p>
      </div>
    </div>
  );
}
