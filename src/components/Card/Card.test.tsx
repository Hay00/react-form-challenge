import { render } from '@testing-library/react';

import { Card } from './';

describe('Card Component', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Card>Hello</Card>);
    expect(getByText('Hello')).toBeInTheDocument();
  });

  it('should change color when passed as prop', () => {
    const { getByText } = render(<Card color="#fff">Hello</Card>);
    expect(getByText('Hello')).toHaveStyle('background-color: #fff');
  });
});
