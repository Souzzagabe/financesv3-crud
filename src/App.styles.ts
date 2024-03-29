import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
    background-color: #5f479f;
    height: 150px;
    text-align: center;
`;

export const HeaderText = styled.h1`
    margin: 0;
    padding: 0;
    color: #FFF;
    padding-top: 30px;
`;

export const Body = styled.div`
    margin: auto;
    max-width: 980px;
    margin-bottom: 50px;
    padding: 0 20px;
    height: 76vh;
    background-color: red;
    @media (max-width: 768px) {
        max-width: 100%;
    }
`;