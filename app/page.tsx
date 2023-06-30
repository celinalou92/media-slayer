"use client"
import styles from './page.module.css'
import { Container, Stack, Paper, Box, Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import { mockMediaData } from '@/utils/mockData';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    <main className={styles.main}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>{mockMediaData.category}</Item>
            <Item>{mockMediaData.price}</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>title</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>author</Item>
          </Grid>
          <Grid display={"flex"} direction={"row"} justifyContent={"space-evenly"} item xs={12}>
            <Item>button</Item>
            <Item>button</Item>
            <Item>button</Item>
          </Grid>
        </Grid>
      </Box>
    </main >
  )
}