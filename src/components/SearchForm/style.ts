import styled from "styled-components";

export const SearchFormContainer = styled.form`
    display: flex;
    gap: 1rem;

    input {
        flex: 1;
        border-radius: 6px;
        border: 0;
        background: ${(props) => props.theme['gray-900']};
        color: ${(props) => props.theme['gray-300']};
        padding: 1rem;


        &::placeholder {
            color: ${(props) => props.theme['gray-500']};
        }
    }

    button {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        border: 0;
        padding: 0.875rem 2rem;
        background: transparent;
        border: 1px solid ${(props) => props.theme['green-300']};
        color: ${(props) => props.theme['green-300']};
        border-radius: 6px;
        font-weight: 700;
        cursor: pointer;
        transition: 0.5s;

        &:hover {
            background-color: ${(props) => props.theme['green-500']};
            border-color: ${(props) => props.theme['green-500']};
            color: ${(props) => props.theme['white']};
        }
    }
`