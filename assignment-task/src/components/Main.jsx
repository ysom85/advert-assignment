import React from 'react'
import { Box, Typography } from '@mui/material'
const Main = () => {
  return (
    <div className='Main'>
      <Box sx={{height: 5, display: 'flex'}} >
        <Box sx={{height: 250, background: 'gray', width: '75%'}}>
            <div style={{marginLeft: 10}}>
                <Typography variant='h1' sx={{textAlign: 'left', color:' white'}}>Hii, </Typography>
                <Typography variant='h3' sx={{textAlign: 'left'}}>Are you planning to start a new bussiness??</Typography>
                <Typography variant='h3' sx={{textAlign: 'left'}}>Or Searhing Places for Living??</Typography>
          
            </div>
        
        </Box>
        <img height={250} width={'25%'} src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fd8878de7-67ea-4d91-a0c3-35170bda8a68_450x457.jpeg" alt="I thinking man" title='a man' />
      </Box>
    </div>
  )
}

export default Main
