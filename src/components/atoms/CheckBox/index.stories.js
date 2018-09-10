import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';

import Section from '../Section'
import CheckBox from './index'

storiesOf('A - CheckBox', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <Section>
            <CheckBox
                label={text('Label', 'Эмиссия карт')}
                type={select('Type', {checkbox: 'checkbox', radio: 'radio'})}
                disabled={boolean('Disabled', false)}
                checked={boolean('Checked', false)}
            />
        </Section>
    ))
