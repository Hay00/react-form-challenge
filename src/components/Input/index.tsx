import React from 'react';
import { Container, ErrorLabel, InputField, InputLabel } from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ id, label, required, ...rest }) => {
  const [focused, setFocused] = React.useState(false);

  return (
    <Container>
      <InputLabel htmlFor={id}>{label + (required ? ' *' : '')}</InputLabel>
      <InputField
        id={id}
        required={required}
        onBlur={() => setFocused(true)}
        onChange={() => setFocused(true)}
        {...rest}
      />
      <ErrorLabel>{focused ? label + ' is Invalid' : ''}</ErrorLabel>
    </Container>
  );
};

export default Input;
