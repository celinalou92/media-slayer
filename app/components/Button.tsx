import { Button, Paper, styled } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const PlayerButton = ({prop }) => {
   const clickEvent = (prop) => console.log(prop)
    return (
        <Button 
        variant='outlined'
        onClick={() => clickEvent(prop)}
        >{prop}</Button>
    )
}

export default PlayerButton;