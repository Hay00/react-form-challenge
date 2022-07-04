import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  @media (max-width: 678px) {
    width: 100%;
    border-radius: 0px;
    margin: 0px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  /* padding: 10px 15px; */
  margin: 0px;
`;

export const Title = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 24px;
`;

interface InputContainerProps {
  marginRight?: string;
}

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  flex-wrap: wrap;
  // Margin if passed in props
  margin-right: ${(props) => props.marginRight || '0px'};
`;

export const SubmitContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  @media (min-width: 768px) {
    margin-top: 100px;
  }
`;
