import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const TopbarContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 50px;
  border: var(--dev-border);
  background-color: rgba(25, 20, 20,0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  color: var(--color-accent-text);
  z-index: 10;

  /* & div {
    background-color: rgba(25, 20, 20,0.9);
    padding: 0.5rem;
    border-radius: 50%;
    height: 40px;
    width: 40px;
  } */
`

export const Navigator = styled.div`
  display: flex;

  > div {
    background-color: rgba(25, 20, 20,0.9);
    cursor: pointer;
    border-radius: 50%;
    height: 0px;
    width: 0px;
    padding: 0.75rem;
    position: relative;
  }

  > div span {
    position: absolute;
    top: 3px;
    left: 7px;
  }

  > div:first-child {
    margin-right: 1rem;

    & span {
      left: 4px;
    }
  }
`

export const User = styled.div`
  max-width: 15rem;
  height: 70%;
  border: 1px solid black;
  border-radius: 50px;
  background-color: rgba(0, 0, 0, 0.9);
  overflow: hidden;
  display: flex;
  align-items: center;

  & img {
    padding: 1px;
    height: 100%;
    border-radius: 50%;
    aspect-ratio: 1/1;
  }

  & span {
    color: var(--text-accent-color);
    padding-left: 1rem;
    font-weight: bold;
    font-size: 0.9rem;
  }
`

export const Logout = styled(Link)`
  padding: 0.5rem;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
`