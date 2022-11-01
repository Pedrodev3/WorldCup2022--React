import styled from "styled-components";

export const StyledMain = styled.main`
    max-width: 100%;
    min-height: 65vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const StyledPicture = styled.picture`
`

export const StyledFigure = styled.img`
    width: 12rem;
    height: 12rem;
    @media (max-width: 1300px) or (orientation: landscape) {
        width: 6rem;
        height: 7rem;
    }
    @media (max-width: 1300px) or (orientation: portrait) {
        width: 6rem;
        height: 7rem;
    }
`