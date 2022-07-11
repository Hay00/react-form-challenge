import React from 'react';
import { CardProps, StyledCard } from './styles';

/**
 * UI Card component for displaying content.
 */
export const Card = ({ children, color = '#fff' }: CardProps) => {
  return <StyledCard color={color}>{children}</StyledCard>;
};
