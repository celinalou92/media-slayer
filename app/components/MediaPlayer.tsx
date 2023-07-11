"use client"
import SpotifyPlayer from 'react-spotify-web-playback';


export interface MediaPlayerProps {
  playing: boolean
}

const MediaPlayer = ({ playing }: MediaPlayerProps) => {

  return (
    <SpotifyPlayer
      token="BQDVyH1E7tpMeyG3_6O9otDenNWAkvtGQG4gbGgR1309r7YVgIl_B_yKQfjXeCLpZzU1sxAmWeCTXl2BDnpoZ_JReKAlzZGA4YEly1DlZXMFe60l-bfACFqGa8LeA0-6m-BxwyCeKC2MFKG-ihWrK7E7YGkcbrRMpfCf0sVPpAzoIZiBxz5ilRtQbcfQfGw04i7TYQG1"
      uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']}
      play={playing}
    />
  )
}

export default MediaPlayer;