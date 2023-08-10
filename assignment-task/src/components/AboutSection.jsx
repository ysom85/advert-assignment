import React from 'react'
import { Link, Typography, colors } from '@mui/material'
const AboutSection = () => {
  return (
    <div style={{marginTop: '0px',marginLeft: "60%",marginBottom: "50%", textAlign:'left'}}>
      <Typography variant='h2' sx={{color: ' black'}}>About Us</Typography>
        <div  >
            <div style={{color: ' black'}}>Our Services</div>
            <ul>
                <li><Link href="#"  sx={{color: 'black'}} type='radio'>Buyinng</Link></li>
                <li><Link href="#"  sx={{color: 'black'}} type='radio'>Rent</Link></li>
                <li><Link href="#"  sx={{color: 'black'}} type='radio'>PG/Co-living</Link></li>
                <li><Link href="#"  sx={{color: 'black'}} type='radio'>Commercial use</Link></li>
                <li><Link href="#"  sx={{color: 'black'}} type='radio'>Co-working</Link></li>
                <li><Link href="#"  sx={{color: 'black'}} type='radio'>Plots/Land</Link></li>
                
            </ul>
            
            
            
            
            
            
            
        </div>
    </div>
  )
}

export default AboutSection
