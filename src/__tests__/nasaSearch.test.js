import { render, screen, fireEvent, act } from '@testing-library/react';

import NasaSearch from '../components/NasaSearch';

describe('Nasa search', () => {
    test('should render the search input', () => {
        const submitSearch = jest.fn();

        render(<NasaSearch submitSearch={submitSearch} />);
        expect(screen.getByPlaceholderText('Please enter a search term')).toBeInTheDocument();
        expect(screen.getByTestId('nasa-search-icon')).toBeInTheDocument();
    });

    test('should call the search function when submitting a search', () => {
        const submitSearch = jest.fn();

        render(<NasaSearch submitSearch={submitSearch} />);

        const searchInput = screen.getByPlaceholderText('Please enter a search term');
        fireEvent.input(searchInput, { target: { value: 'helmet' } });
        fireEvent.submit(searchInput);
        expect(submitSearch).toHaveBeenCalled();
        expect(submitSearch).toHaveBeenCalledWith('helmet', true, true);
    });

    test('should call the search enpoint when clicking the search icon', () => {
        const submitSearch = jest.fn();

        render(<NasaSearch submitSearch={submitSearch} />);

        const searchInput = screen.getByPlaceholderText('Please enter a search term');
        fireEvent.input(searchInput, { target: { value: 'helmet' } });
        fireEvent.click(screen.getByTestId('nasa-search-icon'));
    });

    describe('Checkboxes', () => {
        test('should render the image & video checkboxes as true by default', () => {
            const submitSearch = jest.fn();

            render(<NasaSearch submitSearch={submitSearch} />);

            const imageCheckbox = screen.getByLabelText('Images');
            const videoCheckbox = screen.getByLabelText('Videos');

            expect(imageCheckbox).toHaveAttribute('checked');
            expect(videoCheckbox).toHaveAttribute('checked');
        });
    });
});