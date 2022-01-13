import styled from 'styled-components'

export const ApplicationLayout = styled.div`
  background-color: var(--background-color);
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: var(--text-color);
`

export const ApplicationContainer = styled.main`
  flex-grow: 1;
  border: var(--dev-border);
  display: flex;
  flex-direction: row;
`

export const FeedContainer = styled.section`
  flex: 4 1 0;
  border: var(--dev-border);
  display: flex;
  flex-direction: column;
  position: relative;
`

export const OutletContainer = styled.div`
  padding: 4rem 1rem 0 1rem;
  flex-grow: 1;
  border: var(--dev-border);
  height: 0; // WOOOW
  overflow-y: overlay;
  &::-webkit-scrollbar {
    display: none;
  }
`