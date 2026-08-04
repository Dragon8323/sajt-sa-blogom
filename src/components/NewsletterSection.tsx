import NewsletterForm from "@/components/NewsletterForm";
import PawPrintLoop from "@/components/PawPrintLoop";

export default function NewsletterSection() {
  return (
    <section aria-labelledby="newsletter-heading">
      <div className="bg-amber-400">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2
                id="newsletter-heading"
                className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl"
              >
                Get our pawsome newsletter
              </h2>
              <p className="mt-4 max-w-md text-base text-zinc-900">
                Join thousands of pet parents getting our best stories, care tips, and
                cute updates — straight to your inbox.
              </p>
              <a
                href="#newsletter-signup"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
              >
                Sign me up
              </a>
            </div>

            <div className="flex items-center justify-center rounded-3xl bg-white p-8 shadow-sm sm:p-12">
              <div className="aspect-square w-full max-w-xs">
                <PawPrintLoop />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="newsletter-signup" className="bg-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                Sign up for updates
              </h3>
              <p className="mt-1 text-sm text-zinc-400">
                Fresh posts and pet care tips. No spam, unsubscribe anytime.
              </p>
            </div>
            <div className="lg:shrink-0">
              <NewsletterForm />
              <p className="mt-3 text-xs text-zinc-500">
                By signing up, you agree to receive emails from Pet Corner. You can
                unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
