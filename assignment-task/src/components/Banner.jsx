import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { styled } from '@mui/material';
import { bannerData } from '../constant/data'
const Image = styled('img')({
   marginTop: 250,
    height: 280,
    marginBottom: 20
});

 
const responsive = {
    superLargeDesktop: { 
        breakpoint: { max : 4000, min : 3000},
        items : 1
    },
    desktop: {
        breakpoint: { max : 3000, min : 1024},
        items : 1
    },
    tablet: {
        breakpoint: { max : 1024, min : 464},
        items : 1
    },
    mobile: {
        breakpoint: { max : 464, min : 0},
        items : 1
    }
    };
    
const Banner = () => {
    return (
        <Carousel responsive = {responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        showDots={true}
        arrows={false}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        slidesToSlide={1}
        dotListClass="custom-dot-list-style"
        itemClass="Carousel-item-padding-40-px"
        containerClass="carousel-container"
        >
             {
                bannerData.map(data => (
                    <Image width={'100%'} src = { data.url} key={data.id} alt="banner" />
                ))
             }
        </Carousel>
    )
}
export default Banner;