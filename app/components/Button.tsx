import { Button, Paper, styled } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const PlayerButton = ({ prop, play, setPlay, setPlayerState }: any) => {

    const clickHandler = (e) => {
        const updatedP = e.target.value
        if(prop == "Pause/Play") {
            setPlay(!play)
            setPlayerState(updatedP)
            console.log({"Play selected": play})
        }
        setPlayerState(updatedP)
    };
    
    return (
        <Button
            variant='outlined'
            value={prop}
            onClick={clickHandler}
        >{prop}</Button>
    )
}

export default PlayerButton;