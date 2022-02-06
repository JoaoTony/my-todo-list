import styled from 'styled-components';
import Button from '../../components/button';

export const Container = styled.div<{ visible: boolean}>`
  width: 100%;
  height: 100vh;
  padding: 20px;

  background-color: #FCFCFC ;

  transform: ${({ visible }) => (visible ? ' translate(-100px, -100px) ' : 0)};

  transition: all ease-out 0.5s;
`;

export const Navbar = styled.nav`
  width: 100%;
`;

export const Title = styled.h1`
  color: #000;
  font-size: 30px;
`;

export const ButtonAdd = styled(Button)`
  position: absolute;
  bottom: 20px;
  right: 20px;

  z-index: 5;
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
