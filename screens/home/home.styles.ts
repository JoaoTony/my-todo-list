import styled from 'styled-components';
import Button from '../../components/button';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;

  background-color: #fff;

  box-sizing: border-box !important;
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
`;
