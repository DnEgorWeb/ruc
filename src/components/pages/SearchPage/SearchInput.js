import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    
`

class SearchInput extends React.Component {
    render() {
        return (
            <Wrapper>
                <input type="search" />
            </Wrapper>
        )
    }
}

export default SearchInput
