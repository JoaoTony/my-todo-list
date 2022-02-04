import { FC } from 'react';

import {
  Container, Title, Navbar, ButtonAdd,
} from './home.styles';

const Home: FC = () => (
  <Container>
    <Navbar>
      <Title>Today</Title>
    </Navbar>

    <ButtonAdd>+</ButtonAdd>
  </Container>
);

export default Home;
