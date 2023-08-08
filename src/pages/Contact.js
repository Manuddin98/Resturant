import React from 'react'
import Layouts from '../components/Layout/Layouts'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layouts>
      
      <Box sx={{my:5, ml:10,'&hu':{fontWeight:'bold',mb:2}}}>
        <Typography variant='h4'>
          Contact My Resturant
        </Typography >
      
        <p>
          Newspapers are the mirror of the world. It plays an important role in modern civilization. Newspapers are published in different languages ​​in our country. It helps us to gain common sense. Provides reviews and puzzles on newspaper reports, speeches, business, movies, sports, etc. Newspapers are read for both profit and pleasure. It brings to the public valuable perspectives, acts of injustice, oppression and maladministration. It angered the people and criticized the authorities for their failures. It forms public opinion. Therefore freedom of the press should not be hampered.


          </p>

        

      </Box>

      <Box sx={{m:3, width:'600px',ml:10,'@media (max-width:600px)':{
        width:'300px',
      }}}>
        <TableContainer component={Paper}>
              <Table arial-label='contact table'>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{bgcolor:'black' , color:'white' }} align='center'>Contact Details</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                         <SupportAgentIcon sx={{color:'red',pt:1}}/> 1800-000-000 (tollfree)
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                         <MailIcon sx={{color:'skyblue',pt:1}}/> help@myrest.com
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                         <CallIcon sx={{color:'green',pt:1}}/> 123456789
                      </TableCell>
                    </TableRow>
                  </TableBody>
              </Table>

        </TableContainer>
      </Box>

    </Layouts>
  )
}

export default Contact