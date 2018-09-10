import "babel-polyfill"
import React from 'react'
import {render} from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { basename } from 'config'

import App from '@containers/App'
import ProviderWithRouter from '@components/ProviderWithRouter'

const renderApp = () => (
    <BrowserRouter basename={basename}>
        <ProviderWithRouter>
            <App />
        </ProviderWithRouter>
    </BrowserRouter>
)

const root = document.getElementById('app')
render(renderApp(), root)
