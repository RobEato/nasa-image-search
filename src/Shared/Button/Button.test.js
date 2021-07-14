import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';


describe('Button', () => {
    test('renders the button', () => {
        const onClick = jest.fn();
        render(<Button text='Load more' onClick={onClick} />);
        expect(screen.getByText('Load more')).toBeInTheDocument();
        fireEvent.click(screen.getByText('Load more'));
        expect(onClick).toHaveBeenCalled();
    });
});
