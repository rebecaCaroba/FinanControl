import styled from "styled-components";

export const TransactionsContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 0;
    padding: 0 1.5rem;

`

export const TransactionsTable = styled.section`
    width: 100%;
    

    div{
        display: grid;
        grid-template-columns: 4fr 2fr 2fr 1fr;
        gap: 8px;
        margin: 10px 0;
        padding: 1.25rem 2rem;
        background: ${(props) => props.theme['gray-700']};
        
        &:first-child {
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
        }

        &:last-child {
            border-top-right-radius: 6px;
            border-bottom-left-radius: 6px;
        }
    }

    span {
        text-align: left;
    }

`


interface PriceHighLightProps {
    varient: 'income' | 'outcome',
}   

export const PriceHighLight = styled.span<PriceHighLightProps>`
    color: ${(props) => props.varient === 'income' ? props.theme['green-300'] : props.theme['red-300']};

`