import React, {Fragment} from 'react'

import SectionCompanies from '@containers/SectionCompanies'
import SectionLoyaltySystem from '../BanksPage/SectionLoyaltySystem'
import SectionAcquiring from '../BanksPage/SectionAcquiring'
import SectionInternetAcquiring from '../BanksPage/SectionInternetAcquiring'
import SectionGetPayments from '../BanksPage/SectionGetPayments'

import Container from '@components/atoms/Container'
import Nav from '@components/atoms/Nav'

class CompaniesPage extends React.Component {
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
        const $nav = document.querySelectorAll('.menuSection a')
        const $navMenu = document.querySelector('.menuSection')

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
                            <li><a onClick={this.scrollTo} className={this.isActive('s2')} href="#loyaltyPrograms">Программы лояльности</a></li>
                            <li><a onClick={this.scrollTo} className={this.isActive('s3')} href="#acquiring">Эквайринг</a></li>
                            <li><a onClick={this.scrollTo} className={this.isActive('s4')} href="#internetAcquiring">Интернет эквайринг</a></li>
                            <li><a onClick={this.scrollTo} className={this.isActive('s5')} href="#payments">Прием платежей</a></li>
                        </ul>
                    </Container>
                </Nav>

                <SectionCompanies _ref={n => this.sections['s1'] = n} />
                <SectionLoyaltySystem _ref={n => this.sections['s2'] = n} />
                <SectionAcquiring _ref={n => this.sections['s3'] = n} />
                <SectionInternetAcquiring _ref={n => this.sections['s4'] = n} />
                <SectionGetPayments _ref={n => this.sections['s5'] = n} />
            </Fragment>
        )
    }
}

export default CompaniesPage
