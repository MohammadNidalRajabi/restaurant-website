import React from "react";
import { Col, Container, Row } from "reactstrap";
import pasteImg from "../../assets/images/pasta.png";
const ChooseUs = () => {
  return (
    <section  data-aos="flip-left" data-aos-duration="3000">
      <Container>
        <Row>
          <Col lg="6">
            <img src={pasteImg} alt="" />
          </Col>
          <Col lg="6">
            <div className="choose__content text-[#fff] mb-[15px]">
              <h4 className="">who we are?</h4>
              <h2 className="">Take a look at the benefits we offer you</h2>
              <p> 
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
            </div>
            <div className="features mt-5 lg:flex lg:items-center lg:flex-col lg:justify-center">
                <div className="feature1 flex  items-center justify-between gap-5 mt-3">
                    <div className="single__feature">
                        <span className="w-[50px] h-[50px] rounded-full bg-[#f76e11] flex items-center justify-center mb-[10px]">
                            <i className="feature__icon ri-truck-line text-[1.5rem]"></i>
                        </span>
                        <h6 className="text-[#f5b70a] mt-[10px]">Free Home Delivery</h6>
                        <p className="text-[0.7rem]">lorem ipsum dololr sit ghjkhjkhjhjk.</p>
                    </div>
                    <div className="single__feature">
                        <span className="w-[50px] h-[50px] rounded-full bg-[#239b6f] flex items-center justify-center mb-[10px]">
                            <i className="ri-money-dollar-circle-line text-[1.5rem]"></i>
                        </span>
                        <h6 className="text-[#f5b70a] mt-[10px]">Return & Refund</h6>
                        <p className="text-[0.7rem]">lorem ipsum dololr sit ghjkhjkhjhjk.</p>
                    </div>
                </div>
                <div className="feature1 flex  items-center justify-between gap-5 mt-3 ">
                    <div className="single__feature">
                        <span className="w-[50px] h-[50px] rounded-full bg-[#7865ff] flex items-center justify-center mb-[10px]">
                            <i className="ri-secure-payment-line text-[1.5rem]"></i>
                        </span>
                        <h6 className="text-[#f5b70a] mt-[10px]">Secure Payment</h6>
                        <p className="text-[0.7rem]">lorem ipsum dololr sit ghjkhjkhjhjk.</p>
                    </div>
                    <div className="single__feature">
                        <span className="w-[50px] h-[50px] rounded-full bg-[#f5b70a] flex items-center justify-center mb-[10px]">
                            <i className="ri-24-hours-line text-[1.5rem]"></i>
                        </span>
                        <h6 className="text-[#f5b70a] mt-[10px]">24/7 Hours Support</h6>
                        <p className="text-[0.7rem]">lorem ipsum dololr sit ghjkhjkhjhjk.</p>
                    </div>
                </div>
                
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
