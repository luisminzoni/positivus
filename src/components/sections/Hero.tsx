import { Button } from '../ui/Button';
import { type } from '../../styles/tokens';
import { cn } from '../../lib/utils';

export function Hero() {
  return (
    <section className="px-4 py-10 md:px-10 lg:px-[100px] md:py-16">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Text Content */}
        <div className="flex flex-col gap-8">
          <h1 className={cn(type.h1, 'text-brand-dark')}>
            Navigating the digital landscape for success
          </h1>
          <p className={cn(type.body, 'text-brand-dark max-w-[480px]')}>
            Our digital marketing agency helps businesses grow and succeed online
            through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <div>
            <Button variant="dark" size="md">
              Book a consultation
            </Button>
          </div>
        </div>

        {/* Right: Illustration Placeholder */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-[530px] aspect-square rounded-2xl bg-brand-gray border-2 border-brand-dark flex items-center justify-center">
            <span className="text-brand-dark text-lg font-medium opacity-40">
              [ILLUSTRATION] Hero illustration
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
