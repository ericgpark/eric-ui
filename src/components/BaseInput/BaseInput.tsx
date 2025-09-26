import { ReactElement } from 'react';
import { BaseText } from '../BaseText/BaseText';
import './BaseInputStyles.css';

type BaseInputType = 'text' | 'checkbox' | 'radio' | 'select';

type SelectOption = {
  name: string,
  value: string,
};

export interface BaseInputProps {
  type: BaseInputType;
  value?: any;
  label?: string;
  placeholder?: string;
  selected?: boolean;
  options?: SelectOption[];
  handleChange: (value: any) => void;
}

export const BaseInput: React.FC<BaseInputProps> = ({
  type = 'text',
  value,
  label = '',
  placeholder = '',
  selected = false,
  options = [],
  handleChange,
}: BaseInputProps) => {
  let inputElement: ReactElement;

  switch(type) {
    case 'select':
      inputElement = (
        <select className="base-input__select" onChange={(e) => handleChange(e.target.value)}>
          {options.map(({ name, value }: SelectOption) => (
            <option
              className="base-input__select-option"
              value={value}
            >
              <BaseText type="body">
                {name}
              </BaseText>
            </option>
          ))}
        </select>
      );
      break;
    case 'checkbox':
      inputElement = (
        <input
          className="base-input__checkbox"
          type="checkbox"
          checked={selected}
          onChange={(e) => handleChange(e.target.checked)}
        />
      );
      break;
    case 'radio':
      inputElement = (
        <input
          className="base-input__radio"
          type="radio"
          checked={selected}
          onChange={(e) => handleChange(e.target.checked)}
        />
      );
      break;
    case 'text':
    default:
      inputElement = (
        <input
          className="base-input__text"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
      );
      break;
  }

  return (
    <div className="base-input">
      {
        label ?
          <label className={`base-input__label${['radio', 'checkbox'].includes(type) ? '-check' : ''}`}>
            <BaseText type="body">
              {label}
            </BaseText>
            {inputElement}
          </label>
        : inputElement
      }
    </div>
  );
};
