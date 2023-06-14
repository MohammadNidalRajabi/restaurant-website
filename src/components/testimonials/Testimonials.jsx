import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import testimonialsImg from "../../assets/images/review1.png";
const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <section className="lg:flex lg:items-center lg:justify-center" data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">
      <Container>
        <Row className="">
          <Col lg="8" className="m-auto">
            <div className="slider__wapper mx-3 flex gap-5 items-center justify-center">
              <div className="slider__content w-1/2">
                <h2 className="mb-5">What our customer are saying</h2>
                <Slider  {...settings}>
                  <div  >
                    <div className="single__testimonial text-[#f5b70a] text-[1.1rem]">
                      <p className="review__content text-[#fff] text-[0.8rem]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla ac consequat risus. Aliquam porttitor mauris non
                        mi gravida ultrices. Ut eleifend nibh eget orci rutrum,
                        a fermentum enim aliquet. Sed in nisl lacinia, eleifend
                        magna vel, gravida urna. Integer sit amet tellus auctor,
                        molestie quam vitae, viverra justo. Nam vel ipsum ante.
                      </p>
                      <h6 className="text-[#f5b70a] text-[1.1rem]">
                        MR. L
                      </h6>
                      <p className=" text-[1rem]">chef</p>
                    </div>
                  </div>
                  <div>
                    <div  className="single__testimonial text-[#f5b70a] text-[1.1rem]">
                      <p className="review__content text-[#fff] text-[0.8rem]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla ac consequat risus. Aliquam porttitor mauris non
                        mi gravida ultrices. Ut eleifend nibh eget orci rutrum,
                        a fermentum enim aliquet. Sed in nisl lacinia, eleifend
                        magna vel, gravida urna. Integer sit amet tellus auctor,
                        molestie quam vitae, viverra justo. Nam vel ipsum ante.
                      </p>
                      <h6 className="text-[#f5b70a] text-[1.1rem]">
                        MR. Mahmoud RH
                      </h6>
                      <p className=" text-[1rem]">customer</p>
                    </div>
                  </div>
                  <div>
                    <div className="single__testimonial text-[#f5b70a] text-[1.1rem]">
                      <p className="review__content text-[#fff] text-[0.8rem]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla ac consequat risus. Aliquam porttitor mauris non
                        mi gravida ultrices. Ut eleifend nibh eget orci rutrum,
                        a fermentum enim aliquet. Sed in nisl lacinia, eleifend
                        magna vel, gravida urna. Integer sit amet tellus auctor,
                        molestie quam vitae, viverra justo. Nam vel ipsum ante.
                      </p>
                      <h6 className="text-[#f5b70a] text-[1.1rem]">
                        MR. Mohammad NR
                      </h6>
                      <p className=" text-[1rem]">customer</p>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="slider___img">
                <img src={testimonialsImg} alt="" className="w-full" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
