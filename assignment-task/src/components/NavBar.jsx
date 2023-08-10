import { Box } from '@mui/material'
import React from 'react'
import './Components.css'
const NavBar = () => {
  return (
    <div className='NavBar'>
        <Box sx={{color: 'white', height: 10, width: '100%',fontSize: ' 25px'}}>
        Welcome! Kindly see our some awesome Projects.    
        </Box>   
    </div>
  )
}

export default NavBar
