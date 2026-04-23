import { useState } from 'react';
import { Button } from '../ui/Button';
import positivusLogo from '../../assets/positivus-logo-black.svg';

const navLinks = [
  { label: 'About us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 py-5 md:px-10 lg:px-[100px]">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <img src={positivusLogo} alt="Positivus" className="h-[36px] w-auto" />
        </a>

        {/* Desktop Nav + CTA */}
        <div className="hidden md:flex items-center gap-[40px]">
          <nav className="flex items-center gap-[40px]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[20px] font-normal text-brand-dark hover:underline transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button variant="outline" size="md" className="w-[231px] h-[68px]">
            Request a quote
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-[2px] bg-brand-dark block" />
          <span className="w-6 h-[2px] bg-brand-dark block" />
          <span className="w-6 h-[2px] bg-brand-dark block" />
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 px-2 pb-4 border-t-2 border-brand-dark pt-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[20px] font-normal text-brand-dark hover:underline transition-all"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button variant="outline" size="md" className="w-full mt-2">
            Request a quote
          </Button>
        </div>
      )}
    </header>
  );
}
