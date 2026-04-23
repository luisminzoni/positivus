import useEmblaCarousel from 'embla-carousel-react';
import { type } from '../../styles/tokens';
import { cn } from '../../lib/utils';
import { SectionHeader } from '../ui/SectionHeader';
import greenArrowUp from '../../assets/green-arrow-up.svg';

const caseStudies = [
  {
    description:
      'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
  },
  {
    description:
      'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
  },
  {
    description:
      'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
  },
];

export function CaseStudies() {
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
  });

  return (
    <section className="px-4 py-16 md:px-10 lg:px-[100px]">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-10">
        <SectionHeader
          label="Case Studies"
          description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        />

        {/* ── Desktop: static 3-col grid ── */}
        <div className="hidden md:grid md:grid-cols-3 bg-brand-dark rounded-card p-[60px] gap-0 divide-x-2 divide-white/20">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-[20px] px-[60px] first:pl-0 last:pr-0"
            >
              <p className={cn(type.body, 'text-white')}>{study.description}</p>
              <a href="#" className="flex items-center gap-2 text-brand-green text-[18px] font-medium">
                Learn more
                <img src={greenArrowUp} alt="" className="w-[10px] h-[10px]" />
              </a>
            </div>
          ))}
        </div>

        {/* ── Mobile: Embla align carousel ── */}
        <div className="md:hidden overflow-hidden" ref={emblaRef}>
          <div className="flex gap-[16px]">
            {caseStudies.map((study, idx) => (
              <div
                key={idx}
                className="flex-[0_0_82%] min-w-0 bg-brand-dark border-2 border-white/20 rounded-card p-[30px] flex flex-col gap-[20px]"
              >
                <p className={cn(type.body, 'text-white')}>{study.description}</p>
                <a href="#" className="flex items-center gap-2 text-brand-green text-[18px] font-medium">
                  Learn more
                  <img src={greenArrowUp} alt="" className="w-[10px] h-[10px]" />
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
