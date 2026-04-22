import { Button } from '../ui/Button';
import { type } from '../../styles/tokens';
import { cn } from '../../lib/utils';

export function CTABanner() {
  return (
    <section className="px-4 py-6 md:px-10 lg:px-[100px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="bg-brand-gray rounded-card border-2 border-brand-dark p-[60px] flex flex-col md:flex-row justify-between items-center gap-10 overflow-hidden relative">
          {/* Text */}
          <div className="flex flex-col gap-6 max-w-[500px] z-10">
            <h2 className={cn(type.h2, 'text-brand-dark')}>
              Let's make things happen
            </h2>
            <p className={cn(type.body, 'text-brand-dark')}>
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <Button variant="dark" size="md" className="self-start">
              Get your free proposal
            </Button>
          </div>

          {/* Illustration Placeholder */}
          <div className="shrink-0 w-full max-w-[360px] aspect-[4/3] rounded-xl bg-white border-2 border-brand-dark flex items-center justify-center z-10">
            <span className="text-brand-dark text-sm font-medium opacity-40">
              [ILLUSTRATION] CTA illustration
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
