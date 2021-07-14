import { render, screen } from '@testing-library/react';
import App from './App';

import SubmitSearchResponse from './__tests__/fixtures/submitSearchResponse.json';

const api = {
    search: () => Promise.resolve(SubmitSearchResponse),
    getAsset: () => Promise.resolve(),
    getMetadata: () => Promise.resolve(),
    getCaptions: () => Promise.resolve(),
    getAlbum: () => Promise.resolve()
};

test('renders the App', () => {
  render(<App nasaApi={api} />);
  expect(screen.getByText('NASA Search')).toBeInTheDocument();
});
