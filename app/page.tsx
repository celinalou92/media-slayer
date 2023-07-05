"use client"
import React from 'react';
import styles from './page.module.css'
import { Box, Grid } from '@mui/material'
import { mockMediaData } from '@/utils/mockData';
import PlayerButton from './components/PlayerButton';
import Title from './components/Title';
import MediaPlayer from './components/MediaPlayer';
import { useState } from 'react';

export default function Home() {
  const [playerState, setPlayerState] = useState();
  const [play, setPlay] = useState(false);

  const playerStateArr =
    ["Back", "Pause/Play", "Next"]
  return (
    <main className={styles.main}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <MediaPlayer window={mockMediaData.media} pag={mockMediaData.pag} playing={play} />
          <Title prop={"Song"} />
          <Title prop={"Artist"} />
          <Grid display={"flex"} justifyContent={"space-evenly"} item xs={12}>
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