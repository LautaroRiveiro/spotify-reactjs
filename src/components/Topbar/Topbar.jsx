import { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { SearchBar } from '../SearchBar'
import { Logout, Navigator, TopbarContainer, User } from './styles'

const Topbar = () => {

  const { user: { display_name, images } } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  const handleBack = () => {
    navigate(-1)
  }
  const handleForward = () => {
    navigate(1)
  }

  const TopbarCenterElement = () => {
    const path = location.pathname.split("/")[1]
    if (path === 'search') {
      return <SearchBar />
    } else {
      return null
    }
  }

  return (
    <TopbarContainer>
      <Navigator>
        <div onClick={handleBack}>
          <span>◀</span>
        </div>
        <div onClick={handleForward}>
          <span>▶</span>
        </div>
      </Navigator>
      <TopbarCenterElement />
      <User>
        <img src={images[0]?.url || './assets/images/avatar.jpg'} alt="user" />
        <span>{display_name}</span>
        <Logout to="/logout">❎</Logout>
      </User>
    </TopbarContainer>
  )
}

export default Topbar