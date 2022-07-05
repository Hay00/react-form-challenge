import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DateInput = styled(DatePicker)`
  display: block;
  width: 100%;
  font-size: 16px;
  padding: 8px;
  border: 2px solid #aaa;
  border-radius: 4px;
  font-family: 'Nunito';
  font-style: normal;

  &:focus {
    outline: none;
    border-color: #0dbdbd;
    transition: 200ms ease-in-out;
  }
`;