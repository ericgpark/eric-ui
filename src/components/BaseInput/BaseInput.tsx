import { ReactElement } from 'react';

type BaseInputType = 'text' | 'checkbox' | 'radio' | 'select';

type SelectOption = {
  name: string,
  value: string,
};

export interface BaseInputProps {
  type: BaseInputType;
  label?: string;
  prefill?: any;
  placeholder?: string;
  selected?: boolean;
  options?: SelectOption[];
  handleChange: (value: any) => void;
}

export const BaseInput: React.FC<BaseInputProps> = ({
  type = 'text',
  label = '',
  prefill = '',
  placeholder = '',
  selected = false,
  options = [],
  handleChange,
}: BaseInputProps) => {
  let inputElement: ReactElement;

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleChange(e.target.value);
  };

  switch(type) {
    case 'select':
      inputElement = (
        <select onChange={(e) => handleChange(e.target.value)}>
          {options.map(({ name, value }: SelectOption) => (
            <option value={value}>{name}</option>
          ))}
        </select>
      );
      break;
    case 'checkbox':
      inputElement = (
        <input
          type="checkbox"
          checked={selected}
          onChange={(e) => handleChange(e.target.checked)}
        />
      );
      break;
    case 'radio':
      inputElement = (
        <input
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
          type={type}
          placeholder={placeholder}
          value={prefill}
          onChange={(e) => handleChange(e.target.value)}
        />
      );
      break;
  }

  return (
    <>
      {
        label ?
          <label>
            {label}
            {inputElement}
          </label>
        : inputElement
      }
    </>
  );
};
