import styled from 'styled-components'

export const LoginContainer = styled.div`
  background: var(--background-color);
  height: 100vh;
  display: grid;
  place-items: center;

  & img {
    width: 100%;
    max-width: 400px;
    padding: 1.5rem;
  }
`

export const LoginButton = styled.a`
  padding: 1.5rem 2rem;
  background-color: var(--primary-color);
  border-radius: 50px;
  text-transform: uppercase;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  color: var(--text-color);
`