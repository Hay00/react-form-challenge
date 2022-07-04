import styled from 'styled-components';

export const Container = styled.div`
  /* width: 100%; */
  /* max-width: 520px; */
  /* min-width: 165px; */
  flex-grow: 1;
  float: left;
  margin-right: 20px;
  margin-bottom: 30px;
`;

export const InputLabel = styled.label`
  display: block;
  color: #aaa;
  margin-bottom: 5px;
  font-size: 14px;
`;

// Invisible label until input has error
export const ErrorLabel = styled.span`
  font-family: 'Nunito';
  font-style: normal;
  font-size: 14px;
  margin-top: 8px;
  color: #ff4b4b;
  display: none;
`;

export const InputField = styled.input`
  display: block;
  width: 100%;
  font-size: 16px;
  padding: 8px;
  border: 2px solid #aaa;
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: #0dbdbd;
    transition: 200ms ease-in-out;
  }

  // Show error label if input is invalid
  &:invalid + ${ErrorLabel} {
    display: block;
  }
`;
