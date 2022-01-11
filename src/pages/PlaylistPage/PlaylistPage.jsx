import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import spotifyApi from '../../services/services'

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--text-accent-color);
`
const PlaylistPage = () => {

  const params = useParams()
  const [playlist, setPlaylist] = useState(null)
  useEffect(() => {
    spotifyApi.getPlaylist(params.id)
    .then((data)=>{
      console.log({data})
      const _playlist = {
        id: data.id,
        followers: data.followers.total,
        description: data.description,
        images: data.images,
        name: data.name,
        owner: data.owner.display_name,
        primary_color: data.primary_color,
        public: data.public,
        tracks: data.tracks.items
      }
      setPlaylist(_playlist)
    })
  }, [params])

  return (
    <FeedContainer>
      {params.id}
    </FeedContainer>
  )
}

export default PlaylistPage