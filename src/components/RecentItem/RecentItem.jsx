import { Link } from 'react-router-dom'
import styled from 'styled-components'

const RecentItemContainer = styled(Link)`
  height: 75px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: rgba(59, 55, 55, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  text-decoration: none;
  color: inherit;

  & span {
    padding-left: 1rem;
    display: block;
    flex: 2 1 0;
    font-size: 1.25rem;
    font-weight: bold;
  }
`

const RecentItemImage = styled.div`
  flex: 1 1 0;
  height: 100%;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);

  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

const RecentItem = ({ imgUrl, alt = 'recent-item-image', title, src, id }) => {

  return (
    <RecentItemContainer to={"playlist/" + id}>
      <RecentItemImage>
        <img src={src} alt="imagen" />
      </RecentItemImage>
      <span>{title}</span>
    </RecentItemContainer>
  )
}

export default RecentItem