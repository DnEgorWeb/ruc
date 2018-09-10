import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';

import Section from '../Section'
import Input from '../Input'
import Button from '../Button'
import Modal from './index'
import Overlay from './Overlay'

storiesOf('A - Modal', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <Section>
            <Modal
                title={text('Title', 'Заказать косультацию')}
            >
                content
            </Modal>
        </Section>
    ))
    .add('with Close button', () => (
        <Section>
            <Modal
                title={text('Title', 'Заказать косультацию')}
                onClose={() => {}}
            >
                content
            </Modal>
        </Section>
    ))
    .add('with Inputs', () => (
        <Section>
            <Modal
                title="Заказать косультацию"
                onClose={() => {}}
            >
                <Modal.Row>
                    <Input
                        label="Как к Вам обращаться?"
                        placeholder="E-mail"
                    />
                </Modal.Row>
                <Modal.Row>
                    <Input
                        label="Как к Вам обращаться?"
                        placeholder="E-mail"
                    />
                </Modal.Row>
                <Modal.Row>
                    <Input
                        label="Как к Вам обращаться?"
                        placeholder="E-mail"
                    />
                </Modal.Row>

                <Modal.Row className="text-right">
                    <Button>Отправить</Button>
                </Modal.Row>
            </Modal>
        </Section>
    ))
    .add('with Overlay', () => (
        <Overlay
            visible={boolean('Visible', true)}
        >
            <Modal
                onClose={() => {}}
            >
                {text('Content', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque esse fugit magnam quibusdam sapiente temporibus! Accusamus commodi culpa cum, delectus deleniti ducimus, earum enim eveniet inventore ipsa iste laudantium magnam maiores, maxime nemo optio provident quam quo repellendus reprehenderit sapiente sint tempore unde vero voluptatum. Consectetur consequatur dolor dolorem doloremque doloribus eos esse exercitationem labore maxime nisi numquam, obcaecati omnis perspiciatis placeat possimus praesentium quas quis quos rem, rerum? Architecto aut deleniti doloremque ea eligendi esse eveniet fugit illo illum magni molestiae necessitatibus nesciunt non odio officiis quam quasi, quibusdam quidem quod recusandae tempora temporibus velit vitae voluptatem voluptatum!')}
            </Modal>
        </Overlay>
    ))
