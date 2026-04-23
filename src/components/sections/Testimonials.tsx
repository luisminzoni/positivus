import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaCarouselType } from 'embla-carousel';
import { type } from '../../styles/tokens';
import { cn } from '../../lib/utils';
import { SectionHeader } from '../ui/SectionHeader';
import arrowRight from '../../assets/arrow-right-white.svg';
import selectedPagination from '../../assets/selected-pagination-green.svg';
import unselectedPagination from '../../assets/unselected-pagination-white.svg';

const testimonials = [
  {
    quote:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
    name: 'John Smith',
    role: 'Marketing Director at XYZ Corp',
  },
  {
    quote:
      'Positivus transformed our digital presence completely. Their data-driven approach to SEO and PPC has delivered outstanding ROI. From keyword research and ad copy to landing page optimisation, every detail is covered. The communication is always clear, reporting is transparent, and the results speak for themselves. We have seen a 3× increase in qualified leads since partnering with them.',
    name: 'Sarah Johnson',
    role: 'CEO at TechStart Inc.',
  },
  {
    quote:
      'From the first consultation to ongoing campaign management, the Positivus team has been exceptional. They took the time to understand our brand voice and audience before executing anything. Our social media engagement has tripled, our brand awareness has never been higher, and the content they produce consistently drives real conversions. Highly recommended for any company serious about digital growth.',
    name: 'Michael Lee',
    role: 'Head of Marketing at BrandCo',
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: false,
    containScroll: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="px-4 py-16 md:px-10 lg:px-[100px]">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-10">
        <SectionHeader
          label="Testimonials"
          description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
          descriptionClassName="max-w-[473px]"
        />

        {/* Dark card */}
        <div className="bg-brand-dark rounded-card overflow-hidden md:h-[625px] md:flex md:flex-col">

          {/* ── Embla viewport – takes remaining height ── */}
          <div ref={emblaRef} className="overflow-hidden md:flex-1">
            {/* Embla container: flex row */}
            <div className="flex">
              {testimonials.map((testimonial, i) => (
                <div
                  key={i}
                  /* Each slide: fixed 680 px width, horizontal padding creates the 40 px gap */
                  className="flex-[0_0_85%] min-w-0 md:flex-[0_0_680px] px-[20px] flex flex-col pt-[60px]"
                >
                  {/* ── Speech bubble ── */}
                  <div className="relative border-2 border-brand-green rounded-[45px] p-[40px] bg-brand-dark">
                    <p className={cn(type.body, 'text-white')}>
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    {/*
                      Tail: rotated square technique.
                      - 20×20 square at bottom: -11px (half its height) so the top half
                        is inside the bubble, covering the bottom border line.
                      - background matches bubble (#191A23) → no fill visible
                      - only border-left + border-bottom set → the two sides that face
                        outward form the "V" shape of the speech tail
                      - left: 40px aligns the tail over the author's name start
                    */}
                    <span
                      style={{
                        position: 'absolute',
                        bottom: -18,
                        left: 40,
                        width: 35,
                        height: 35,
                        background: '#191A23',
                        borderLeft: '2px solid #B9FF66',
                        borderBottom: '2px solid #B9FF66',
                        transform: 'rotate(-44deg)',
                        zIndex: 2,
                        display: 'block',
                      }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* ── Author ── */}
                  <div className="flex flex-col gap-1 mt-[40px] ml-[40px] mb-[40px] pt-[2px]">
                    <span className={cn(type.h4, 'text-brand-green')}>
                      {testimonial.name}
                    </span>
                    <span className="text-[16px] text-white/70">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Navigation ── */}
          <div className="flex items-center justify-center pt-[30px] pb-[40px] shrink-0">
            {/* Left arrow – 20 × 20 */}
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className={cn(
                'transition-opacity shrink-0',
                !canScrollPrev ? 'opacity-30 cursor-default' : 'hover:opacity-70',
              )}
              aria-label="Previous testimonial"
            >
              <img src={arrowRight} alt="Previous" className="w-[20px] h-[20px] rotate-180" />
            </button>

            {/* Pagination dots – 209 px gap from each arrow */}
            <div className="flex gap-2 mx-[40px] md:mx-[209px]">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                >
                  <img
                    src={i === selectedIndex ? selectedPagination : unselectedPagination}
                    alt=""
                    className="w-[16px] h-[16px]"
                  />
                </button>
              ))}
            </div>

            {/* Right arrow – 20 × 20 */}
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canScrollNext}
              className={cn(
                'transition-opacity shrink-0',
                !canScrollNext ? 'opacity-30 cursor-default' : 'hover:opacity-70',
              )}
              aria-label="Next testimonial"
            >
              <img src={arrowRight} alt="Next" className="w-[20px] h-[20px]" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
