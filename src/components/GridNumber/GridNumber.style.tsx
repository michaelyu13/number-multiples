import styled from 'styled-components';

export const Button = styled.button`
    border: 1px solid ${(props) => props.theme.colors.black};
    width: 4rem;
    aspect-ratio: 1;
    font-size: 26px;

    @media (min-width: 1024px) {
        width: 5rem;
        font-size: 36px;
    }

    &:hover {
        outline: 3px solid #ef4444;
    }

    &.highlighted {
        color: ${(props) => props.theme.colors.white};
        background-color: #3b82f6;
    }

    &.selected {
        color: ${(props) => props.theme.colors.white};
        background-color: #fde047;
    }
`;
