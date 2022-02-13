import styled from "styled-components"

export const CardContainer = styled.div`
  opacity: ${({show}) => show ? "1" : "0"};  
  visibility: ${({show}) => show ? "visible" : "hidden"};
  width: 100%;
  max-width: 1110px;
  background-color: white;
  border-radius: 0.938rem;
  padding: 1.625rem 1.5rem;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  transition: 100ms ease-in-out;

  @media (min-width: 1024px) {
    padding: 2.313rem 2rem;
    height: 161px;
    gap: 2rem;
    flex-direction: row;
    align-items: initial;
  }
`
