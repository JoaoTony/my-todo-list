import styled from 'styled-components';

import { LevelType } from './todo-card.types';
import { colors } from '../../utils/colors';
import { chooseElementFromObject } from '../../utils/chosse-element-from-obj';

export const Container = styled.div<{checked: boolean}>`
  width: 100%;
  position: relative;
  background: ${({ checked }) => (checked ? '#D9D9D9' : '#fff')};

  border-radius: 8px;
  box-shadow: #EFF3FA    0 0 12px;
  margin: 5px 0;
  padding: 16px;

  display: flex;

  transition: all ease-out 0.5s;


  ${({ checked }) => (checked && 'transform: scale(0.9);')};

  .bar{
    position: absolute;
    height: 2px;
    width: 110%;
    background: red;
    left: -5%;
    top: 50%;
    bottom: 50%;

    transition: all ease-out 0.5s;
    transform: ${({ checked }) => (checked ? 'scale(1) rotate(12deg)' : 'scale(0.2) rotate(0)')};
    opacity: ${({ checked }) => (checked ? 1 : 0)};

    :after {
      content: '';
      position: absolute;
      height: 2px;
      width: 100%;
      background: red;
      top: 50%;
      bottom: 50%;
      transform: rotate(-24deg);
      transform: ${({ checked }) => (checked ? 'rotate(-24deg)' : 'rotate(0)')};
    }
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
