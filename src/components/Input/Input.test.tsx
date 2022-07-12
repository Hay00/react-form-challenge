import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './';

describe('Input component', () => {
  it('should render correctly', () => {
    const { getByText } = render(
      <Input id="inputId" label="Input Label" name="inputName" />
    );

    expect(getByText('Input Label')).toBeInTheDocument();
  });

  it('should render placeholder', () => {
    const { getByPlaceholderText } = render(
      <Input
        id="inputId"
        label="Input Label"
        name="inputName"
        placeholder="Input Placeholder"
      />
    );

    expect(getByPlaceholderText('Input Placeholder')).toBeInTheDocument();
  });

  it('should render when has required prop', () => {
    const { getByText } = render(
      <Input id="inputId" label="Input Label" name="inputName" required />
    );

    expect(getByText('Input Label *')).toBeInTheDocument();
  });

  it('should render error label when is invalid', () => {
    const { getByText, getByPlaceholderText } = render(
      <Input
        id="inputId"
        label="Input Label"
        name="inputName"
        pattern="^[0-9]*$"
        placeholder="Input Placeholder"
      />
    );

    const input = getByPlaceholderText('Input Placeholder');
    input.focus();
    userEvent.type(input, 'Some text');
    userEvent.tab();
    expect(getByText('Input Label is Invalid')).toBeInTheDocument();
  });
});
