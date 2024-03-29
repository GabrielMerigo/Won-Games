import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type CheckboxProps = {
  label?: string,
  labelFor?: string,
  labelColor?: 'white' | 'black',
  onCheck?: (status: boolean) => void,
  isChecked?: boolean,
  value?: string | ReadonlyArray<string> | number | undefined;
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  isChecked = false,
  label,
  labelFor = '',
  labelColor = 'white',
  onCheck,
  value,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked)

  const onChange = () => {
    const status = !checked;
    setChecked(status);

    if (onCheck) {
      onCheck(status);
    }
  }

  return (
    <S.Wrapper>
      <S.Input {...props} id={labelFor} type="checkbox" onChange={onChange} checked={checked} />
      {!!label && <S.Label htmlFor={labelFor} labelColor={labelColor}>{label}</S.Label>}
    </S.Wrapper>
  );
}
export default Checkbox
