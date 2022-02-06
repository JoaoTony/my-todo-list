import styled from 'styled-components';

export const Modal = styled.div<{ visible: boolean}>`
  width: ${({ visible }) => (visible ? '100%' : 0)};
  height: ${({ visible }) => (visible ? '100%' : 0)};

  border-radius: ${({ visible }) => (visible ? 0 : '50%')};
  border-radius: 0;

  border-top-left-radius: ${({ visible }) => (visible ? 0 : '50%')};

  position: absolute;
  background: ${({ visible }) => (visible ? '#fff' : '#E0E0E0 ')};

  z-index: 4;

  bottom: 0;
  right: 0;

  transition: all ease-out 0.5s;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: #F6F6F6 0 0 12px;
`;

export const CloseModal = styled.button<{ visible: boolean}>`
  background: transparent;
  border: none;

  color: #f46785;
  font-size: 16px;

  align-self: flex-end;
  margin: 20px;

  display: ${({ visible }) => (visible ? 'block' : 'none')};

  opacity: ${({ visible }) => (visible ? 1 : 0)};
`;
