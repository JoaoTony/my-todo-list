import { FC } from 'react';
import Checkbox from '../../components/chackbox';

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
    <Checkbox color="#79AAF4" label="Low" id="01" />
    <Checkbox color="#F4BB79" label="Medium" id="02" />
    <Checkbox color="#F24F4F" label="High" id="03" />

  </Container>
);

export default Modal;
