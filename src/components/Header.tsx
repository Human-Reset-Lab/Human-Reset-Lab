import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-[var(--color-primary-700)] focus-visible:rounded"
          aria-label="Human Reset Lab – go to homepage"
        >
          <span aria-hidden="true">🌿</span>
          <span>Human Reset Lab</span>
        </Link>

        {/* Primary navigation */}
        <nav aria-label="Primary navigation">
          <ul className="flex list-none items-center gap-1 sm:gap-2" role="list">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="rounded px-3 py-1.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--color-primary-50)] hover:text-[var(--color-primary-700)] focus-visible:bg-[var(--color-primary-50)]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
