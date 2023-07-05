import { Paper, styled, Grid } from '@mui/material'
import ReactPlayer from 'react-player'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const MediaPlayer = ({ window, pag, playing }) => {
  return (
    <Grid item xs={12}>
    {/* // Render a YouTube video player */}
      <ReactPlayer 
      playing={playing}
      controls={true}
      width={"auto"}
      url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
        <Item>{window}</Item>
        <Item>{pag}</Item>
      </Grid>
  )
}

export default MediaPlayer;