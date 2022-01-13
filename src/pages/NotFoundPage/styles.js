import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NotFoundPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color-dark);
  color: var(--text-accent-color);
  height: 100vh;
`
export const Logo = styled.img`
  width: 5rem;
`
export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.75rem;
`
export const Button = styled(Link)`
  color: var(--background-color-dark);
  text-decoration: none;
  background-color: var(--text-accent-color);
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: bold;
  letter-spacing: 0.5px;
  margin-top: 2rem;
`