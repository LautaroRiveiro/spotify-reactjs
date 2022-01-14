import styled from 'styled-components'

export const PlayerContainer = styled.footer`
  height: 75px;
  border: var(--dev-border);
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 100%;

  & div {
    border: var(--dev-border);
  }
`

export const TrackControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
`
export const TrackControls = styled.div`
  display: flex;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  & span {
    margin: 0 0.25rem;
    cursor: pointer;
  }
`

export const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 35rem;

  > span:first-child {
    width: 3rem;
    text-align: end;
  }
`

export const ProgressBar = styled.div`
  width: 100%;
  background-color: var(--text-color);
  border-radius: 5px;
  margin: 0 1rem;
`
export const ProgressBarFill = styled.span`
  display: block;
  height: 3px;
  background-color: var(--text-accent-color);
  border-radius: 5px;
  transition: width 200ms ease-in;

  width: ${props => `${props.percent}%`};
  max-width: 100%;
`
export const CurrentTrackInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;

  & img {
    height: 100%;
    aspect-ratio: 1/1;
  }

  & div {
    flex-grow: 1;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    font-size: 0.85rem;

    & span:first-child {
      font-weight: bold;
      color: var(--text-accent-color);
    }
  }

  > span {
    font-size: 1.3rem;
  }
`