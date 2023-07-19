import { Paper, styled } from '@mui/material'
import Title from './Title';
import React, { useEffect, useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

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
  
const ShowList = () => {
    // const [data, setData] = useState(null)
    // const [isLoading, setLoading] = useState(false)

    return (
        <>
            <Item>
                <Title prop={"Song"} />
                <Title prop={"Artist"} />
            </Item>
        </>
    )
}

export default ShowList;