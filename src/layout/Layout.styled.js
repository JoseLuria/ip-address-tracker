import styled from "styled-components";

export const MainLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--low-brown);
  position: relative;
`

export const BlueBackground = styled.div`
  height: 375px;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    height: 280px;
  }
`

export const BlueImage = styled.img`
  height: 100%;

  @media (min-width: 768px) {
    height: auto;
    width: 100%;
  }
`

export const LayoutContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 2.063rem 2.063rem 0;
  display: flex;
  flex-direction: column; 
  align-items: center;
  text-align: center;

  @media(min-width: 768px) {
    font-size: 2rem;
  }
`

export const MainTitle = styled.h1`
  font-size: 1.625rem;
  color: var(--white);
  font-weight: 500;
  letter-spacing: -0.23px;

  @media(min-width: 768px) {
    font-size: 2rem;
  }
`

export const MapWrap = styled.div`
  width: 100%;
  height: calc(100% - 375px);
  display: flex;
  ${({lat, long}) => lat === 0 && long === 0 && "visibility: hidden;"}

  @media(min-width: 768px) {
    height: calc(100% - 280px); 
  }
`
