import React from 'react';
import Carousel from 'react-material-ui-carousel';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "./banner.css"

const Banner = () => {
    const data = [
        "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
        " https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
        "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
        "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50"
    ]

    return (
        <div>
            <Carousel
                NextIcon={<ArrowForwardIosIcon fontSize='large'/>}
                PrevIcon={<ArrowBackIosIcon fontSize='large'/>}
                className='carasousel'
                autoPlay={true}
                animation='slide'
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={true}
                navButtonsProps={{
                    style: {
                        background: "none",
                        color: "#fff",
                        borderRadius: 0,
                        marginTop: -22,
                        // height: "104px",
                    }
                }}
            >
                {data.map((image, i) => {
                    return (
                        <img src={image} alt="bnner_img" key={i} className='banner_img' />
                    )
                })}
            </Carousel>
        </div>
    )
}

export default Banner
