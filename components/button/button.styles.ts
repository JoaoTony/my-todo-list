import styled from 'styled-components';

export const Button = styled.button<{ size: 'FULL' | 'AUTO' }>`
  width: ${({ size }) => (size === 'FULL' ? 'stretch' : '45px')};
  height: 45px;

  border-radius: 8px;
  background-color: #3E83F4;
  font-size: 20px;
  color: #fff;


  border: none;

  box-shadow: #9ABDF6   0 0 12px;
`;
