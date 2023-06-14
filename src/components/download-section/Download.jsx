import React from "react";
import { Col, Container, Row } from "reactstrap";
import appImg from '../../assets/images/app.png'
const Download = () => {
  return (
    <section data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
      <Container className="app__container bg-[#f5b70a] rounded-[10px] p-3">
        <Row>
          <Col lg="6" md="6">
            <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className="app__img mb-[-100px]">
              <img src={appImg} alt="" />
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="app__content mt-20">
              <h5 className="text-[#0a071a] mt-5">Download our app</h5>
              <h2 id="titllll" style={{color:'#0a071a'}} className="mb-4 text-[#0a071a] ">
                Never Feel Hungry! Download Our Mobile App Order Delicious Food
              </h2>
              <p className="text-[#696969]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ac consequat risus. Aliquam porttitor mauris non mi gravida
                ultrices. Ut eleifend nibh eget orci rutrum, a fermentum enim
                aliquet. Sed in nisl lacinia, eleifend magna vel, gravida urna.
                Integer sit amet tellus auctor, molestie quam vitae, viverra
                justo. Nam vel ipsum ante.
              </p>
              <div className="app__btns flex items-center gap-5">
                <button className="btn__apple flex items-center gap-3 bg-[#0a071a] border-none text-[#fff] py-[7px] px-[25px] rounded-[5px]">
                  <i className="ri-apple-line"></i>
                  <a href="/#"  className="text-[#fff] bg-[#0a071a]">Apple Store</a>
                </button>
                <button className="btn__apple flex items-center gap-3 bg-[#fff] border-none text-[#0a071a] py-[7px] px-[25px] rounded-[5px]">
                  <i className="ri-google-play-line text-[#0a071a] "></i>
                  <a href="/#" className="text-[#0a071a] bg-[#fff]">Google Play  </a>
                </button>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Download;
