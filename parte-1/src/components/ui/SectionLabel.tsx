import { cn } from '../../lib/utils';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'green' | 'dark' | 'gray';
}

const variantClasses = {
  green: 'bg-brand-green text-brand-dark',
  dark: 'bg-brand-dark text-white',
  gray: 'bg-brand-gray text-brand-dark',
};

export function SectionLabel({
  children,
  className,
  variant = 'green',
}: SectionLabelProps) {
  return (
    <span
      className={cn(
        'inline-block rounded-tag px-[7px] py-[2px] text-[18px] font-medium',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
