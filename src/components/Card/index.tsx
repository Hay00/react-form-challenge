import React from 'react';
import { Container } from './styles';

// Interface
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
}

const Card: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Card;
