import React from 'react'
import { storiesOf } from '@storybook/react'

import Header from './index'

storiesOf('M - Header', module)
    .add('default', () => (
        <Header />
    ))
