import { Outlet } from "react-router-dom"
import { Player } from '../../components/Player'
import { Sidebar } from '../../components/Sidebar'
import { Topbar } from '../../components/Topbar'
import { ApplicationContainer, ApplicationLayout, FeedContainer, OutletContainer } from './styles'

const ApplicationPage = () => {
  return (
    <ApplicationLayout>
      <ApplicationContainer>
        <Sidebar />
        <FeedContainer>
          <Topbar />
          <OutletContainer>
            <Outlet />
          </OutletContainer>
        </FeedContainer>
      </ApplicationContainer>
      <Player />
    </ApplicationLayout>
  )
}

export default ApplicationPage