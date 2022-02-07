import styled from 'styled-components';

export const Modal = styled.div<{ visible: boolean}>`
  width: ${({ visible }) => (visible ? '100%' : 0)};
  height: ${({ visible }) => (visible ? '100%' : 0)};
  padding: ${({ visible }) => (visible ? '20px' : 0)};

  overflow: hidden;

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
  align-items: flex-start;

  box-shadow: #F6F6F6 0 0 12px;

  .top40 {
    margin-top: 40px !important;
  }

  .top20 {
    margin-top: 20px !important;
  }

  .subTitle {
    font-size: 12px;
    color: #BBBBBB ;
    margin: 0;
    display: ${({ visible }) => (visible ? 'block' : 'none')};

    opacity: ${({ visible }) => (visible ? 1 : 0)};

    transition: all ease-out 0.5s;
    //transition-delay: 0.5s;
  }

  .title {
    font-size: 16px;
    color: #000;
    margin: 0;
    margin-top: 10px;
    //display: ${({ visible }) => (visible ? 'block' : 'none')};

    opacity: ${({ visible }) => (visible ? 1 : 0)};

    //transform: ${({ visible }) => (visible ? 0 : 'translate(100px, 100px)')};
    transition: all ease-out 0.5s;
    //transition-delay: 0.5s;
  }

  .input-todo-name{
    width: 100%;
    height: 45px;

    border: 1px solid #F1F1F1;
    border-radius: 8px;
    background-color: transparent;

    margin-top: 10px;
  }
`;

export const CloseModal = styled.button<{ visible: boolean}>`
  background: transparent;
  border: none;

  color: #f46785;
  font-size: 16px;

  align-self: flex-end;

  position: relative;
  z-index: 6;

  display: ${({ visible }) => (visible ? 'block' : 'none')};

  opacity: ${({ visible }) => (visible ? 1 : 0)};
`;

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;

  border: red;
`;
