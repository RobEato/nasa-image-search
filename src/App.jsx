import React from 'react';
import NasaSearch from './Components/NasaSearch';

import './App.scss';

const App = ({ nasaApi }) => {
    return (
        <div>
            <NasaSearch api={nasaApi.api} />
        </div>
    );
};

export default App;