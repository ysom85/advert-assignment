import { Box, TextField, Button } from '@mui/material'
import React from 'react'

const Content = () => {
  return (
    <Box sx={{
        background: 'white',
        height: 500,
        width: 500,
        marginLeft: 80,
        
    }}>
    <TextField variant='standard' label="Your Name" sx={{width: 100}}></TextField>
    <TextField variant='standard' label="Your Email" sx={{width: 100}}></TextField>
    <TextField variant='standard' label="Your City" sx={{width: 100}}></TextField>
    <TextField variant='standard' label="You are looking For" sx={{width: 100}}></TextField>
    <Button variant="contained">Submit</Button>
     
    </Box>
  )
}

export default Content
