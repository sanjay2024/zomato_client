import React, { useState } from "react";
import Slider from "react-slick";

// components
import PictureCarouselCard from "../PictureCarouselCard";
import { NextArrow, PrevArrow } from "../CarouselArrow";

function DiningCarousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [nightLife] = useState([
    {
      image:
        "https://b.zmtcdn.com/data/collections/c392056cfd7c02befe8d53f94ad2a908_1581933619.jpg?output-format=webp",
      title: "Best of Delhi NCR",
      places: "150 Places",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4dPRgYSLTe_Ol0N-FFMqRKxFCzcig6tjiNA&usqp=CAU",
      title: "Super Cafe",
      places: "70 Places",
    },
    {
      image:
        "https://blog.talkcharge.com/wp-content/uploads/2020/06/Neemrana-Fort.jpg",
      title: "Meet the Spartans",
      places: "40 Places",
    },
    {
      image:
        "https://5.imimg.com/data5/DW/DY/GLADMIN-59147111/delhi-sightseeing-tour-500x500.png",
      title: "Serve with Pleasure",
      places: "120 Places",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDFOLTbfQ2cKFPnhJZ7NGF0vEwggoljF3W_A&usqp=CAU",
      title: "Best of Delhi NCR",
      places: "10 Places",
    },
    {
      image:
        "https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_center,h_230,q_auto,w_305/v1/filestore/kx1ou9sigwd3v23egx51qu7rw1lg_1569307287_India_Gate.jpg.jpg",
      title: "Foody",
      places: "15 Places",
    },
  ]);

  return (
    <div className="w-full">
      <Slider {...settings}>
        {nightLife.map((nightLife, index) => (
          <PictureCarouselCard {...nightLife} key={index} />
        ))}
      </Slider>
    </div>
  );
}

export default DiningCarousel;
