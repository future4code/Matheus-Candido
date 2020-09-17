import styled from "styled-components";

// Div que engloba todo o component do Header.
export const Header = styled.header`
    display: flex;
    width: 100%;
    padding: 10px 10px;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    img {
        width: 4vmin;
        height: 4vmin;
    }
    h2 {
        margin: 0;
        position: fixed;
        left: 20%;
        right: 20%;
        pointer-events: none;
    }
`;

// Imagem para mostrar matches.
export const ImgProfile = styled.div`
    height: 33px;
    :hover {
        cursor: pointer;
        transform: scale(1.2)
    }
`;

// Imagem para mostrar profiles.
export const ImgHeart = styled.div`
    display: flex;
    height: 33px;
    :hover {
        cursor: pointer;
        transform: scale(1.2)
    }
`;
