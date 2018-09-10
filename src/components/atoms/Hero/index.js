import styled from 'styled-components'
import BREAKS from '@constants/breakpoints'

/**
 * Hero-image - начальная картинка на странице
 * принимает параметры:
 * src - ссылка на изображение
 * height - высота блока
 */
const Hero = styled.div`
    background: url('${p => p.src}') center center no-repeat;
    background-size: cover;
    height: 140px;
    margin-bottom: 20px;
    
    @media (min-width: ${BREAKS.SM}px) {
        height: 200px;
        margin-bottom: 47px;
    }

    @media (min-width: ${BREAKS.MD}px) {
        height: 425px;
        margin-bottom: 100px;
    }
`

export default Hero
