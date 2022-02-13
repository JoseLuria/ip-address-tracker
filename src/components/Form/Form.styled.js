import styled from "styled-components";

export const FormContainer = styled.form`
  width: 100%;
  max-width: 555px;
  height: 3.625rem;
  border-radius: 0.938rem;
  display: flex;
  align-items: center;
  margin: 1.813rem 0 1.5rem;
  box-shadow: var(--shadow);

  @media(min-width: 768px) {
    margin: 1.938rem 0 3rem;
  }
`

export const FormInput = styled.input`
  width: calc(100% - 3.625rem);
  height: 100%;
  background-color: var(--white);
  padding: 0 1.5rem;
  font-size: 1.125rem;
  color: var(--black);
  border-radius: 0.938rem 0 0 0.938rem;
  ${({error}) => error && "border: solid 2px var(--red);"} 
  transition-duration: var(--duration);

  &::placeholder {
    color: ${({error}) => error ? "var(--red)" : "var(--black)"};
    opacity: 0.5;
  }
`

export const FormButton = styled.button`
  width: 3.625rem;
  height: 3.625rem; 
  background-color: var(--black);
  border-radius: 0 0.938rem 0.938rem 0;
  cursor: pointer;
  transition-duration: var(--duration);
  display: flex;

  &:hover {
    background-color: var(--low-black)
  }

  &:focus {
    background-color: var(--low-black)
  }
`

export const IconButton = styled.img`
  margin: auto;
`
