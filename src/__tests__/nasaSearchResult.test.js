import { render, screen } from '@testing-library/react';

import NasaSearchResult from '../components/NasaSearchResult';
import SearchResults from '../__tests__/fixtures/submitSearchResponse.json';

describe('Nasa search result', () => {
    test('should render search result item thumbnail image', () => {
        render(<NasaSearchResult item={SearchResults.collection.items[0]} />);

        const image = screen.getByAltText('Thor Helmet');

        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', 'https://images-assets.nasa.gov/image/PIA13083/PIA13083~thumb.jpg');
    });
});