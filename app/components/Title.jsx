import { Paper, styled, Grid } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Title = ({prop}) => {
    return (
        <Grid data-testid="Title" item xs={6}>
        <Item>{prop}</Item>
      </Grid>
    )
}

export default Title;