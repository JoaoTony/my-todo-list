import { FC } from 'react';

import { Wrapper, Checkbox as Container, Label } from './checkbox.styles';
import { CheckboxProps } from './checkbox.types';

const Checkbox: FC<CheckboxProps> = ({
  id, label, color, onChange, checked,
}) => (
  <Wrapper>
    <Container
      type="checkbox"
      id={id}
      bgColor={color}
      checked={checked}
      onChange={(e) => onChange && onChange(e)}
    />
    <Label htmlFor={id} color={color}>{label}</Label>
  </Wrapper>
);

export default Checkbox;
