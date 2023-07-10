"use client"
import ReactPlayer from 'react-player'

export interface MediaPlayerProps {
  window: string,
  pag: string,
  playing: boolean
}

const MediaPlayer = ({ window, pag, playing }: MediaPlayerProps) => {

  return (
      <ReactPlayer
        playing={playing}
        controls={playing}
        width={"auto"}
        url='https://www.youtube.com/live/UC1IyzbaWVo?feature=share'
      />
  )
}

export default MediaPlayer;