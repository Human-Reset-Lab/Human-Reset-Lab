import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Human Reset Lab — a nonprofit digital wellness platform. Evidence-based programmes to help you reset, recharge, and thrive.",
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="hero-heading"
        className="bg-[var(--color-primary-50)] px-4 py-20 text-center sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-3xl">
          <h1
            id="hero-heading"
            className="text-4xl font-bold leading-tight text-[var(--color-primary-900)] sm:text-5xl"
          >
            Reset. Recharge. Thrive.
          </h1>
          <p className="mt-6 text-lg text-[var(--foreground)] opacity-80 sm:text-xl">
            Human Reset Lab is a nonprofit digital wellness platform bringing
            evidence-based programmes to individuals and communities who need
            them most.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/programs"
              className="rounded-lg bg-[var(--color-primary-600)] px-8 py-3 text-base font-semibold text-white shadow transition-colors hover:bg-[var(--color-primary-700)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] focus-visible:ring-offset-2"
            >
              Explore Programmes
            </Link>
            <Link
              href="/about"
              className="rounded-lg border border-[var(--color-primary-600)] px-8 py-3 text-base font-semibold text-[var(--color-primary-700)] transition-colors hover:bg-[var(--color-primary-100)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] focus-visible:ring-offset-2"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── Mission summary ───────────────────────────────────────────── */}
      <section
        aria-labelledby="mission-heading"
        className="px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <h2
            id="mission-heading"
            className="mb-10 text-center text-2xl font-bold text-[var(--foreground)] sm:text-3xl"
          >
            Why Human Reset Lab?
          </h2>

          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: "🧠",
                title: "Evidence-Based",
                body: "Every programme is grounded in peer-reviewed research and clinical best practices.",
              },
              {
                icon: "🌍",
                title: "Community First",
                body: "Designed to reach under-resourced communities where commercial solutions fall short.",
              },
              {
                icon: "🔒",
                title: "Privacy-Centred",
                body: "Your data belongs to you. We are transparent about every byte we collect.",
              },
            ].map(({ icon, title, body }) => (
              <article
                key={title}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 text-center shadow-sm"
              >
                <span
                  className="mb-4 inline-block text-4xl"
                  role="img"
                  aria-hidden="true"
                >
                  {icon}
                </span>
                <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                <p className="text-sm leading-relaxed opacity-75">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA banner ────────────────────────────────────────────────── */}
      <section
        aria-labelledby="cta-heading"
        className="bg-[var(--color-primary-700)] px-4 py-14 text-center text-white sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl">
          <h2 id="cta-heading" className="text-2xl font-bold sm:text-3xl">
            Ready to take the first step?
          </h2>
          <p className="mt-4 opacity-90">
            Join our early-access list and be the first to experience
            evidence-based wellness, built for everyone.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-[var(--color-primary-800)] shadow transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-primary-700)]"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
