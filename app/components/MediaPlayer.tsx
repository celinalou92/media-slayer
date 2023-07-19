"use client"
import SpotifyPlayer from 'react-spotify-web-playback';


export interface MediaPlayerProps {
  playing: boolean
}


// https://developer.spotify.com/documentation/web-playback-sdk/tutorials/getting-started
const token = ""

const MediaPlayer = ({ playing }: MediaPlayerProps) => {

  return (
    <SpotifyPlayer
    data-testid="MediaPlayer"
      token={token}
      uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']}
      play={playing}
    />
  )
}

export default MediaPlayer;