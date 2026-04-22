import { type ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type Variant = 'primary' | 'outline' | 'dark';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: 'sm' | 'md' | 'lg';
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-brand-green text-brand-dark hover:bg-brand-dark hover:text-brand-green border-2 border-brand-dark',
  outline:
    'bg-transparent text-brand-dark border-2 border-brand-dark hover:bg-brand-dark hover:text-white',
  dark: 'bg-brand-dark text-white border-2 border-brand-dark hover:bg-transparent hover:text-brand-dark',
};

const sizeClasses = {
  sm: 'px-5 py-2 text-[16px]',
  md: 'px-7 py-4 text-[18px] md:text-[20px]',
  lg: 'px-9 py-5 text-[20px]',
};

export function Button({
  variant = 'outline',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-pill font-medium transition-colors duration-200 cursor-pointer',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
