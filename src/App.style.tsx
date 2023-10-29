import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${(props) => props.theme.spacings.medium};
    padding-top: ${(props) => props.theme.spacings.large};
    padding-bottom: ${(props) => props.theme.spacings.medium};
    min-height: 100vh;
    background: rgb(161, 176, 255);
`;

export const Main = styled.main`
    flex-grow: 1;
`;
