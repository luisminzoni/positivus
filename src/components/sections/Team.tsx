import { type } from '../../styles/tokens';
import { cn } from '../../lib/utils';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';

const teamMembers = [
  {
    name: 'John Smith',
    role: 'CEO and Founder',
    bio: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.',
  },
  {
    name: 'Jane Doe',
    role: 'Director of Operations',
    bio: '7+ years of experience in project management and team leadership. Strong organizational and communication skills.',
  },
  {
    name: 'Michael Brown',
    role: 'Senior SEO Specialist',
    bio: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization.',
  },
  {
    name: 'Emily Johnson',
    role: 'PPC Manager',
    bio: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis.',
  },
  {
    name: 'Brian Williams',
    role: 'Social Media Specialist',
    bio: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement.',
  },
  {
    name: 'Sarah Kim',
    role: 'Content Creator',
    bio: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries.',
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
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="rounded-card border-2 border-brand-dark shadow-card bg-white p-[40px] flex flex-col gap-4"
            >
              {/* Photo placeholder */}
              <div className="w-[100px] h-[100px] rounded-full bg-brand-gray border-2 border-brand-dark flex items-center justify-center shrink-0 self-start">
                <span className="text-[11px] text-brand-dark font-medium opacity-40">
                  [PHOTO]
                </span>
              </div>

              {/* Info */}
              <div className="flex flex-col gap-1">
                <h4 className={cn(type.h4, 'text-brand-dark font-medium')}>
                  {member.name}
                </h4>
                <span className="text-[16px] text-brand-dark/70">
                  {member.role}
                </span>
              </div>

              <div className="border-t-2 border-brand-dark pt-4">
                <p className={cn(type.small, 'text-brand-dark')}>
                  {member.bio}
                </p>
              </div>

              {/* [ICON] LinkedIn icon placeholder */}
              <div className="w-[30px] h-[30px] rounded-full bg-brand-dark flex items-center justify-center self-end mt-auto">
                <span className="text-white text-[10px] font-bold">[in]</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <Button variant="outline" size="md">
            See all team
          </Button>
        </div>
      </div>
    </section>
  );
}
