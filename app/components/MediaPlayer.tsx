"use client"
import SpotifyPlayer from 'react-spotify-web-playback';


export interface MediaPlayerProps {
  playing: boolean
}

const MediaPlayer = ({ playing }: MediaPlayerProps) => {

  return (
    <SpotifyPlayer
    data-testid="MediaPlayer"
      token=""
      uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']}
      play={playing}
    />
  )
}

export default MediaPlayer;