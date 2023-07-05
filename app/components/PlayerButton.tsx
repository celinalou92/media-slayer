import { Button } from '@mui/material'

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