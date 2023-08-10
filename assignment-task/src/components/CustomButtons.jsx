import React from 'react'
import { Box, Button } from '@mui/material'
const CustomButtons = () => {
  return (
    <Box  >
    <Button sx={{color: 'white'}} varient="text">Home</Button>
    <Button sx={{color: 'white'}} varient="text">About Us</Button>
    <Button sx={{color: 'white'}} varient="text">Projects</Button>
    <Button sx={{color: 'white'}} varient="text">Gallery</Button>
    <Button sx={{color: 'white'}} varient="text">Blogs</Button>
    <Button sx={{color: 'white'}} varient="text">Contact Us</Button>
    <Button variant="outlined"   style={{ fontWeight: "bold", width: 100, background: '#ffffff'}}>LOGIN</Button>
    </Box>
    
    
  )
}

export default CustomButtons
