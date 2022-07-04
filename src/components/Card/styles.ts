import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 50px;
  margin: 20px;
  width: 620px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: all 200ms ease-in-out;

  @media (max-width: 768px) {
    width: 100vw;
    margin: 0px;
    border-radius: 0px;
  }
`;
