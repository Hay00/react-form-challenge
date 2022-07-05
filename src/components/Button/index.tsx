import React from 'react';

import { ButtonText, StyledButton } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  size?: 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ size = 'md', children, ...rest }) => {
  return (
    <StyledButton size={size} {...rest}>
      <ButtonText size={size}>{children}</ButtonText>
    </StyledButton>
  );
};

export default Button;
