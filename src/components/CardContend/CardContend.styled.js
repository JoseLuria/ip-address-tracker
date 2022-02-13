import styled from "styled-components";

export const CardInfo = styled.section`
  color: var(--black);
  text-align: center;
  width: 100%;

  @media(min-width: 1024px) {
    width: 213px; 
    text-align: left;
  }
`

export const SectionTitle = styled.h2`
  font-size: 0.625rem;
  opacity: 0.5;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 7px;

  @media(min-width: 1200px) {
    margin-bottom: 13px;
    font-size: 0.75rem;
  }
`

export const SectionText = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  text-overflow: ellipsis;
	overflow: hidden;
  white-space: nowrap;

  @media(min-width: 1200px) {
    font-size: 1.625rem;
  }
`

export const SectionLine = styled.hr`
  display: none;
  margin: auto 0;
  margin-left: 32px;
  height: 75px;
  width: 1px;
  background-color: var(--black);
  opacity: 0.15;
  
  @media(min-width: 1200px) {
    display: block;
  }

  &:nth-last-child(1){
    display: none;
  }
`
