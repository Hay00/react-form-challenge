import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

interface ButtonProps {
  color?: string;
  size?: 'sm' | 'md' | 'lg';
}

// Size styles for buttons
const sizes = {
  lg: css`
    padding: 16px;
    @media (min-width: 768px) {
      padding: 79.5px 39.5px;
    }
  `,
  md: css`
    padding: 12px;
  `,
  sm: css`
    padding: 8px;
  `,
};

const fonts = {
  lg: css`
    font-size: 36px;
  `,
  md: css`
    font-size: 16px;
  `,
  sm: css`
    font-size: 12px;
  `,
};

export const StyledButton = styled.button<ButtonProps>`
  border: none;
  border-radius: 10px;
  margin: 5px;
  transition: 0.2s all;

  // Button sizes
  ${({ size }) => sizes[size || 'md']}

  background-color: ${({ color }) => (color ? color : '#0dbdbd')};

  @media (max-width: 768px) {
    width: 100%;
    margin: 32px 0px;
  }
  // Click animation
  &:active {
    transform: scale(0.99);
    opacity: 0.95;
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.24);
  }
`;

export const ButtonText = styled.span<ButtonProps>`
  color: #fff;
  font-family: 'Nunito', sans-serif;
  font-size: 16px;

  // Font sizes
  ${({ size }) => fonts[size || 'md']}
`;
