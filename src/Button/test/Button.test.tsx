import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '../ui/Button';

describe('Button', () => {
  describe('should be rendered correctly', () => {
    it('default', () => {
      render(<Button onClick={() => console.log('click')}>Click me!</Button>);
      const button = screen.getByText('Click me!');
      expect(button.classList.contains('button--primary')).toBeTruthy();
    });
    it('success', () => {
      render(
        <Button primary={false} onClick={() => console.log('click')}>
          Click me!
        </Button>
      );
      const button = screen.getByText('Click me!');
      expect(button.classList.contains('button--success')).toBeTruthy();
    });
    it('disabled', () => {
      const { asFragment } = render(
        <Button isDisebled={true} onClick={() => console.log('click')}>
          Click me!
        </Button>
      );
      expect(asFragment()).toMatchInlineSnapshot(`
			<DocumentFragment>
			  <button
			    class="button button--medium button--primary"
			    disabled=""
			    type="button"
			  >
			    Click me!
			  </button>
			</DocumentFragment>
		`);
    });
  });

  it('should be clickable', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click me!</Button>);
    fireEvent.click(screen.getByText('Click me!'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it('should not be clickable if disabled', () => {
    const onClick = jest.fn();
    render(
      <Button isDisebled={true} onClick={onClick}>
        Click me!
      </Button>
    );
    fireEvent.click(screen.getByText('Click me!'));
    expect(onClick).not.toHaveBeenCalled();
  });
});
