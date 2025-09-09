import { render, screen, fireEvent } from '@testing-library/react';
import { BaseInput } from './BaseInput';

describe('BaseInput', () => {
  it('renders text input and updates value', () => {
    const handleChange = jest.fn();
    render(
      <BaseInput type="text" value="" label="Text" placeholder="Type here" handleChange={handleChange} />
    );
    const input = screen.getByPlaceholderText('Type here');
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'abc' } });
    expect(handleChange).toHaveBeenCalledWith('abc');
  });

  it('renders checkbox and toggles checked state', () => {
    const handleChange = jest.fn();
    render(
      <BaseInput type="checkbox" value={false} selected={false} label="Check me" handleChange={handleChange} />
    );
    const input = screen.getByLabelText('Check me');
    expect(input).toBeInTheDocument();
    fireEvent.click(input);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('renders radio and toggles checked state', () => {
    const handleChange = jest.fn();
    render(
      <BaseInput type="radio" value={false} selected={false} label="Radio me" handleChange={handleChange} />
    );
    const input = screen.getByLabelText('Radio me');
    expect(input).toBeInTheDocument();
    fireEvent.click(input);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('renders select and changes value', () => {
    const handleChange = jest.fn();
    render(
      <BaseInput
        type="select"
        label="Select"
        options={[{ name: 'A', value: 'a' }, { name: 'B', value: 'b' }]}
        value="a"
        handleChange={handleChange}
      />
    );
    const select = screen.getByLabelText('Select');
    expect(select).toBeInTheDocument();
    fireEvent.change(select, { target: { value: 'b' } });
    expect(handleChange).toHaveBeenCalledWith('b');
  });

  it('renders without label', () => {
    const handleChange = jest.fn();
    render(
      <BaseInput type="text" value="" handleChange={handleChange} />
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
