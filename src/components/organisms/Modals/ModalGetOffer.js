import React from 'react'
import styled from 'styled-components'
import Modal from '@containers/Modal'
import BREAKS from '@constants/breakpoints'

import {
    Input,
    Button,
    CheckBox,
    Row,
} from '@components'

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #454444;
    margin: 0 2rem;
    flex: 1 0 auto;
    
    @media (min-width: ${BREAKS.SM}px) {
        .withoutTitle {
            margin-top: 18px;
        }
    }
    
    @media (min-width: ${BREAKS.MD}px) {
        .withoutTitle {
            margin-top: 58px;
        }
        
        & + & {
            ${Input} {
                :last-child {
                    margin-bottom: 0;
                }
            }
        }
    }
    
    ${Input} {
        margin-bottom: 2rem;
    }
`

const ColumnWrapper = styled(Column)`   
    @media (min-width: ${BREAKS.SM}px) {
        flex-direction: row;
        
        & + & {
            margin-top: 2rem;
        }
    }
    
    @media (min-width: ${BREAKS.MD}px) {
        flex: 1 0 33.3333%;
        flex-direction: column;
        margin: 0;
        
        & + & {
            flex: 1 0 calc(66.6667% - 2rem);
            flex-direction: row;
            margin-left: 2rem;
            margin-top: 0;
        }
    }
`


const RowRight = styled.div`
    margin-top: 4rem;
    display: flex;
    justify-content: flex-end;
`

const StyledCheckBox = styled(CheckBox)`
    > span {
        color: #454444 !important; 
    }
    
    > i {
        color: #454444;
    }
`

const Title = styled.div`
    color: #949494;
`

export default class ModalGetOffer extends React.Component {
    state = {

    }

    onChange = () => {

    }

    render() {
        // const {user, setUserName, setUserMail, setUserPhone, setUserMessage} = this.props;

        return (
            <Modal title="Процессинг Банкам" {...this.props} style={{width: '1260px'}}>
                <Row>
                    <ColumnWrapper>
                        <Column>
                            <Input
                                label="Как к Вам обращаться?"
                                placeholder="ФИО"
                                // value={user.name}
                                // onChange={setUserName}
                            />
                            <Input
                                label=""
                                placeholder="E-mail"
                                // value={user.mail}
                                // onChange={setUserMail}
                            />
                        </Column>
                        <Column>
                            <Input
                                label="Телефон"
                                placeholder="+7 9ХХ ХХХ ХХ ХХ"
                                // value={user.phone}
                                // onChange={setUserPhone}
                            />
                            <Input
                                label="Комментарий"
                                placeholder="Комментарий"
                                // value={user.message}
                                // onChange={setUserMessage}
                            />
                        </Column>
                    </ColumnWrapper>
                    <ColumnWrapper>
                        <Column>
                            <Title>Услуги для подключения</Title>
                            <StyledCheckBox type='checkbox' label='Процессинг банковских карт' name='business' onChange={this.onChange} />
                            <StyledCheckBox type='checkbox' label='Программное обеспечение' name='business' onChange={this.onChange} />
                            <StyledCheckBox type='checkbox' label='Денежные переводы' name='business' onChange={this.onChange} />
                            <StyledCheckBox type='checkbox' label='Прием платежей' name='business' onChange={this.onChange} />
                            <StyledCheckBox type='checkbox' label='Программы лояльности' name='business' onChange={this.onChange} />
                        </Column>
                        <Column className="withoutTitle">
                            <StyledCheckBox type='checkbox' label='Интернет эквайринг' name='business' onChange={this.onChange} />
                            <StyledCheckBox type='checkbox' label='Мобильные платежи' name='business' onChange={this.onChange} />
                            <StyledCheckBox type='checkbox' label='Устройства самообслуживания' name='business' onChange={this.onChange} />
                            <StyledCheckBox type='checkbox' label='Сервисы Рукард' name='business' onChange={this.onChange} />
                            <StyledCheckBox type='checkbox' label='Эквайринг' name='business' onChange={this.onChange} />
                        </Column>
                    </ColumnWrapper>
                </Row>
                <RowRight>
                    <Button>Отправить</Button>
                </RowRight>
            </Modal>
        )
    }
}
