import { useState } from 'react';
import { type } from '../../styles/tokens';
import { cn } from '../../lib/utils';
import { SectionHeader } from '../ui/SectionHeader';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    content:
      'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
  },
  {
    number: '02',
    title: 'Research and Strategy Development',
    content:
      'We conduct in-depth research into your industry, competitors, and target audience. Using these insights, we craft a customized strategy aligned with your business goals.',
  },
  {
    number: '03',
    title: 'Implementation',
    content:
      'Our team executes the strategy across the agreed channels — whether SEO, paid ads, social media, or content — with precision and attention to detail.',
  },
  {
    number: '04',
    title: 'Monitoring and Optimization',
    content:
      'We continuously monitor campaign performance, making data-driven adjustments to maximize results and return on investment.',
  },
  {
    number: '05',
    title: 'Reporting and Communication',
    content:
      'You receive transparent, regular reports on key metrics and insights, keeping you fully informed on progress and next steps.',
  },
  {
    number: '06',
    title: 'Continual Improvement',
    content:
      'Digital marketing is an ongoing process. We continuously refine our approach based on results, trends, and your evolving business goals.',
  },
];

export function WorkingProcess() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-4 py-16 md:px-10 lg:px-[100px]">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-10">
        <SectionHeader
          label="Our Working Process"
          description="Step-by-Step Guide to Achieving Your Business Goals"
        />

        <div className="flex flex-col gap-4">
          {steps.map((step, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={step.number}
                className={cn(
                  'rounded-card border-2 border-brand-dark shadow-card px-[60px] py-[40px] transition-colors duration-200',
                  isOpen ? 'bg-brand-green' : 'bg-brand-gray',
                )}
              >
                <button
                  className="w-full flex items-center justify-between gap-6 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-6">
                    <span className={cn(type.h2, 'text-brand-dark shrink-0')}>
                      {step.number}
                    </span>
                    <span className={cn(type.h3, 'text-brand-dark')}>
                      {step.title}
                    </span>
                  </div>

                  {/* Toggle icon */}
                  <div
                    className={cn(
                      'w-[58px] h-[58px] rounded-full border-2 border-brand-dark flex items-center justify-center shrink-0 text-[24px] transition-colors',
                      isOpen
                        ? 'bg-brand-gray text-brand-dark'
                        : 'bg-white text-brand-dark',
                    )}
                    aria-hidden
                  >
                    {isOpen ? '−' : '+'}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-6 border-t-2 border-brand-dark pt-6">
                    <p className={cn(type.body, 'text-brand-dark')}>
                      {step.content}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
