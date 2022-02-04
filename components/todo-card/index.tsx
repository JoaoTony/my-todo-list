import { FC } from 'react';

import {
  Container,
  Checkbox,
  Column,
  Title,
  Level,
} from './todo-card.styles';

import { CardProps } from './todo-card.types';

const TODOCard: FC<CardProps> = ({ level, title }) => (
  <Container>
    <Checkbox className="checkbox" type="checkbox" />

    <Column>
      <Title>{title}</Title>
      <Level level={level}><p>{level}</p></Level>
    </Column>
  </Container>
);

export default TODOCard;
