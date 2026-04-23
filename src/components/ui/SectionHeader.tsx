import { cn } from '../../lib/utils';
import { SectionLabel } from './SectionLabel';
import { type } from '../../styles/tokens';

interface SectionHeaderProps {
  label: string;
  description?: string;
  className?: string;
  descriptionClassName?: string;
  align?: 'left' | 'center';
  labelVariant?: 'green' | 'dark' | 'gray';
  light?: boolean;
}

export function SectionHeader({
  label,
  description,
  className,
  descriptionClassName,
  align = 'left',
  labelVariant = 'green',
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 items-center text-center sm:flex-row sm:items-center sm:text-left sm:gap-[40px]',
        align === 'center' && 'sm:flex-col sm:text-center sm:items-center',
        className,
      )}
    >
      <SectionLabel variant={labelVariant}>
        <span className={cn(type.h2, light ? 'text-white' : 'text-brand-dark')}>
          {label}
        </span>
      </SectionLabel>

      {description && (
        <p
          className={cn(
            type.body,
            'max-w-[580px]',
            light ? 'text-white' : 'text-brand-dark',
            descriptionClassName,
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
