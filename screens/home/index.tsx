import { FC, useState, useCallback } from 'react';

import {
  Container,
  Title,
  Navbar,
  ButtonAdd,
  CardList,
} from './home.styles';

import { fakeData } from './fake-data';

import TODOCard from '../../components/todo-card';
import Modal from '../modal';

const Home: FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = useCallback((isOpen: boolean) => {
    setShowModal(isOpen);
  }, [showModal]);

  return (
    <>
      <Container visible={showModal}>
        <Navbar>
          <Title>Today</Title>
        </Navbar>

        <CardList>
          {fakeData.map((item) => (
            <TODOCard
              key={item.id.toString()}
              level={item.level as any}
              title={item.title}
            />
          ))}
        </CardList>

      </Container>
      <Modal
        visible={showModal}
        handleModal={() => handleModal(false)}
      />

      <ButtonAdd
        size={showModal ? 'FULL' : 'AUTO'}
        onClick={() => handleModal(true)}
      >
        {showModal ? 'Done' : '+'}
      </ButtonAdd>
    </>
  );
};

export default Home;
