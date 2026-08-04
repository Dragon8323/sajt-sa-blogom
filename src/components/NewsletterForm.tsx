"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = "Subscribe me to Pet Corner";
    const body = `Please subscribe this email to the newsletter: ${email}`;
    window.location.href = `mailto:gagapex@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className="w-full rounded-md border border-white/20 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-white/40 focus:outline-none sm:w-64"
      />
      <button
        type="submit"
        className="shrink-0 rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-white"
      >
        Subscribe
      </button>
    </form>
  );
}
