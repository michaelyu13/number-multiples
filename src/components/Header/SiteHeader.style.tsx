import styled from 'styled-components';

export const Header = styled.header`
    margin-top: ${(props) => props.theme.spacingMedium};
    padding-left: ${(props) => props.theme.spacing};
    padding-right: ${(props) => props.theme.spacing};
`;

export const Heading = styled.h1`
    font-size: 34px;
`;
