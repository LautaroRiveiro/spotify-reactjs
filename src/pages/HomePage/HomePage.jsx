import styled from 'styled-components'

const HomeLayout = styled.div`
  background-color: var(--background-color);
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: var(--text-color);
`

const Player = styled.footer`
  height: 75px;
  border: 1px solid var(--primary-color);
  display: flex;

  & div {
    flex: 1 0 0;
    border: 1px solid var(--primary-color);
  }
`

const Sidebar = styled.aside`
  flex: 1 1 0;
  border: 1px solid var(--primary-color);
  display: flex;
  flex-direction: column;

  & nav {
    border: 1px solid var(--primary-color);
  }

  & section {
    flex-grow: 1;
    border: 1px solid var(--primary-color);
  }
`

const HomeContainer = styled.main`
  flex-grow: 1;
  border: 1px solid var(--primary-color);
  display: flex;
  flex-direction: row;
`

const FeedContainer = styled.section`
  flex: 4 1 0;
  border: 1px solid var(--primary-color);
  display: flex;
  flex-direction: column;
`

const Topbar = styled.div`
  height: 25px;
  border: 1px solid var(--primary-color);
  display: flex;
  justify-content: space-between;
`

const Feed = styled.div`
  flex-grow: 1;
  border: 1px solid var(--primary-color);
`

const HomePage = () => {
  return (
    <HomeLayout>
      <HomeContainer>
        <Sidebar>
          <nav>
            <div>Inicio</div>
            <div>Buscar</div>
            <div>Tu biblioteca</div>
            <hr />
            <div>Crear playlist</div>
            <div>Tus me gusta</div>
          </nav>
          <section>
            {
              ['Playlist1', 'Nueva', ''].map((playlist)=>(
                <div>{playlist}</div>
              ))
            }
          </section>
        </Sidebar>
        <FeedContainer>
          <Topbar>
            <div>Navegación</div>
            <div>Usuario</div>
          </Topbar>
          <Feed>
            HomePage
          </Feed>
        </FeedContainer>
      </HomeContainer>
      <Player>
        <div></div>
        <div></div>
        <div></div>
      </Player>
    </HomeLayout>
  )
}

export default HomePage