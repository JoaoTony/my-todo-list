import styled from 'styled-components';

import { LevelType } from './todo-card.types';
import { colors } from '../../utils/colors';
import { chooseElementFromObject } from '../../utils/chosse-element-from-obj';

export const Container = styled.div`
  width: 100%;
  //height: 100px;
  background: #fff;

  border-radius: 8px;
  box-shadow: #EFF3FA    0 0 12px;
  margin: 5px 0;
  padding: 16px;

  display: flex;

  .d{
    width: 20px;
    height: 20px;

    background: red;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10px;
`;

export const Title = styled.p`
  color: #555555;
  font-size: 18px;
  margin: 0;
  margin-top: 2px;
  margin-bottom: 5px;
`;

export const Level = styled.div<{level: LevelType }>`
  padding: 2px;
  text-align:center;
  border-radius: 2px;
  background-color: ${({ level }) => `${chooseElementFromObject(colors.level, level)}31`};
  align-self: flex-start;

  p{
    margin: 0;
    color: ${({ level }) => chooseElementFromObject(colors.level, level)};
    font-size: 11px;
  }

  width: auto;
`;

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;

  border: red;
`;
