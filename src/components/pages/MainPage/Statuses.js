import React from 'react'
import styled from 'styled-components'

import BREAKS from '@constants/breakpoints'

const Wrapper = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    > li {
        display: flex;
        align-items: center;

        padding-left: 1rem;
        margin-bottom: 1rem;

        color: #949494;
        font-size: 13px;
        line-height: 1.54;

        > figure{
            display: flex;
            margin-right: 25px;

            height: 45px;
            width: 45px;

            img {
                display: block;
                margin: auto;

                height: auto;
                max-height: 43px;
                max-width: 100%;
            }
        }

        > div {
            p {display: inline;}
        }
    }

    @media (min-width: ${BREAKS.SM}px) {
        flex-wrap: wrap;
        align-items: center;
        flex-direction: row;
        margin: 90px auto 65px;
        
        > li {
            font-size: 16px;
            line-height: 1.5;

            flex: 1 0 50%;

            > figure{
                margin-right: 30px;

                height: 65px;
                min-width: 65px;
                max-width: 65px;
            }

            > div {
                p {display: block;}
            }
        }
    }

    @media (min-width: ${BREAKS.MD}px) {
        margin: 125px auto;

        > li {
            padding-left: 0;
            margin-bottom: 0;

            flex: 1 0 auto;

            > figure{
                margin-right: 1rem;

                height: 80px;
                min-width: 80px;
                max-width: 80px;
            }
        }
    }
`

export default function Statuses(props) {
    return (
        <Wrapper {...props}>
            <li>
                <figure>
                    <img src={require('./images/statuses/visa.svg')} alt="" />
                </figure>
                <div>
                    <p>Статус VisaNet </p>
                    <p>Processor в VISA Inc.</p>
                </div>
            </li>
            <li>
                <figure>
                    <img src={require('./images/statuses/mastercard.svg')} alt="" />
                </figure>
                <div>
                    <p>Статус MSP</p>
                    <p>в MasterCard </p>
                </div>
            </li>
            <li>
                <figure>
                    <img src={require('./images/statuses/mir.svg')} alt="" />
                </figure>
                <div>
                    <p>Статус TPP</p>
                    <p>в МИР</p>
                </div>
            </li>
            <li>
                <figure>
                    <img src={require('./images/statuses/unionpay.svg')} alt="" />
                </figure>
                <div>
                    <p>Cтатус TPSP</p>
                    <p>в UnionPay International</p>
                </div>
            </li>
            <li>
                <figure>
                    <img src={require('./images/statuses/americanexpress.svg')} alt="" />
                </figure>
                <div>
                    <p>Соглашение</p>
                    <p>с American Express</p>
                </div>
            </li>
        </Wrapper>
    )
}
