import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    margin-top: -5rem;
`

interface SummaryCardProps {
    variany?: 'green',
}

export const SummaryCard = styled.div<SummaryCardProps>`
    background-color: ${(props) => props.theme['gray-600']};
    padding: 1.5rem 1.5rem 1.5rem 2rem;
    border-radius: 6px;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${(props) => props.theme['gray-300']};
    }

    strong {
        display: block;
        font-size: 2rem;
        margin-top: 1rem;
    }

    ${(props) => props.variany === 'green' && css`
        background-color: ${props.theme['green-700']}
    `}
`