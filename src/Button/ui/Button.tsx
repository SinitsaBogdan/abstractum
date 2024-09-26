import React, { ReactNode } from 'react';

import '../styles/Button.css';

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  children: ReactNode;
  /** Is button disabled */
  isDisebled?: boolean;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = true,
  size = 'medium',
  backgroundColor,
  children,
  isDisebled = false,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'button--primary' : 'button--success';
  return (
    <button
      disabled={isDisebled}
      type="button"
      className={['button', `button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {children}
    </button>
  );
};
