import type React from 'react';

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'sm' | 'md' | 'xl';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  isLoading?: boolean;
  children: React.ReactNode;
}

interface ButtonAsButton extends BaseButtonProps {
  as?: 'button';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  href?: never;
  external?: never;
}

interface ButtonAsLink extends BaseButtonProps {
  as: 'a';
  href: string;
  external?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  type?: never;
  disabled?: never;
}

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Generates class names for button styling
 */
const getButtonClasses = (variant: ButtonVariant = 'primary', size: ButtonSize = 'md', className = ''): string => {
  // Base classes for all buttons
  const baseClasses =
    'font-semibold rounded-lg transition-all duration-300 flex items-center justify-center focus-visible:ring-2 ring-mint-400';

  // Variant classes - using object lookup instead of switch statement
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
  };
  const variantClass = variantClasses[variant] || 'btn-primary';

  // Size classes - using object lookup instead of switch statement
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-6 py-3', // Default size is already in the CSS classes
    xl: 'px-8 py-4 text-xl',
  };
  const sizeClass = sizeClasses[size] || '';

  return [baseClasses, variantClass, sizeClass, className].filter(Boolean).join(' ');
};

export const Button: React.FC<ButtonProps> = (props) => {
  const { variant = 'primary', size = 'md', className = '', isLoading = false, children } = props;

  const classes = getButtonClasses(variant, size, className);

  // Loading spinner component
  const loadingSpinner = <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-navy" />;

  // Button content
  const content = isLoading ? loadingSpinner : children;

  if (props.as === 'a') {
    const {
      external,
      href,
      variant: _,
      size: __,
      className: ___,
      isLoading: ____,
      children: _____,
      ...anchorRest
    } = props;
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
        {...anchorRest}
      >
        {content}
      </a>
    );
  }

  // It's a button
  const {
    type = 'button',
    variant: _,
    size: __,
    className: ___,
    isLoading: ____,
    children: _____,
    ...buttonRest
  } = props as ButtonAsButton;
  return (
    <button className={classes} type={type} {...buttonRest}>
      {content}
    </button>
  );
};

export default Button;
