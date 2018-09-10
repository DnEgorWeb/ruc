import React, {Fragment} from 'react'

import Container from '@components/atoms/Container'
import Nav from '@components/atoms/Nav'

import SectionBanks from '@containers/SectionBanks'
import SectionProcessing from './SectionProcessing'
import SectionSoft from './SectionSoft'
import SectionTransactions from './SectionTransactions'
import SectionGetPayments from './SectionGetPayments'
import SectionLoyaltySystem from './SectionLoyaltySystem'
import SectionInternetAcquiring from './SectionInternetAcquiring'
import SectionMobilePayments from './SectionMobilePayments'
import SectionSelfService from './SectionSelfService'
import SectionServices from './SectionServices'
import SectionAcquiring from './SectionAcquiring'


class BanksPage extends React.Component {
    state = {
        navBg: 'blue',
        navActives: [],
        updated: false,
    }

    sections = {}

    scrollTo = (e) => {
        e.preventDefault()

        const target = e.currentTarget.href.split('#')[1]
        const $el = document.querySelector(`#${target}`)
        const top = $el.offsetTop - 100

        this.$scroll.scroll({top, behavior: 'smooth'})
    }

    isSectionInViewport = (el) => {
        const elementTop = el.offsetTop
        const elementBottom = elementTop + el.offsetHeight

        const viewportTop = this.$scroll.scrollTop
        const viewportBottom = viewportTop + this.$scroll.offsetHeight

        return elementBottom > viewportTop && elementTop < viewportBottom;
    }

    componentDidMount() {
        this.$scroll = document.querySelector('#appViewPort')

        // const $nav = this.refs['nav']
        const $nav = document.querySelectorAll('.menuSection a')
        const $navMenu = document.querySelector('.menuSection')
        console.log($nav)
        let t = 0
        const out = Object.keys(this.sections).reduce((p, key) => {
            const $el = this.sections[key]
            const bg = $el.dataset.type === 'blue' ? '#ffffff' : '#3bacf0'
            const h = $el.offsetHeight

            p.push({bg, h, t})
            t += h

            return p
        }, [])


        const $c = document.createElement('canvas')
        const ctx = $c.getContext('2d')

        $c.width = 1
        $c.height = t

        out.forEach(s => {
            ctx.fillStyle = s.bg
            ctx.fillRect(0, s.t, 1, s.t + s.h)
        })

        for (let index = 0; index < $nav.length; index++) {
            const element = $nav[index];
            element.style.backgroundImage = `url(${$c.toDataURL()})`
            element.style.backgroundSize = `auto ${t}px`
        }

        if (!this.state.updated) {
            this.onScroll = () => {
                
                for (let index = 0; index < $nav.length; index++) {
                    const element = $nav[index];
                    const y = $navMenu.offsetTop - ((index ) * 59) - this.$scroll.scrollTop;
                    element.style.backgroundPositionY = `${y}px` 
                }
                const navActives = Object.keys(this.sections).reduce((p, key) => {
                    this.isSectionInViewport(this.sections[key]) && p.push(key)
                    return p
                }, [])

                this.setState({navActives})
            }

            this.$scroll.addEventListener('scroll', this.onScroll)
        }
    }

    componentDidUpdate() {
        if (!this.state.updated) {
            this.setState({
                updated: true,
            }, () => {
                this.componentDidMount()
            })
        }
    }

    componentWillUnmount(e) {
        this.$scroll.removeEventListener('scroll', this.onScroll)
    }

    isActive = (key) => {
        return ~this.state.navActives.indexOf(key) ? 'active' : ''
    }

    render() {
        return (
            <Fragment>
                <Nav >
                    <Container>
                        <ul className="menuSection" ref="nav" bg={this.state.navBg}>
                            <li><a onClick={this.scrollTo} className={this.isActive('s2')} href="#cardProcessing">Процессинг банковских карт</a></li>
                            <li><a onClick={this.scrollTo} className={this.isActive('s3')} href="#software">Программное обеспечение</a></li>
                            <li><a onClick={this.scrollTo} className={this.isActive('s4')} href="#moneyTransfer">Денежные переводы</a></li>
                            <li><a onClick={this.scrollTo} className={this.isActive('s5')} href="#payments">Прием платежей</a></li>
                            <li><a onClick={this.scrollTo} className={this.isActive('s6')} href="#loyaltyPrograms">Программы лояльности</a></li>
                            <li><a onClick={this.scrollTo} className={this.isActive('s7')} href="#internetAcquiring">Интернет эквайринг</a></li>
                            <li><a onClick={this.scrollTo} className={this.isActive('s8')} href="#mobPayment">Мобильные платежи</a></li>
                            <li><a onClick={this.scrollTo} className={this.isActive('s9')} href="#selfMaintain">Устройства самообслуживания</a></li>
                            <li><a onClick={this.scrollTo} className={this.isActive('s10')} href="#rucardServices">Сервисы Рукард</a></li>
                            <li><a onClick={this.scrollTo} className={this.isActive('s11')} href="#acquiring">Эквайринг</a></li>
                        </ul>
                    </Container>
                </Nav>

                <SectionBanks _ref={n => this.sections['s1'] = n} />
                <SectionProcessing _ref={n => this.sections['s2'] = n} />
                <SectionSoft _ref={n => this.sections['s3'] = n} />
                <SectionTransactions _ref={n => this.sections['s4'] = n} />
                <SectionGetPayments _ref={n => this.sections['s5'] = n} />
                <SectionLoyaltySystem _ref={n => this.sections['s6'] = n} />
                <SectionInternetAcquiring _ref={n => this.sections['s7'] = n} />
                <SectionMobilePayments _ref={n => this.sections['s8'] = n} />
                <SectionSelfService _ref={n => this.sections['s9'] = n} />
                <SectionServices _ref={n => this.sections['s10'] = n} />
                <SectionAcquiring _ref={n => this.sections['s11'] = n} />
            </Fragment>
        )
    }
}

export default BanksPage
