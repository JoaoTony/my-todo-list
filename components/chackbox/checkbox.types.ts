/* eslint-disable no-unused-vars */
import { ChangeEvent } from 'react';

export type CheckboxProps = {
  id: string;
  label: string;
  color: string;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
