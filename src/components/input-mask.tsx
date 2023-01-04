import { ChangeEvent, FunctionComponent, useState } from 'react';
import { scriptMask } from '../scripts';
import { inputMaskPropsType } from '../types';

type eventChangeType = ChangeEvent<HTMLInputElement>;

export const InputMask: FunctionComponent<inputMaskPropsType> = ({ mask, type, onChange, ...rest }) => {
  const [inputMask, SetInputMask] = useState('');

  function handleValueInputWhenChanging(event: eventChangeType) {
    if (type === 'number') {
      const numbers = RegExp(/[À-ü]|[A-Za-z]/g).test(event.target.value);
      if (!numbers) {
        SetInputMask(scriptMask({ value: event.target.value, pattern: mask }));
      }
    } else {
      SetInputMask(scriptMask({ value: event.target.value, pattern: mask }));
    }
    event.target.value = mask ? event.target.value.slice(0, mask.length) : event.target.value;

    if (onChange) {
      onChange(event);
    }
  }

  return <input type="text" {...rest} value={inputMask} onChange={handleValueInputWhenChanging} />;
};
