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
  titleBg: 'green' | 'white';
}

const services: ServiceCard[] = [
  { title: 'Search engine\noptimization',  variant: 'gray',  img: servicesImg1, titleBg: 'green' },
  { title: 'Pay-per-click\nadvertising',   variant: 'green', img: servicesImg2, titleBg: 'white' },
  { title: 'Social Media\nMarketing',      variant: 'dark',  img: servicesImg3, titleBg: 'white' },
  { title: 'Email\nMarketing',             variant: 'gray',  img: servicesImg4, titleBg: 'green' },
  { title: 'Content\nCreation',            variant: 'green', img: servicesImg5, titleBg: 'white' },
  { title: 'Analytics and\nTracking',      variant: 'dark',  img: servicesImg6, titleBg: 'green' },
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
              style={{ boxShadow: '0px 4px 0px 0px #191A23' }}
              className={cn(
                'rounded-card border-2 border-brand-dark p-[50px] flex justify-between items-stretch min-h-[310px] gap-4',
                cardBg[service.variant],
              )}
            >
              {/* Left: Title + Learn more */}
              <div className="flex flex-col justify-between gap-6 flex-1">
                <div className="flex flex-col gap-1">
                  {service.title.split('\n').map((line, i) => (
                    <h3
                      key={i}
                      className={cn(
                        type.h3,
                        'whitespace-nowrap inline-block self-start rounded-tag px-[7px] py-[2px]',
                        service.titleBg === 'green'
                          ? 'bg-brand-green text-brand-dark'
                          : 'bg-white text-brand-dark',
                      )}
                    >
                      {line}
                    </h3>
                  ))}
                </div>

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

              {/* Right: Image */}
              <div className="flex items-end">
                <img src={service.img} alt={service.title} className="w-[210px] h-[170px] object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
