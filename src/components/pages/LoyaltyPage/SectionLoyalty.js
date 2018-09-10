import React from 'react'
import styled from 'styled-components'

import BREAKS from '@constants/breakpoints'

import SectionTitle from '@components/atoms/SectionTitle'
import Button from '@components/atoms/Button'
import ScrollDownBtn from '@components/atoms/ScrollDownBtn'
import {Wrapper} from '../MainPage/SectionProcessing'

const StyledWrapper = styled(Wrapper)`
    ${SectionTitle} {
        margin: 0 0 10px;
        max-width: 100%;
    }

    p {
        font-size: 13px;
        line-height: 1.54;
        margin: 0 auto 1rem;
        max-width: 475px;
    }

    @media (min-width: ${BREAKS.MD}px) {
        p {
            font-size: 18px;
            margin: 0 0 55px;
            line-height: 1.9;
        }
    }
`

class SectionLoyalty extends React.Component {
    scrollDown = (e) => {
        e.preventDefault()

        const $el = document.querySelector('#scrollToView')
        if ($el && 'scrollIntoView' in $el) {
            $el.scrollIntoView({behavior: 'smooth'})
        }
    }

    render() {
        return (
            <StyledWrapper>
                <img
                    src={require('./images/loyalty.png')}
                    srcSet={`${require('./images/loyalty@2x.png')} 2x, ${require('./images/loyalty@3x.png')} 3x`}
                />

                <div>
                    <SectionTitle>Программа лояльности</SectionTitle>
                    <p>
                        Процессинговая компания Рукард предлагает комплексное решение по запуску
                        программы лояльности
                    </p>

                    <Button>Подключение</Button>

                    <ScrollDownBtn onClick={this.scrollDown} />
                </div>
            </StyledWrapper>
        )
    }
}

export default SectionLoyalty
