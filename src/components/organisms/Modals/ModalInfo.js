import React from 'react'
import Modal from '@containers/Modal'
import pdf2018_1 from './Docs/list-of-insider-information.pdf'
import pdf2018_2 from './Docs/position-about-insider-information.pdf'

function ModalInfo({...p}) {
    return (
        <Modal title="Раскрытие инсайдерской информации" visible={p.visible}>
            <Modal.Row>
                <a href={pdf2018_1} target="_blank">Перечень инсайдерской информации</a>(pdf, 168КБ)
            </Modal.Row>
            <Modal.Row>
                <a href={pdf2018_2} target="_blank">Положение об инсайдерской информации</a>(pdf, 294КБ)
            </Modal.Row>
        </Modal>
    )
}

export default ModalInfo
