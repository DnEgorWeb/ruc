import React from 'react'
import { storiesOf } from '@storybook/react'

import MainPage from './index'

storiesOf('P - MainPage', module)
    .add('default', () => (
        <MainPage />
    ))
