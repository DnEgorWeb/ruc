import React from 'react'
import styled from 'styled-components'

import BREAKS from '@constants/breakpoints'

import Section from '@components/atoms/Section'
import SectionTitle from '@components/atoms/SectionTitle'

import SearchItems from './SearchItems'
import SearchInput from './SearchInput'

const Wrapper = styled(Section)`
    background: transparent;

    ${SectionTitle} {
        color: #949494;
        margin-bottom: 20px;
    }

    @media (min-width: ${BREAKS.SM}px) {
        ${SectionTitle} {
            margin-bottom: 50px;
        }
    }

    @media (min-width: ${BREAKS.MD}px) {
        ${SectionTitle} {
            margin-bottom: 100px;
        }
    }
`


class SearchPage extends React.Component {
    state = {
        searchString: '',
        results: [...new Array(10)],
    }

    render() {
        return (
            <Wrapper>
                <SectionTitle>Результаты поиска</SectionTitle>

                <SearchInput />

                <h3>{this.state.results.length} результатов по запросу &laquo;{this.state.searchString}&raquo;</h3>

                <SearchItems>
                    {this.state.results.map((e, i) => (
                        <SearchItems.Item key={i}>
                            <small>Главная</small>
                            <h4>Terminal Manager</h4>
                            <p>
                                В программном решении предусмотрена
                                возможность обслуживания <strong>карт</strong> с магнитной
                                полосой, бесконтактных <strong>карт</strong>,
                                микропроцессорных <strong>карт</strong>, <strong>карт</strong> EM в режиме
                                On-Line...
                            </p>
                        </SearchItems.Item>
                    ))}
                </SearchItems>
            </Wrapper>
        )
    }
}

export default SearchPage
