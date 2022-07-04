import React from 'react';
import {
  Container,
  HiddenCheckbox,
  StyledCheckbox,
  Icon,
  Label,
} from './styles';

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox = ({
  checked,
  onChange,
  children,
  ...rest
}: {
  checked: boolean;
  onChange: (event: any) => void;
  props?: any[];
  children?: React.ReactNode;
}) => {
  return (
    <Container>
      <HiddenCheckbox checked={checked} onChange={onChange} {...rest} />
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
