"use client"
import React, { useEffect } from 'react';
import styles from './page.module.css'
import { Box, Grid } from '@mui/material'
import { mockMediaData } from '@/utils/mockData';
import PlayerButton from './components/PlayerButton';
import Title from './components/Title';
import MediaPlayer from './components/MediaPlayer';
import { useState } from 'react';

const callAPI = async () => {
  try {
      const res = await fetch(
          `https://api.spotify.com/v1/search?q=bob&type=artist&market=us&limit=10&offset=0`,
          {
              method: 'GET',
              headers: {
                  'Authorization': ''
              },
          }
      );
      const data = await res.json();
      console.log(data);
  } catch (err) {
      console.log(err);
  }
};



export default function Home() {
  const [playerState, setPlayerState] = useState();
  const [play, setPlay] = useState(false);

  // const [data, setData] = useState(null)
  // const [isLoading, setLoading] = useState(false)

  // const baseURI = `https://api.spotify.com/v1/search?`
  // const searchParams = `q=bob&type=artist&market=us&limit=10&offset=0`

  useEffect(() => {
    callAPI()
  }, [])



  const playerStateArr =
    ["Back", "Pause/Play", "Next"]
  return (
    <main className={styles.main}>
      <Box sx={{ flexGrow: 1 }}>
          <MediaPlayer window={mockMediaData.media} pag={mockMediaData.pag} playing={play} />
        <Grid container spacing={2}>
          <Title prop={"Song"} />
          <Title prop={"Artist"} />
          <Grid container display={"flex"} direction={"row"} justifyContent={"space-evenly"} item xs={12}>
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