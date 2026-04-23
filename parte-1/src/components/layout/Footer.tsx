import { useState } from 'react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import { type } from '../../styles/tokens';
import positivusLogo from '../../assets/positivus-logo-white.svg';
import linkedinIcon from '../../assets/linkedin-icon-white.svg';
import facebookIcon from '../../assets/facebook-icon-white.svg';
import twitterIcon from '../../assets/twitter-icon-white.svg';

const navLinks = [
  { label: 'About us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: linkedinIcon },
  { label: 'Facebook', href: 'https://www.facebook.com', icon: facebookIcon },
  { label: 'Twitter',  href: 'https://www.twitter.com',  icon: twitterIcon },
];

export function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="pb-0 pt-[55px] md:px-4 md:px-10 lg:px-[100px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="bg-brand-dark md:rounded-t-[45px] px-[25px] md:px-[60px] py-[55px] flex flex-col gap-[50px]">
          {/* Top row */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-6 md:gap-10">
            {/* Logo */}
            <a href="/" className="shrink-0">
              <img src={positivusLogo} alt="Positivus" className="h-[36px] w-auto" />
            </a>

            {/* Nav – one per line on mobile, row on desktop */}
            <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
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

            {/* Social icons – desktop only in this row */}
            <div className="hidden md:flex gap-3">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img src={icon} alt={label} className="w-[30px] h-[30px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <hr className="border-white/20" />

          {/* Middle row: contact + subscribe */}
          <div className="flex flex-col md:flex-row justify-between gap-10 items-center md:items-start">
            {/* Contact info */}
            <div className="flex flex-col items-center md:items-start">
              <span className="inline-block bg-brand-green rounded-[7px] px-[7px] py-[2px] mb-[27px]">
                <h4 className={cn(type.h4, 'text-brand-dark')}>Contact us:</h4>
              </span>
              <ul className="flex flex-col gap-[20px] items-center md:items-start text-center md:text-left">
                <li className="text-[18px] text-white">
                  Email:{' '}
                  <a href="mailto:info@positivus.com" className="underline hover:text-brand-green">
                    info@positivus.com
                  </a>
                </li>
                <li className="text-[18px] text-white">
                  Phone:{' '}
                  <a href="tel:5555678901" className="underline hover:text-brand-green">
                    555-567-8901
                  </a>
                </li>
                <li className="text-[18px] text-white">
                  Address: 1234 Main St, Moonstone City, Stardust State 12345
                </li>
              </ul>
            </div>

            {/* Subscribe form */}
            <div className="rounded-[14px] p-[38px] flex items-center justify-center w-full md:w-[634px] md:h-[184px]" style={{background:'#292A32'}}>
              <form
                className="flex flex-col md:flex-row gap-3 items-center w-full"
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
                  className="w-full md:w-[285px] h-[67px] border border-white/20 rounded-[14px] px-5 text-[16px] text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-brand-green"
                  style={{background:'#292A32'}}
                />
                <Button variant="primary" size="md" type="submit" className="w-full md:w-[249px] h-[68px]">
                  Subscribe to news
                </Button>
              </form>
            </div>
          </div>

          {/* Social icons – mobile only, below subscribe card */}
          <div className="flex md:hidden justify-center gap-3">
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img src={icon} alt={label} className="w-[30px] h-[30px]" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <hr className="border-white/20" />

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-[40px]">
            <p className="text-[18px] text-white">
              © 2023 Positivus. All Rights Reserved.
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[18px] text-white underline hover:text-brand-green transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
