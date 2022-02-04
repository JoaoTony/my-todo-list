import { LevelType } from './todo-card.types';

export const chooseColor = (level: LevelType) => {
  const colors = {
    HIGH: '#F24F4F',
    MEDIUM: '#F4BB79',
    LOW: '#79AAF4',
  };

  return colors[level];
};
