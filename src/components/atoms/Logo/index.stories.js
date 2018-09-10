import React from 'react'
import { storiesOf } from '@storybook/react'

import Section from '../Section'
import Logo from './index'

storiesOf('A - Logo', module)
    .add('default', () => (
        <Section>
            <Logo/>
        </Section>
    ))
