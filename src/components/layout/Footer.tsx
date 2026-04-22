import { useState } from 'react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import { type } from '../../styles/tokens';

const navLinks = [
  { label: 'About us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
];

export function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-brand-dark px-4 py-[55px] md:px-10 lg:px-[100px]">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-[50px]">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-[36px] h-[36px] rounded-full bg-brand-green flex items-center justify-center text-brand-dark text-xs font-bold shrink-0">
              [★]
            </div>
            <span className="text-[24px] font-medium text-white">Positivus</span>
          </a>

          {/* Nav */}
          <nav className="flex flex-wrap gap-6 md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[18px] text-white underline hover:text-brand-green transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex gap-3">
            {['LinkedIn', 'Facebook', 'Twitter'].map((social) => (
              <a
                key={social}
                href="#"
                aria-label={social}
                className="w-[30px] h-[30px] rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-brand-green hover:border-brand-green transition-colors"
              >
                {/* [ICON] {social} icon */}
                <span className="text-white text-[10px] font-bold">
                  [{social[0]}]
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white/20" />

        {/* Middle row: contact + subscribe */}
        <div className="flex flex-col md:flex-row justify-between gap-10 items-start">
          {/* Contact info */}
          <div className="flex flex-col gap-3">
            <h4 className={cn(type.h4, 'text-white')}>Contact us:</h4>
            <ul className="flex flex-col gap-2">
              <li className="text-[18px] text-white">
                Email:{' '}
                <a
                  href="mailto:info@positivus.com"
                  className="underline hover:text-brand-green"
                >
                  info@positivus.com
                </a>
              </li>
              <li className="text-[18px] text-white">
                Phone:{' '}
                <a
                  href="tel:5555678901"
                  className="underline hover:text-brand-green"
                >
                  555-567-8901
                </a>
              </li>
              <li className="text-[18px] text-white">
                Address: 1234 Main St, Moonstone City, Stardust State 12345
              </li>
            </ul>
          </div>

          {/* Subscribe form */}
          <div className="bg-white/10 rounded-[14px] p-[38px] flex flex-col gap-4 w-full max-w-[450px]">
            <h4 className={cn(type.h4, 'text-white')}>Subscribe to news</h4>
            <form
              className="flex gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                setEmail('');
              }}
            >
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 border-2 border-white/30 rounded-pill px-5 py-3 text-[16px] bg-transparent text-white placeholder:text-white/50 focus:outline-none focus:border-brand-green"
              />
              <Button variant="primary" size="sm" type="submit">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white/20" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[18px] text-white">
            © 2023 Positivus. All Rights Reserved.
          </p>
          <a
            href="#"
            className="text-[18px] text-white underline hover:text-brand-green transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
