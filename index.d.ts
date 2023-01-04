import { FunctionComponent } from 'react';

declare interface inputMaskPropsType
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  mask: string;
  type?: 'number' | 'text';
}

export declare const InputMask: FunctionComponent<inputMaskPropsType>;
