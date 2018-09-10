import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, number, text } from '@storybook/addon-knobs/react';

import Section from '../Section'
import SectionTitle from './index'


storiesOf('A - SectionTitle', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <Section>
            <SectionTitle number={number('Number', 3)}>{text('Title', 'Используемые технологии')}</SectionTitle>
        </Section>
    ))
