export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Brand column */}
          <div>
            <p className="text-base font-bold text-[var(--color-primary-700)]">
              Human Reset Lab
            </p>
            <p className="mt-2 text-sm text-[var(--foreground)] opacity-70">
              Empowering individuals and communities through evidence-based
              wellness programmes.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide opacity-60">
              Quick Links
            </p>
            <ul className="space-y-2 text-sm" role="list">
              {[
                { href: "/about", label: "About Us" },
                { href: "/programs", label: "Programmes" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="underline-offset-4 hover:underline focus-visible:rounded focus-visible:underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal navigation">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide opacity-60">
              Legal
            </p>
            <ul className="space-y-2 text-sm" role="list">
              {[
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
                { href: "/accessibility", label: "Accessibility" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="underline-offset-4 hover:underline focus-visible:rounded focus-visible:underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-[var(--border)] pt-6 text-center text-xs opacity-60">
          <p>
            &copy; {year} Human Reset Lab. A nonprofit digital wellness
            platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
