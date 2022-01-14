import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const SearchPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--text-accent-color);
`

export const CategoryList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  margin-bottom: 2rem;
`

export const CategoryItem = styled(Link)`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  color: inherit;
  text-decoration: none;
  
  ${ ({color})=> css`
    background-color: ${color};
  `}

  & h4 {
    font-size: 2rem;
    color: var(--text-accent-color);
    margin: 1rem;
    text-transform: capitalize;
  }

  & img {
    position: absolute;
    bottom: -15px;
    right: -15px;
    transform: rotate(35deg);
    height: 100px;
    width: 100px;
    box-shadow: 0px 0px 2px rgba(0,0,0,0.2);
  }
`