import styled from 'styled-components'

const LoadingLayout = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--background-color-dark);
`

const Loading = () => {
  return (
    <LoadingLayout />
  )
}

export default Loading