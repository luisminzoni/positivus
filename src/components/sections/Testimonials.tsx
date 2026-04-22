import { useState } from 'react';
import { type } from '../../styles/tokens';
import { cn } from '../../lib/utils';
import { SectionHeader } from '../ui/SectionHeader';

const testimonials = [
  {
    quote:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
    name: 'John Smith',
    role: 'Marketing Director at XYZ Corp',
  },
  {
    quote:
      'Positivus transformed our digital presence completely. Their data-driven approach to SEO and PPC has delivered outstanding ROI. The communication is always clear and the results speak for themselves.',
    name: 'Sarah Johnson',
    role: 'CEO at TechStart Inc.',
  },
  {
    quote:
      'From the first consultation to ongoing campaign management, the Positivus team has been exceptional. Our social media engagement has tripled and our brand awareness has never been higher.',
    name: 'Michael Lee',
    role: 'Head of Marketing at BrandCo',
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () =>
    setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="px-4 py-16 md:px-10 lg:px-[100px]">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-10">
        <SectionHeader
          label="Testimonials"
          description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        />

        {/* Testimonial slider – dark background */}
        <div className="bg-brand-dark rounded-card p-[60px] relative overflow-hidden">
          <div className="relative min-h-[220px] flex flex-col justify-between gap-8">
            {/* Quote */}
            <div className="border-2 border-brand-green rounded-card p-[40px] max-w-[850px]">
              <p className={cn(type.body, 'text-white')}>
                "{testimonials[current].quote}"
              </p>
            </div>

            {/* Author */}
            <div className="flex flex-col gap-1 pl-4 border-l-4 border-brand-green">
              <span className={cn(type.h4, 'text-brand-green')}>
                {testimonials[current].name}
              </span>
              <span className="text-[16px] text-white/70">
                {testimonials[current].role}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4 mt-8 justify-end">
            <button
              onClick={prev}
              className="w-[40px] h-[40px] rounded-full border-2 border-white text-white flex items-center justify-center hover:bg-brand-green hover:border-brand-green hover:text-brand-dark transition-colors"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={cn(
                    'w-3 h-3 rounded-full border-2 border-white transition-colors',
                    i === current ? 'bg-brand-green border-brand-green' : 'bg-transparent',
                  )}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-[40px] h-[40px] rounded-full border-2 border-white text-white flex items-center justify-center hover:bg-brand-green hover:border-brand-green hover:text-brand-dark transition-colors"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
