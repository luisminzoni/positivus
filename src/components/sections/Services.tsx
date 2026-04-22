import { type } from '../../styles/tokens';
import { cn } from '../../lib/utils';
import { SectionHeader } from '../ui/SectionHeader';

type CardVariant = 'gray' | 'green' | 'dark';

interface ServiceCard {
  title: string;
  variant: CardVariant;
}

const services: ServiceCard[] = [
  { title: 'Search engine\noptimization', variant: 'gray' },
  { title: 'Pay-per-click\nadvertising', variant: 'green' },
  { title: 'Social Media\nMarketing', variant: 'dark' },
  { title: 'Email\nMarketing', variant: 'gray' },
  { title: 'Content\nCreation', variant: 'green' },
  { title: 'Analytics and\nTracking', variant: 'dark' },
];

const cardBg: Record<CardVariant, string> = {
  gray: 'bg-brand-gray',
  green: 'bg-brand-green',
  dark: 'bg-brand-dark',
};

const cardText: Record<CardVariant, string> = {
  gray: 'text-brand-dark',
  green: 'text-brand-dark',
  dark: 'text-white',
};

const arrowColor: Record<CardVariant, string> = {
  gray: 'bg-brand-dark text-white',
  green: 'bg-brand-dark text-white',
  dark: 'bg-brand-green text-brand-dark',
};

export function Services() {
  return (
    <section
      id="services"
      className="px-4 py-16 md:px-10 lg:px-[100px]"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col gap-10">
        <SectionHeader
          label="Services"
          description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
          {services.map((service) => (
            <div
              key={service.title}
              className={cn(
                'rounded-card border-2 border-brand-dark shadow-card p-[50px] flex justify-between items-end min-h-[240px] gap-4',
                cardBg[service.variant],
              )}
            >
              {/* Title */}
              <h3
                className={cn(
                  type.h3,
                  cardText[service.variant],
                  'whitespace-pre-line max-w-[220px]',
                )}
              >
                {service.title}
              </h3>

              {/* Illustration placeholder + Learn more */}
              <div className="flex flex-col items-end gap-4">
                {/* [ILLUSTRATION] Service illustration */}
                <div
                  className={cn(
                    'w-[80px] h-[80px] rounded-full border-2 border-brand-dark flex items-center justify-center text-[10px] font-medium opacity-40',
                    cardText[service.variant],
                  )}
                >
                  [IMG]
                </div>

                {/* Learn more */}
                <a
                  href="#"
                  className={cn(
                    'flex items-center gap-2 text-[18px] font-medium',
                    cardText[service.variant],
                  )}
                >
                  <span
                    className={cn(
                      'w-[41px] h-[41px] rounded-full flex items-center justify-center shrink-0',
                      arrowColor[service.variant],
                    )}
                  >
                    {/* [ICON] Arrow icon */}
                    →
                  </span>
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
