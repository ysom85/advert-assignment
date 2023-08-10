import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import {Box} from '@mui/material'
const Heading = () => {
  return (
    <div style={{marginBottom: " 0%"}}>
      <div className='NavBar'>
        <Box sx={{color: 'white', height: 10, width: '100%',fontSize: ' 25px'}}>
       Our working projects are symbol of modern Civilization
       .
        </Box>   
        <Box sx={{marginRight:90, marginTop:10, width: ' 100%', height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    </div>
    </div>
  )
}

export default Heading
const itemData = [
    {
      img: 'https://www.newhouserealty.co.in/admin/uploads/properties/1899134901.jpg',
      title: 'Bed',
      author: 'swabdesign',
    },
    {
      img: 'https://www.newhouserealty.co.in/admin/uploads/properties/2091215528.jpg',
      title: 'Books',
      author: 'Pavel Nekoranec',
    },
    {
      img: 'https://www.newhouserealty.co.in/admin/uploads/properties/584031722.jpg',
      title: 'Sink',
      author: 'Charles Deluvio',
    },
    {
      img: 'https://www.newhouserealty.co.in/admin/uploads/properties/601738291.jpg',
      title: 'Kitchen',
      author: 'Christian Mackie',
    },
    {
      img: 'https://www.newhouserealty.co.in/admin/uploads/properties/1774843225.jpg',
      title: 'Blinds',
      author: 'Darren Richardson',
    },
    {
      img: 'https://www.newhouserealty.co.in/admin/uploads/properties/1413432177.jpg',
      title: 'Chairs',
      author: 'Taylor Simpson',
    },
    {
      img: 'https://www.newhouserealty.co.in/admin/uploads/properties/1413432177.jpg',
      title: 'Laptop',
      author: 'Ben Kolde',
    },
    {
      img: 'https://www.newhouserealty.co.in/admin/uploads/properties/1351336111.jpeg',
      title: 'Doors',
      author: 'Philipp Berndt',
    },
    {
      img: 'https://www.newhouserealty.co.in/admin/uploads/properties/1865991502.webp',
      title: 'Coffee',
      author: 'Jen P.',
    },
    {
      img: 'https://www.newhouserealty.co.in/admin/uploads/properties/1865991502.webp',
      title: 'Storage',
      author: 'Douglas Sheppard',
    },
    {
      img: 'https://www.newhouserealty.co.in/admin/uploads/properties/906336818.jpeg',
      title: 'Candle',
      author: 'Fi Bell',
    },
    {
      img: 'https://www.newhouserealty.co.in/admin/uploads/properties/1133578060.jpeg',
      title: 'Coffee table',
      author: 'Hutomo Abrianto',
    },
  ];