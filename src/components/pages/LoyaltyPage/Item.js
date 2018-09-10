import styled from 'styled-components'

const Item  = styled.div`
    position: relative;
    padding-left: 60px;
    min-height: 36px;

    :before {
        background: url(${require('./images/znak.svg')}) no-repeat center;
        content: '';

        height: 36px;
        width: 36px;

        position: absolute;
        left: 0;
        top: 0;
    }
`

export default Item
