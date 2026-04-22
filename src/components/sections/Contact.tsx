import { useState } from 'react';
import { type } from '../../styles/tokens';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';

type ContactTab = 'say-hi' | 'get-quote';

export function Contact() {
  const [tab, setTab] = useState<ContactTab>('say-hi');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend — form submission placeholder
    alert('Message sent! (demo only)');
  };

  return (
    <section id="contact" className="px-4 py-16 md:px-10 lg:px-[100px]">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-10">
        {/* Section title */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <span className="inline-block bg-brand-green rounded-tag px-[7px] py-[2px]">
              <span className={cn(type.h2, 'text-brand-dark')}>Contact Us</span>
            </span>
          </div>
          <p className={cn(type.body, 'text-brand-dark max-w-[580px]')}>
            Connect with Us: Let's Discuss Your Digital Marketing Needs
          </p>
        </div>

        <div className="bg-brand-gray rounded-card border-2 border-brand-dark p-[60px] grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Tabs */}
            <div className="flex gap-6">
              {(['say-hi', 'get-quote'] as const).map((t) => (
                <label key={t} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="contact-tab"
                    value={t}
                    checked={tab === t}
                    onChange={() => setTab(t)}
                    className="w-4 h-4 accent-brand-dark"
                  />
                  <span className={cn(type.body, 'text-brand-dark')}>
                    {t === 'say-hi' ? 'Say Hi' : 'Get a Quote'}
                  </span>
                </label>
              ))}
            </div>

            {/* Name */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-[16px] font-medium text-brand-dark"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border-2 border-brand-dark rounded-pill px-6 py-4 text-[18px] bg-white focus:outline-none focus:ring-2 focus:ring-brand-green"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-[16px] font-medium text-brand-dark"
              >
                Email*
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-2 border-brand-dark rounded-pill px-6 py-4 text-[18px] bg-white focus:outline-none focus:ring-2 focus:ring-brand-green"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-[16px] font-medium text-brand-dark"
              >
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border-2 border-brand-dark rounded-[14px] px-6 py-4 text-[18px] bg-white focus:outline-none focus:ring-2 focus:ring-brand-green resize-none"
              />
            </div>

            <Button variant="dark" size="md" type="submit" className="self-start">
              Send Message
            </Button>
          </form>

          {/* Illustration Placeholder */}
          <div className="w-full aspect-[4/3] rounded-xl bg-white border-2 border-brand-dark flex items-center justify-center">
            <span className="text-brand-dark text-sm font-medium opacity-40">
              [ILLUSTRATION] Contact illustration
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
