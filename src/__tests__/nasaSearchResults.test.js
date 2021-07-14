import { render, screen, fireEvent, act } from '@testing-library/react';

import NasaSearchResults from '../components/NasaSearchResults';
import SearchResults from '../__tests__/fixtures/submitSearchResponse.json';

describe('Nasa search results', () => {
    test('should render given search results', () => {
        render(<NasaSearchResults searchResults={SearchResults.collection} />);

        expect(screen.getByText('941 results found')).toBeInTheDocument();
        expect(screen.getAllByTestId('search-result')).toHaveLength(100);
    });

    test('should render a message when no results found', () => {
        render(<NasaSearchResults searchResults={{ items: [], metadata: { total_hits: 0 } }} />);

        expect(screen.getByText('0 results found')).toBeInTheDocument();
        expect(screen.getByText('No search results found. Please try again.')).toBeInTheDocument();
        expect(screen.queryByText('Load more')).not.toBeInTheDocument();
    });

    test('should render pagination when available', () => {
        render(<NasaSearchResults searchResults={SearchResults.collection} />);

        expect(screen.getByText('941 results found')).toBeInTheDocument();
        expect(screen.getAllByTestId('search-result')).toHaveLength(100);

        expect(screen.getByText('Load more')).toBeInTheDocument();
    });
});