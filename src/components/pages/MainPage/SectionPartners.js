import React from 'react'
import styled, {css} from 'styled-components'

import {
    Section,
    Container,
} from '@components'

const SectionPartners = styled(Section)`
    min-height: 0;

    ${Container} {
    }
`

const Slider = styled.div`
    display: flex;
    align-items: center;
`

Slider.Button = styled.button`
    background: url('${require('./images/partners/arrow.svg')}') center no-repeat;
    border-radius: 64px;
    border: 0;
    display: block;
    cursor: pointer;

    height: 64px;
    width: 64px;
    
    ${p => p.prev && css`
        //
    `}

    ${p => p.next && css`
        transform: rotateZ(180deg);
    `}
`

Slider.Wrapper = styled.div`
    overflow: hidden;
    flex: 1 0 auto;
    padding: 0 35px;
`

Slider.Items = styled.div`
    margin: 0 -35px;
`

Slider.Item = styled.div`
    display: inline-block;
    vertical-align: middle;
    margin: 0 35px;

    img{
        display: block;
    }
`

export default () => (
    <SectionPartners>
        <Slider>
            <Slider.Button prev />

            <Slider.Wrapper>
                <Slider.Items>
                    <Slider.Item>
                        <img src={require('./images/partners/1.png')} alt="" />
                    </Slider.Item>
                    <Slider.Item>
                        <img src={require('./images/partners/2.png')} alt="" />
                    </Slider.Item>
                    <Slider.Item>
                        <img src={require('./images/partners/3.png')} alt="" />
                    </Slider.Item>
                    <Slider.Item>
                        <img src={require('./images/partners/4.png')} alt="" />
                    </Slider.Item>
                    <Slider.Item>
                        <img src={require('./images/partners/5.png')} alt="" />
                    </Slider.Item>
                    <Slider.Item>
                        <img src={require('./images/partners/6.png')} alt="" />
                    </Slider.Item>
                </Slider.Items>
            </Slider.Wrapper>

            <Slider.Button next />
        </Slider>
    </SectionPartners>
)
