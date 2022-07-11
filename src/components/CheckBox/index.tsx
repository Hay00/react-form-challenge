import React from 'react';
import {
  Container,
  HiddenCheckbox,
  StyledCheckbox,
  Icon,
  Label,
} from './styles';

interface CheckBoxProps {
  /**
   * Is the checkbox checked?
   */
  checked: boolean;

  /**
   * Make the checkbox required
   */
  required?: boolean;

  /**
   * On change handler
   */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Any other props to pass to the checkbox
   */
  props?: any[];

  /**
   * Label for the checkbox
   */
  children?: React.ReactNode;
}

export const CheckBox = ({
  checked,
  required = false,
  onChange,
  children,
  ...rest
}: CheckBoxProps) => {
  return (
    <Container>
      <HiddenCheckbox
        required={required}
        checked={checked}
        onChange={onChange}
        {...rest}
      />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
      <Label>{children}</Label>
    </Container>
  );
};
