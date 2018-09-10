import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, date, text } from '@storybook/addon-knobs/react';

import Section from '../Section'
import NewsItem from './index'

storiesOf('A - NewsItem', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <Section>
            <NewsItem
                preview={eval(require('../Logo/images/logo.svg'))}
                date={date('Date', new Date('Jan 10 2017'))}
                title={text('Title', 'Миграция завершилась')}
            >
                <p>{text('Content', 'Компания РУКАРД осуществила миграцию процессингового центра в новый высокотехнологичный центр хранения и обработки данных. Данная миграция позволит значительно увеличить комплексную отказоустойчивость системы.')}</p>
            </NewsItem>
        </Section>
    ))
