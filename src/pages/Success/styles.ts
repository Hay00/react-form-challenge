import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  @media (max-width: 768px) {
    border-radius: 0px;
    margin: 0px;
  }
`;

export const Title = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 24px;
  text-align: center;
  margin: 15px 0px 30px;

  @media (min-width: 768px) {
    margin: 100px 0px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;

  @media (min-width: 768px) {
    flex-direction: column;
  }
`;
