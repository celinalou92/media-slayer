import { Button, Paper, styled } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const PlayerButton = ({ prop, playerState, setPlayerState }) => {
    const clickHandler = (e) => {
        setPlayerState(e.target.value)
        console.log(playerState)
    };
    console.log(playerState)
    return (
        <Button
            variant='outlined'
            value={prop}
            onClick={clickHandler}
        >{prop}</Button>
    )
}

export default PlayerButton;