import React from 'react';

import { ButtonText, StyledButton } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Content of the button
   */
  children: string;

  /**
   * How large should the button be?
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Type of button, in case you want to use on a form
   */
  type?: 'submit' | 'button';

  /**
   * On click handler
   */
  onClick?: () => void;
}

/**
 * UI Button component for interaction.
 */
export const Button = ({ size = 'md', children, ...rest }: ButtonProps) => {
  return (
    <StyledButton size={size} {...rest}>
      <ButtonText size={size}>{children}</ButtonText>
    </StyledButton>
  );
};
