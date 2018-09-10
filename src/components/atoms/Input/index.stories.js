import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';

import Section from '../Section'
import Input from './index'

const Bg = Section.extend`
    background: #ffffff;
`

storiesOf('A - Input', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <Bg>
            <Input
                label={text('Label', 'Как к Вам обращаться?')}
                placeholder={text('Placeholder', 'E-mail')}
                disabled={boolean('Disabled', false)}
            />
        </Bg>
    ))
