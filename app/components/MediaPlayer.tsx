import { Paper, styled, Grid } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const MediaPlayer = ({window, pag}) => {
    return (
        <Grid item xs={12}>
        <Item>{window}</Item>
        <Item>{pag}</Item>
      </Grid>
    )
}

export default MediaPlayer;