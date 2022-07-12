import { render } from '@testing-library/react';

import { CheckBox } from './';

describe('Check box component', () => {
  it('should render label when passed as child', () => {
    const changeState = jest.fn();
    const { getByText } = render(
      <CheckBox checked={false} onChange={changeState}>
        Hello
      </CheckBox>
    );
    expect(getByText('Hello')).toBeInTheDocument();
  });
});
