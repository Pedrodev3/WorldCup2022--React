import styled from "styled-components";

export const StyledMain = styled.main`
    max-width: 100%;
    min-height: 65vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem 0;
`
export const StyledH1 = styled.h1`
    font-size: max(1vw, .9rem);
    text-align: center;
`

export const StyledH2 = styled.h2`
    font-size: max(.8vw, .85rem);
    text-align: center;
    padding: 0 10rem;
`

export const StyledSection = styled.section`
    display: flex;
`

export const StyledPicture = styled.picture`
    display: grid;
    place-items: center;
    margin-left: 2rem;
`

export const StyledFigure = styled.img`
    min-width: 18rem;
    min-height: 17rem;
    @media (max-width: 1300px) or (orientation: landscape) {
        width: 10rem;
        height: 12rem;
    }
    @media (max-width: 1300px) or (orientation: portrait) {
        width: 10rem;
        height: 12rem;
    }
`

export const StyledFig = styled.figcaption`
    padding: 2rem;
    text-align: center;
    font-size: max(.8vw, .8rem);
`