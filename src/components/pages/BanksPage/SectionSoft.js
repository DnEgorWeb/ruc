import React from 'react'
import styled from 'styled-components'

import SpecialSection from './SpecialSection'
import SectionTitle from '@components/atoms/SectionTitle'
import Row from '@components/atoms/Row'
import Card from '@components/atoms/Card'
import BREAKS from '@constants/breakpoints'

const Wrapper = styled(SpecialSection)`
    ${SectionTitle} {
        margin-bottom: 20px;
    }

    ${Card} {
        flex: 0 0 calc(33% - 40px);
        justify-content: center;
        tranition: box-shadow 0.5s
        margin-bottom: 10px;
       
    }
    ${Card.Link}, ${Card.A} {
        flex: 0 0 calc(33% - 60px);
        justify-content: center;
        margin-bottom: 10px;
        text-decoration: none;
        color:#000
    }
    ${Card.Link}:hover, ${Card.A}:hover{
        0 20px 70px 0 rgba(0, 0, 0, 0.07);
    }
    ${Card.Title} {
        text-align: center;
        margin-bottom: 10px;
    }

    ${Card.Column} {
        padding: 20px;
        margin: auto;

        p {
            text-align: center;
        }
    }
    
    @media (min-width: ${BREAKS.SM}px) {
        ${SectionTitle} {
            margin-bottom: 65px;
        }
        
        ${Card}, ${Card.Link}, ${Card.A} {
            flex: 0 0 calc(50% - 30px);
            margin: 20px 15px;
            height: 200px;
        }
    }
    
    @media (min-width: ${BREAKS.MD}px) {
        ${SectionTitle} {
            margin-bottom: 150px;
        }
    
        ${Row} {
            margin: 0 -30px;
        }
        
        ${Card}, ${Card.Link}, ${Card.A} {
            flex: 0 0 calc(33% - 60px);
            justify-content: center;
            height: auto;
        }
        
        ${Card.Column} {
            padding: 80px 40px 50px;
        }
    }
`

function SectionSoft(p) {
    return (
        <Wrapper type="white" data-type="white" {...p}>
            <SectionTitle number="2" id="software">Программное обеспечение</SectionTitle>
            <Row>
                <Card.A href="http://rusoft-company.ru/products/bank/i-touch" target="_blank">
                    <Card.Column>
                        <Card.Title>i-Touch</Card.Title>
                        <p>Совершенная система ДБО</p>
                    </Card.Column>
                </Card.A>
                <Card.A href="http://rusoft-company.ru/products/bank/retail" target="_blank">                    
                    <Card.Column>
                        <Card.Title>RUSOFT RETAIL</Card.Title>
                        <p>Автоматизация розничного бизнеса в коммерческом банке</p>
                    </Card.Column>
                </Card.A>
                <Card.A href="http://rusoft-company.ru/products/bank/tm" target="_blank">                    
                    <Card.Column>
                        <Card.Title>TERMINAL MANAGER</Card.Title>
                        <p>Управления любым терминальным оборудованием</p>
                    </Card.Column>
                </Card.A>
                <Card.A href="http://rusoft-company.ru/products/bank/abs" target="_blank">                    
                    <Card.Column>
                        <Card.Title>RUSOFT-ABS</Card.Title>
                        <p>Автоматизации банковских услуг в многопрофильном Банке</p>
                    </Card.Column>
                </Card.A>
                <Card.A href="http://rusoft-company.ru/products/bank/umes" target="_blank">                  
                    <Card.Column>
                        <Card.Title>UMES GATE</Card.Title>
                        <p>Интеграция сторонней АБС банка с процессинговым центром и различными сервисами</p>
                    </Card.Column>
                </Card.A>
            </Row>
        </Wrapper>
    )
}

export default SectionSoft
