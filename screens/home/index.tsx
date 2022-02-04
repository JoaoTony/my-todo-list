import { FC } from 'react';

import {
  Container,
  Title,
  Navbar,
  ButtonAdd,
  CardList,
} from './home.styles';

import { fakeData } from './fake-data';

import TODOCard from '../../components/todo-card';

const Home: FC = () => {
  const todoList = [0, 1, 2, 3, 4];

  return (
    <Container>
      <Navbar>
        <Title>Today</Title>
      </Navbar>

      <CardList>
        {fakeData.map((item) => (
          <TODOCard key={item.id.toString()} level={item.level} title={item.title} />
        ))}
      </CardList>

      <ButtonAdd size="AUTO">+</ButtonAdd>
    </Container>
  );
};

export default Home;
