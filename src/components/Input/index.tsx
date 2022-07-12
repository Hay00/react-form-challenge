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
  const [error, setError] = React.useState(false);

  function validateInput() {
    const { value, pattern } = rest;
    if (pattern) {
      const regex = new RegExp(pattern);
      setError(!regex.test(value as string));
    }
  }

  return (
    <Container>
      <InputLabel htmlFor={id}>{label + (required ? ' *' : '')}</InputLabel>
      <InputField
        id={id}
        required={required}
        onBlur={validateInput}
        {...rest}
      />
      {error && <ErrorLabel>{label} is Invalid</ErrorLabel>}
    </Container>
  );
};
