import { FC, useState } from 'react';
import Checkbox from '../chackbox';

import {
  Container,
  Column,
  Title,
  Level,
} from './todo-card.styles';

import { CardProps } from './todo-card.types';

const TODOCard: FC<CardProps> = ({ level, title }) => {
  const [checked, setChecked] = useState(false);

  return (
    <Container checked={checked}>
      <div className="bar" />

      <Checkbox
        checked={checked}
        color="#3E83F4"
        label=""
        id="a"
        onChange={(e) => setChecked(e.target.checked)}
      />

      <Column>
        <Title>{title}</Title>
        <Level level={level}><p>{level}</p></Level>
      </Column>
    </Container>
  );
};

export default TODOCard;
