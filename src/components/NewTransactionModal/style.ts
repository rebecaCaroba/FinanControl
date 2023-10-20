import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'


export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);

`

export const Content = styled(Dialog.Content)`
    min-width: 32rem;
    border-radius: 6px;
    padding: 2.5rem 3rem;
    background: ${props => props.theme['background']};

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    form {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;    
    }

    input {
            border-radius: 6px;
            border: 0;
            background: ${props => props.theme['gray-900']};
            color: ${props => props.theme['gray-300']};
            padding: 1rem;

            &::placeholder {
                color: ${props => props.theme['gray-500']};
            }
        }

    button[type="submit"] {
        height: 58px;
        border: 0;
        background: ${props => props.theme['green-500']};
        color: ${props => props.theme['white']};
        border-radius: 6px; 
        font-weight: 700;
        padding: 0 1.25rem;
        margin-top: 1.5rem;
        transition: background-color 0.2s;
        cursor: pointer;

        &:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }

        &:not(:disabled):hover {
            background: ${props => props.theme['green-300']};
        }
    }
    
`

export const CloseButton = styled(Dialog.Close)`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    line-height: 0;
    border: 0;
    background: transparent;
    color:  ${props => props.theme['gray-500']};
    cursor: pointer;

`

export const TransactionType = styled(RadioGroup.Root)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 0.5rem;

`

interface TransactionTypeButtonProps {
    variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
    background-color:  ${props => props.theme['gray-700']};
    color:  ${props => props.theme['gray-300']};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    gap: 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    border: 0;

    svg {
        color: ${(props) => props.variant === 'income'? props.theme['green-300']: props.theme['red-300']  };
    }

    &[data-state='unchecked']:hover {
    transition: background-color 0.2s;
    background-color:  ${props => props.theme['gray-600']};
    }

    &[data-state='checked'] {
        background-color:  ${props => props.variant === 'income' ? props.theme['green-300']: props.theme['red-300']  };
        color:  ${props => props.theme['white']};

        svg {
            color:  ${props => props.theme['white']};
        }
    }

`