/* tslint:disable:class-name */
export interface inputMaskPropsType
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  mask: string;
  type?: 'number' | 'text';
}
