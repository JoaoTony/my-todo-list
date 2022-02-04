import { FC } from 'react';

import {
  Container,
  Title,
  Navbar,
  ButtonAdd,
  CardList,
} from './home.styles';

const Home: FC = () => {
  const todoList = [0, 1, 2, 3, 4];

  return (
    <Container>
      <Navbar>
        <Title>Today</Title>
      </Navbar>

      <CardList>
        {todoList.map((item) => (
          <div>
            {item}
            -Div
          </div>
        ))}
      </CardList>

      <ButtonAdd size="AUTO">+</ButtonAdd>
    </Container>
  );
};

export default Home;
