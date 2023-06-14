import React from "react";
import Slider from "react-slick";
import {sliderData} from '../../assets/fake-data/slider'
import { Container } from "reactstrap";
const HeroSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        autoplaySpeed:3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
      };
  return (
  <section id="Home">
    <Container className="lg:w-80 sm:w-80" >
        <Slider {...settings}>
            {
                sliderData?.map((item,index)=>(
                    <div key={index}>
                        <div className="slider__wrapper flex items-center justify-between pt-5">
                            <div className="slider__content w-1/2 ps-2">
                                <h2 className="mb-3">{item?.title}</h2>
                                <p>{item?.desc}</p>
                                <button className="btn_ py-[7px] px-[25px] rounded-[5px] bg-[#f76e11] text-[#fff] text-[0.9rem] mt-[30px]  transition-all duration-300 hover:bg-[#fff] hover:text-[#0a071a]">Explore Food</button>
                            </div>
                            <div className="slider__img w-1/2">
                                    <img src={item?.imgUrl} alt=""  className="w-full"/>
                            </div>
                        </div>

                    </div>
                ))
            }
        </Slider>
    </Container>
  </section>
  );
};

export default HeroSlider;
