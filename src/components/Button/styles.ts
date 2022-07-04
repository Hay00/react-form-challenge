import styled from 'styled-components';

interface ButtonProps {
  color?: string;
  size?: string;
}

export const StyledButton = styled.button<ButtonProps>`
  border: none;
  border-radius: 10px;
  padding: 12px;

  // Button sizes
  ${({ size }) => size === 'small' && 'padding: 8px;'}
  ${({ size }) => size === 'large' && 'padding: 16px;'}
        
  background-color: ${(props) => (props.color ? props.color : '#0dbdbd')};
`;

interface ButtonTextProps {
  color?: string;
  size?: string;
}

export const ButtonText = styled.span<ButtonTextProps>`
  color: #fff;
  font-family: 'Nunito', sans-serif;
  font-size: 16px;

  // Font sizes
  ${({ size }) => size === 'small' && 'font-size: 12px;'}
  ${({ size }) => size === 'large' && 'font-size: 20px;'}
`;
