import React from 'react'
import Modal from '@containers/Modal'

import {
    Input,
    Button,
} from '@components'

function ModalOrderConsult({...p}) {
    return (
        <Modal title="Заказать консультацию" visible={p.visible}>
            <Modal.Row>
                <Input
                    label="Как к Вам обращаться?"
                    placeholder="Имя"
                    value={p.user.name}
                    onChange={p.setUserName}
                />
            </Modal.Row>
            <Modal.Row>
                <Input
                    label=""
                    placeholder="E-mail"
                    value={p.user.mail}
                    onChange={p.setUserMail}
                />
            </Modal.Row>
            <Modal.Row>
                <Input
                    label=""
                    placeholder="Телефон"
                    value={p.user.phone}
                    onChange={p.setUserPhone}
                />
            </Modal.Row>
            <Modal.Row>
                <Input
                    label=""
                    placeholder="Комментарий"
                    value={p.user.message}
                    onChange={p.setUserMessage}
                />
            </Modal.Row>

            <Modal.Row className="text-right">
                <Button onClick={p.sendFormData}>Отправить</Button>
            </Modal.Row>
        </Modal>
    )
}

export default ModalOrderConsult
