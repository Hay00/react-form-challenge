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

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 0px;
`;

export const Title = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 24px;
  text-align: center;
  margin: 15px 0px 30px;
`;

export const InputGroup = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

interface InputContainerProps {
  size?: 'large';
}

export const InputContainer = styled.div<InputContainerProps>`
  @media (min-width: 768px) {
    width: ${(props) => (props.size === 'large' ? '330px' : 'auto')};
    margin-right: ${(props) => (props.size === 'large' ? '22px' : '0px')};
  }

  @media (max-width: 678px) {
    width: 100%;
    border-radius: 0px;
    margin: 0px;
  }
`;

export const SubmitContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  @media (min-width: 768px) {
    margin-top: 100px;
  }
`;
