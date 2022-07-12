import { render } from '@testing-library/react';

import { Button } from './';

describe('Button Component', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Button>Hello</Button>);
    expect(getByText('Hello')).toBeInTheDocument();
  });

  it('should be of type submit', async () => {
    const { findByTestId } = render(
      <Button data-testid="testId" type="submit">
        My Button
      </Button>
    );
    const button = await findByTestId('testId');
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('should have default size when size not informed', () => {
    const { getByText, getByTestId } = render(
      <Button data-testid="testId">My Button</Button>
    );
        
    expect(getByTestId('testId')).toHaveStyle('padding: 12px');
    expect(getByText('My Button')).toHaveStyle('font-size: 16px');
  });

  it('should have small size when size is small', () => {
    const { getByText, getByTestId } = render(
      <Button data-testid="testId" size="sm">
        My Button
      </Button>
    );

    expect(getByTestId('testId')).toHaveStyle('padding: 8px');
    expect(getByText('My Button')).toHaveStyle('font-size: 12px');
  });

  it('should have large size when size is large', () => {
    const { getByText, getByTestId } = render(
      <Button data-testid="testId" size="lg">
        My Button
      </Button>
    );
        
    expect(getByTestId('testId')).toHaveStyle('padding: 16px');
    expect(getByText('My Button')).toHaveStyle('font-size: 36px');
  });
});
