import React from 'react'
import { Toolbar,AppBar,styled,Box,Typography, TextField, Button } from '@mui/material';
 const StyledHeader = styled(AppBar)`
background: #fff;
height: 200px;
borderBottomColor: 'yellow';
`;
const Header = () => {
  return (
    <div>
       <StyledHeader sx={{
        height: 100,
        borderBottom: 5,
        borderColor: '#ffd54f'
       }}>  
               
            
            
       </StyledHeader>

    </div>
  )
}

export default Header
