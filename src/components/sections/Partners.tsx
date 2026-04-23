import amazonLogo from '../../assets/amazon-logo.svg';
import dribbbleLogo from '../../assets/dribbble-logo.svg';
import hubspotLogo from '../../assets/hubspot-logo.svg';
import notionLogo from '../../assets/notion-logo.svg';
import netflixLogo from '../../assets/netflix-logo.svg';
import zoomLogo from '../../assets/zoom-logo.svg';

const partners = [
  { name: 'Amazon', src: amazonLogo },
  { name: 'Dribbble', src: dribbbleLogo },
  { name: 'HubSpot', src: hubspotLogo },
  { name: 'Notion', src: notionLogo },
  { name: 'Netflix', src: netflixLogo },
  { name: 'Zoom', src: zoomLogo },
];

export function Partners() {
  return (
    <section className="px-4 py-8 md:px-10 lg:px-[100px]">
      <div className="max-w-[1240px] mx-auto">
        <ul className="flex flex-wrap justify-center items-center gap-6 md:gap-[95px]">
          {partners.map(({ name, src }) => (
            <li key={name} className="flex items-center">
              <img src={src} alt={`${name} logo`} className="h-[48px] w-auto object-contain grayscale" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
