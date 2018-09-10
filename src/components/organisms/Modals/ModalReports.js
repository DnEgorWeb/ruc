import React from 'react'
import Modal from '@containers/Modal'
import pdf2017_1 from './Docs/az-fsfo-group-rucard-2017.pdf'

function ModalReports({...p}) {
    return (
        <Modal title="Отчётность" visible={p.visible}>
            <Modal.Row>
                <a href={pdf2017_1} target="_blank">АЗ МСФО Группа Рукард - 2017</a>(pdf, 6.6МБ)
            </Modal.Row>
            
        </Modal>
    )
}

export default ModalReports
