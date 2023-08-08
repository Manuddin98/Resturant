import React from 'react'
import Layouts from '../components/Layout/Layouts'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layouts>
        <Box
        sx={
          {
            my:15,
            textAlign:'center',
            p:2,
            '& h4':{
              fontWeight:'bold'
            },
            '& p':{
              textAlign:'justify',
            },
            '@media (max-width:600px)':{
              mt:0,
              '& h4':{
                fontSize:'1.5rem',
              }

            },
          }
        }>
          <Typography variant="h4">
            Welcome To My Resturant
          </Typography>
          <p>
          Newspapers are the mirror of the world. It plays an important role in modern civilization. Newspapers are published in different languages ​​in our country. It helps us to gain common sense. Provides reviews and puzzles on newspaper reports, speeches, business, movies, sports, etc. Newspapers are read for both profit and pleasure. It brings to the public valuable perspectives, acts of injustice, oppression and maladministration. It angered the people and criticized the authorities for their failures. It forms public opinion. Therefore freedom of the press should not be hampered.


          </p>

          <br/>

          <p>
          Newspapers are the mirror of the world. It plays an important role in modern civilization. Newspapers are published in different languages ​​in our country. It helps us to gain common sense. Provides reviews and puzzles on newspaper reports, speeches, business, movies, sports, etc. Newspapers are read for both profit and pleasure. It brings to the public valuable perspectives, acts of injustice, oppression and maladministration. It angered the people and criticized the authorities for their failures. It forms public opinion. Therefore freedom of the press should not be hampered.


          </p>

          
        </Box>
        </Layouts>
  )
}

export default About