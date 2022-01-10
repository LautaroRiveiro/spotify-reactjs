import styled from 'styled-components'

const PlayerContainer = styled.footer`
  height: 75px;
  border: 1px solid var(--primary-color);
  display: flex;

  & div {
    flex: 1 0 0;
    border: 1px solid var(--primary-color);
  }
`

const Player = () => {
  return (
    <PlayerContainer>
      <div></div>
      <div></div>
      <div></div>
    </PlayerContainer>
  )
}

export default Player