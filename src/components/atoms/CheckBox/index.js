import React from 'react'
import styled, {css} from 'styled-components'

const CheckBox = styled(({className, style, label, type = 'checkbox', ...p}) => (
    <label {...{className, style}}>
        <input type={type} {...p} value={p.value || label} />
        <i />
        <span>{label}</span>
    </label>
))`
    cursor: pointer;
    user-select: none;

    ${p => p.disabled && css`
        cursor: not-allowed;
    `}

    > * {
        display: inline-block;
        vertical-align: middle;
    }
    
    > input{
        display: none;

        &:checked {
            ~ span, ~ i{
                color: #7ad513;
            }

            ~ i {
                ${p => p.type === 'radio' ? css`
                    &::before{
                        height: 14px;
                        width: 14px;
                    }
                ` : css`
                    background: currentColor;
                `}

                &::before{
                    opacity: 1;
                }
            }
        }
    }
    
    > span, > i{
        color: #ffffff;
    }

    > span{
        font-size: 16px;
        line-height: 1.69;
    }
    
    > i{
        border: solid 2px currentColor;

        ${p => p.type === 'radio' ? css`
            border-radius: 24px;
        ` : css`
            border-radius: 3px;
        `}

        margin-right: 1rem;

        height: 24px;
        width: 24px;

        position: relative;

        &, &::before{
            transition: all .15s ${p => p.type === 'radio' ? 'cubic-bezier(0.18, 0.89, 0.32, 1.28)' : 'ease'};
        }

        &::before{
            background: currentColor;
            display: block;
            content: '';
        
            position: absolute;
            left: 50%;
            top: 50%;
            
            transform: translate3d(-50%, -50%, 0);
            
            opacity: 0;
            
            ${p => p.type === 'radio' ? css`
                border-radius: 14px;

                height: 0;
                width: 0;
            ` : css`
                background: url("${require('./images/icon-check.svg')}");
                border-radius: 3px;

                height: 14px;
                width: 14px;
            `}
        }
    }
`

export default CheckBox
