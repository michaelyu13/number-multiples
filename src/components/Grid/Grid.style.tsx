import styled from 'styled-components';

export const GridNumbers = styled.section`
    display: grid;
    gap: ${(props) => props.theme.spacingHalf};
    grid-template-columns: repeat(5, 1fr);

    @media (min-width: 768px) {
        grid-template-columns: repeat(10, 1fr);
    }
`;
