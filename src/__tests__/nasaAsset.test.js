import { render, screen, fireEvent, act } from '@testing-library/react';

import NasaAsset from '../components/NasaAsset';

import SearchResults from '../__tests__/fixtures/submitSearchResponse.json';
import GetAssetResponse from '../__tests__/fixtures/getAssetResponse.json';

const api = {
    getAsset: () => Promise.resolve(GetAssetResponse)
};

describe('Nasa asset', () => {
    test('should render the nasa asset', async () => {
        await act(async () => {
            await render(<NasaAsset asset={SearchResults.collection.items[0]} api={api} setAssetToView={() => { }} />);
        });

        expect(screen.getByText('Thor Helmet')).toBeInTheDocument();
        expect(screen.getByText('This heroic image from from NASA Wide-field Infrared Survey Explorer is of a special cloud of dust and gas in the constellation Canis Major catalogued as NGC 2359, or more commonly known as Thor Helmet.')).toBeInTheDocument();
        const image = screen.getByAltText('Thor Helmet');

        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', 'http://images-assets.nasa.gov/image/PIA13083/PIA13083~orig.jpg');
    });

    test('should render the back to search button', async () => {
        const setAssetToView = jest.fn();

        await act(async () => {
            await render(<NasaAsset asset={SearchResults.collection.items[0]} api={api} setAssetToView={setAssetToView} />);
        });

        expect(screen.getByText('Back to search')).toBeInTheDocument();

        fireEvent.click(screen.getByText('Back to search'));
        expect(setAssetToView).toHaveBeenCalled();
    });

    // test('should render a video component if the media type is video', async () => {
    //     await act(async () => {
    //         await render(<NasaAsset asset={SearchResults.collection.items[0]} api={api} setAssetToView={setAssetToView} />);
    //     });

    //     expect(screen.getByText('Thor Helmet')).toBeInTheDocument();

    //     const image = screen.queryByAltText('Thor Helmet');
    //     expect(image).not.toBeInTheDocument();

    // });
});