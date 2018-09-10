import React from 'react'

import {
    MODAL_ORDER_CONSULT,
    MODAL_GET_OFFER,
    MODAL_GET_INFO,
    MODAL_GET_REPORTS,
} from '@constants/Modal'

import Overlay from '@components/atoms/Modal/Overlay'

import ModalOrderConsult from './ModalOrderConsult'
import ModalGetOffer from './ModalGetOffer'
import ModalInfo from './ModalInfo'
import ModalReports from './ModalReports'

function Modals({
                    current = null,
                    user = {},
                    closeModal = () => {},
                    setUserName = () => {},
                    setUserMail = () => {},
                    setUserPhone = () => {},
                    setUserMessage = () => {},
                    sendFormData = () => {}
                }) {
    return (
        <Overlay visible={!!current} onClose={closeModal}>
            <ModalOrderConsult
                visible={current === MODAL_ORDER_CONSULT}
                user={user}
                setUserName={setUserName}
                setUserMail={setUserMail}
                setUserPhone={setUserPhone}
                setUserMessage={setUserMessage}
                sendFormData={sendFormData}
            />
            <ModalGetOffer
                visible={current === MODAL_GET_OFFER}
            />
            <ModalInfo
                visible={current === MODAL_GET_INFO}
            />
            <ModalReports
                visible={current === MODAL_GET_REPORTS}
            />
        </Overlay>
    )
}

export default Modals
