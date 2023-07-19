"use client"
import React, { useEffect, useState } from 'react';
import styles from './page.module.css'
import { Box, Grid } from '@mui/material'
import PlayerButton from './components/PlayerButton';
import MediaPlayer from './components/MediaPlayer';
import ShowList from './components/ShowList';


export default function Home() {
  const [playerState, setPlayerState] = useState();
  const [play, setPlay] = useState(false);
  const [hasWindow, setHasWindow] = useState(false);
  const playerStateArr =
  ["Back", "Pause/Play", "Next"]

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <main className={styles.main}>
      <Box width="70vw" sx={{ flexGrow: 1 }}>
        <ShowList/>
      </Box>
      <Box width="70vw" sx={{ flexGrow: 1 }}>
        {
          hasWindow &&
          <MediaPlayer
            playing={play}
          />
        }
        <Grid container spacing={2} width="70vw">
          <Grid container display={"flex"} direction={"row"} justifyContent={"space-evenly"} item xs={12} >
            {
              playerStateArr.map((playerValue, i) =>
                <PlayerButton
                  prop={playerValue}
                  key={i}
                  play={play}
                  playerState={playerState}
                  setPlayerState={setPlayerState}
                  setPlay={setPlay}
                />
              )
            }
          </Grid>
        </Grid>
      </Box>
    </main >
  )
}