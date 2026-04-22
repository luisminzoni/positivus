import { Button } from '../ui/Button';

const navLinks = [
  { label: 'About us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
];

export function Header() {
  return (
    <header className="w-full px-4 py-5 md:px-10 lg:px-[100px]">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          {/* [ICON] Logo icon placeholder */}
          <div className="w-[36px] h-[36px] rounded-full bg-brand-dark flex items-center justify-center text-white text-xs font-bold shrink-0">
            [★]
          </div>
          <span className="text-[24px] font-medium text-brand-dark">
            Positivus
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[18px] font-normal text-brand-dark hover:underline transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <Button variant="outline" size="md" className="hidden md:inline-flex">
          Request a quote
        </Button>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label="Open menu"
        >
          <span className="w-6 h-[2px] bg-brand-dark block" />
          <span className="w-6 h-[2px] bg-brand-dark block" />
          <span className="w-6 h-[2px] bg-brand-dark block" />
        </button>
      </div>
    </header>
  );
}
