import { FC } from 'react';

import { Modal as Container, CloseModal } from './modal.styles';
import { ModalPorps } from './modal.types';

const Modal: FC<ModalPorps> = ({ visible, handleModal }) => (
  <Container visible={visible}>
    <CloseModal visible={visible} onClick={() => handleModal(false)}>X</CloseModal>
  </Container>
);

export default Modal;
