import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { IconType } from 'react-icons';
import { FiMail, FiSend, FiUser } from 'react-icons/fi';
import { IoEnterOutline } from 'react-icons/io5';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: IconType;
  variant?: 'standard' | 'secondary';
}

export default function Button({
  children,
  icon: Icon,
  variant = 'standard',
  type = 'button',
  className = '',
  ...props
}: ButtonProps) {
  // Apply variant-specific styles if needed

  const variantStyles = {
    standard: 'bg-cta text-background hover:bg-accent-gradient',
    secondary: 'bg-secondary text-background hover:bg-secondary-dark',
  };

  return (
    <button
      type={type || 'button'}
      className={`pl-5 pr-6 py-3 rounded-lg inline-flex items-center gap-2 cursor-pointer transition duration-300 ease-in-out ${variantStyles[variant]}`}
      {...props}
    >
      {Icon && <Icon className="size-5 flex-shrink-0" />}
      {children}
    </button>
  );
}
// Export common icons for convenience
export { FiUser, FiMail, FiSend, IoEnterOutline };
