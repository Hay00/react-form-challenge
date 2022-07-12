import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 38px;
`;

export const InputLabel = styled.label`
  display: block;
  color: #aaa;
  font-size: 14px;
`;

// Invisible label until input has error
export const ErrorLabel = styled.span`
  position: absolute;
  font-family: 'Nunito';
  font-style: normal;
  font-size: 14px;
  margin-top: 8px;
  color: #ff4b4b;
  display: block;
`;

export const InputField = styled.input`
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
