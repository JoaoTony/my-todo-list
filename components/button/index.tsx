/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';

import { Button as Container } from './button.styles';
import { ButtonProps } from './button.types';

const Button: FC<ButtonProps> = ({ children, ...res }) => (
  <Container {...res}>
    {children}
  </Container>
);

export default Button;
