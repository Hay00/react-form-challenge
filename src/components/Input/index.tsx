import React from 'react';
import { Container, ErrorLabel, InputField, InputLabel } from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Input id
   */
  id: string;

  /**
   * Input name
   */
  name: string;

  /**
   * Input label
   */
  label: string;

  /**
   * Is the input required?
   */
  required?: boolean;
}

/**
 * UI Input component for interaction.
 */
export const Input: React.FC<InputProps> = ({
  id,
  label,
  required = false,
  ...rest
}) => {
  const [focused, setFocused] = React.useState(false);

  return (
    <Container>
      <InputLabel htmlFor={id}>{label + (required ? ' *' : '')}</InputLabel>
      <InputField
        id={id}
        required={required}
        onBlur={() => setFocused(true)}
        {...rest}
      />
      <ErrorLabel>{focused ? label + ' is Invalid' : ''}</ErrorLabel>
    </Container>
  );
};
