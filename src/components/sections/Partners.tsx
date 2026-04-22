// Partners / Logos strip — grayscale logo placeholders
const partners = [
  'Amazon',
  'Dribbble',
  'HubSpot',
  'Notion',
  'Netflix',
  'Zoom',
];

export function Partners() {
  return (
    <section className="px-4 py-8 md:px-10 lg:px-[100px] border-y-2 border-brand-dark">
      <div className="max-w-[1240px] mx-auto">
        <ul className="flex flex-wrap justify-around items-center gap-6 md:gap-8">
          {partners.map((name) => (
            <li key={name} className="flex items-center">
              {/* [LOGO] {name} logo */}
              <div className="h-[48px] px-4 bg-brand-gray border border-brand-dark/20 rounded flex items-center justify-center opacity-60">
                <span className="text-brand-dark text-[15px] font-medium">
                  [LOGO] {name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
