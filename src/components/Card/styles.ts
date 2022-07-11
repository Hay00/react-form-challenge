import styled from 'styled-components';

export interface CardProps {
  /**
   * Content of the card
   */
  children: React.ReactNode;

  /**
   * Background color of the card
   */
  color?: string;
}

export const StyledCard = styled.div<CardProps>`
  background-color: ${({ color }) => (color ? color : '#fff')};
  border-radius: 20px;
  padding: 50px;
  margin: 20px;
  width: 620px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: all 200ms ease-in-out;

  @media (max-width: 768px) {
    width: 100vw;
    height: 100%;
    min-height: 100%;
    margin: 0px;
    padding: 20px;
    border-radius: 0px;
  }
`;
