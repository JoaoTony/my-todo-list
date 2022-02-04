import { FC } from 'react';

import {
  Container, Title, Navbar, ButtonAdd,
} from './home.styles';

const Home: FC = () => (
  <Container>
    <Navbar>
      <Title>Today</Title>
    </Navbar>

    <ButtonAdd size="AUTO">+</ButtonAdd>
  </Container>
);

export default Home;
