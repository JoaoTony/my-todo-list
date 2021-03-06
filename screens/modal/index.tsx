import { FC } from 'react';
import ModalSelectLevel from './modal.select-level';

import { Modal as Container, CloseModal } from './modal.styles';
import { ModalPorps } from './modal.types';

const Modal: FC<ModalPorps> = ({ visible, handleModal }) => (
  <Container visible={visible}>
    <CloseModal visible={visible} onClick={() => handleModal(false)}>X</CloseModal>

    <p className="subTitle top40">To-do</p>
    <p className="title">Learning Clean Archtecture</p>

    <p className="subTitle top20">Title</p>
    <input type="text" className="input-todo-name" />

    <p className="subTitle top20">Level</p>

    <ModalSelectLevel />

  </Container>
);

export default Modal;
