import React from 'react'
import styled from 'styled-components'

import BREAKS from '@constants/breakpoints'

import SectionTitle from '@components/atoms/SectionTitle'
import Button from '@components/atoms/Button'

const Wrapper = styled.div`
    padding: 0 0 35px;

    display: grid;
    grid-gap: 1rem;

    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;

    grid-template-areas: "map"
                         "meta"
                         "form"
                         "btn";

    ${SectionTitle} {
        color: #949494;
        display: none;
    }

    #map  {
        grid-area: map;
        margin: 0 -1rem;

        > div {
            height: 240px !important;
            width: 100%;
        }
    }

    #form { grid-area: form }
    #meta { grid-area: meta }
    #btn  { grid-area: btn }

    @media (min-width: ${BREAKS.SM}px) {
        padding: 0 0 50px;

        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto auto auto;

        grid-template-areas: "map map"
                             "meta form"
                             "meta btn";

        ${SectionTitle} {
            display: block;
            margin-bottom: 30px;
        }

        #map {
            margin-bottom: 40px;

            > div { height: 500px !important; }
        }
    }

    @media (min-width: ${BREAKS.MD}px) {
        padding: 140px 0 70px;

        grid-gap: 60px 190px;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto auto;

        grid-template-areas: "map form"
                             "meta btn";

        ${SectionTitle} {
            margin-bottom: 110px;
        }

        #map {
            margin: 0;
        }

        #btn {
            > div {
                text-align: right;
                width: 450px;
            }
        
            ${Button} {
                height: 60px;
                width: 150px;
            }
        }
    }
`

export default Wrapper
