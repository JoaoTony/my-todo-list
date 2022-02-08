import { FC, useState } from 'react';
import Checkbox from '../../components/chackbox';
import { chooseElementFromObject } from '../../utils/chosse-element-from-obj';
import { colors } from '../../utils/colors';

import { ModalLevelWrapper } from './modal.styles';
import { witchLevel } from './modal.utils';

const levels = [
  { id: '01', level: 'LOW' },
  { id: '02', level: 'MEDIUM' },
  { id: '03', level: 'HIGH' },
];

const ModalSelectLevel: FC = () => {
  const [checked, setChecked] = useState({
    HIGH: false,
    MEDIUM: false,
    LOW: false,
  });

  const handleModalSelectLevel = (level: string) => {
    setChecked(witchLevel(level));
  };

  return (
    <ModalLevelWrapper>
      { levels.map((itemLevel) => {
        const { id, level } = itemLevel;

        return (
          <Checkbox
            checked={chooseElementFromObject(checked, level)}
            color={chooseElementFromObject(colors.level, level)}
            label={level}
            id={id}
            onChange={() => handleModalSelectLevel(level)}
          />
        );
      })}
    </ModalLevelWrapper>
  );
};

export default ModalSelectLevel;
