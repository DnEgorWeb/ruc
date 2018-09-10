import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs/react';

import Section from '../Section'
import Button from './index'

storiesOf('A - Button', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <Section>
            <Button filled={boolean('Filled', true)}>
                {text('Content', 'Используемые технологии')}
            </Button>
        </Section>
    ))
    .add('Link like', () => (
        <Section>
            <Button.Link to={text('URL', '#')} filled={boolean('Filled', true)}>
                {text('Content', 'Используемые технологии')}
            </Button.Link>
        </Section>
    ))
