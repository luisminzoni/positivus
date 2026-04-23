import { type } from '../../styles/tokens';
import { cn } from '../../lib/utils';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import johnImg from '../../assets/john-img.svg';
import janeImg from '../../assets/jane-img.svg';
import michaelImg from '../../assets/michael-img.svg';
import emilyImg from '../../assets/emily-img.svg';
import brianImg from '../../assets/brian-img.svg';
import sarahImg from '../../assets/sarah-img.svg';
import linkedinImg from '../../assets/linkedin-img.svg';

const teamMembers = [
  {
    name: 'John Smith',
    role: 'CEO and Founder',
    bio: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.',
    img: johnImg,
  },
  {
    name: 'Jane Doe',
    role: 'Director of Operations',
    bio: '7+ years of experience in project management and team leadership. Strong organizational and communication skills.',
    img: janeImg,
  },
  {
    name: 'Michael Brown',
    role: 'Senior SEO Specialist',
    bio: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization.',
    img: michaelImg,
  },
  {
    name: 'Emily Johnson',
    role: 'PPC Manager',
    bio: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis.',
    img: emilyImg,
  },
  {
    name: 'Brian Williams',
    role: 'Social Media Specialist',
    bio: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement.',
    img: brianImg,
  },
  {
    name: 'Sarah Kim',
    role: 'Content Creator',
    bio: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries.',
    img: sarahImg,
  },
];

export function Team() {
  return (
    <section className="px-4 py-16 md:px-10 lg:px-[100px]">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <SectionHeader
            label="Team"
            description="Meet the skilled and experienced team behind our successful digital marketing strategies"
            descriptionClassName="max-w-[473px]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              style={{ boxShadow: '0px 4px 0px 0px #191A23' }}
              className="rounded-card border border-brand-dark bg-white p-[40px] flex flex-col gap-4"
            >
              {/* Top row: photo + name/role + linkedin */}
              <div className="flex items-start gap-4">
                <img src={member.img} alt={member.name} className="w-[100px] h-[100px] rounded-full object-cover shrink-0" />
                <div className="flex flex-1 items-start justify-between">
                  <div className="flex flex-col gap-1 justify-end h-[100px]">
                    <h4 className={cn(type.h4, 'text-brand-dark font-medium')}>
                      {member.name}
                    </h4>
                    <span className="text-[16px] text-brand-dark/70">
                      {member.role}
                    </span>
                  </div>
                  <a
                    href="https://linkedin.com"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={linkedinImg} alt="LinkedIn" className="w-[30px] h-[30px]" />
                  </a>
                </div>
              </div>

              <div className="border-t-2 border-brand-dark pt-4">
                <p className={cn(type.small, 'text-brand-dark')}>
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <Button variant="dark" size="md" className="w-[269px] h-[68px] hover:bg-white hover:text-brand-dark">
            See all team
          </Button>
        </div>
      </div>
    </section>
  );
}
