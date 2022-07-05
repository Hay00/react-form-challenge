import React from 'react';
import {
  Container,
  HiddenCheckbox,
  StyledCheckbox,
  Icon,
  Label,
} from './styles';

interface CheckBoxProps {
  checked: boolean;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  props?: any[];
  children?: React.ReactNode;
}

const CheckBox = ({
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

export default CheckBox;
