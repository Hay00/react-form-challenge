import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  background-color: #fff;
  border-radius: 20px;
  padding: 50px;
  margin: 20px;
  max-width: 620px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: all 200ms ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0px;
    padding: 20px;
    border-radius: 0px;
  }
`;
