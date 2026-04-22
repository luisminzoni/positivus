import { type } from '../../styles/tokens';
import { cn } from '../../lib/utils';
import { SectionHeader } from '../ui/SectionHeader';
import servicesImg1 from '../../assets/services-img-1.svg';
import servicesImg2 from '../../assets/services-img-2.svg';
import servicesImg3 from '../../assets/services-img-3.svg';
import servicesImg4 from '../../assets/services-img-4.svg';
import servicesImg5 from '../../assets/services-img-5.svg';
import servicesImg6 from '../../assets/services-img-6.svg';
import greenArrowCircle from '../../assets/green-arrow-circle.svg';
import whiteArrowCircle from '../../assets/white-arrow-circle.svg';

type CardVariant = 'gray' | 'green' | 'dark';

interface ServiceCard {
  title: string;
  variant: CardVariant;
  img: string;
}

const services: ServiceCard[] = [
  { title: 'Search engine\noptimization', variant: 'gray', img: servicesImg1 },
  { title: 'Pay-per-click\nadvertising', variant: 'green', img: servicesImg2 },
  { title: 'Social Media\nMarketing', variant: 'dark', img: servicesImg3 },
  { title: 'Email\nMarketing', variant: 'gray', img: servicesImg4 },
  { title: 'Content\nCreation', variant: 'green', img: servicesImg5 },
  { title: 'Analytics and\nTracking', variant: 'dark', img: servicesImg6 },
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

              {/* Illustration + Learn more */}
              <div className="flex flex-col items-end gap-4">
                <img src={service.img} alt={service.title} className="w-[80px] h-[80px] object-contain" />

                {/* Learn more */}
                <a
                  href="#"
                  className={cn(
                    'flex items-center gap-2 text-[18px] font-medium',
                    cardText[service.variant],
                  )}
                >
                  <img
                    src={service.variant === 'dark' ? whiteArrowCircle : greenArrowCircle}
                    alt="Learn more"
                    className="w-[41px] h-[41px] shrink-0"
                  />
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
