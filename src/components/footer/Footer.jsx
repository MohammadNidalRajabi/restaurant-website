import React from "react";
import { Col, Container, ListGroupItem, Row } from "reactstrap";

const Footer = () => {
  const footerQuickLinks = [
    {
      display: "Terms & Conditions",
      url: "/#",
    },
    {
      display: "Privacy Policy",
      url: "/#",
    },
    {
      display: "Return & Refund",
      url: "/#",
    },
    {
      display: "Payment Method",
      url: "/#",
    },
  ];
  const footerLinks = [
    {
      display: "About Us",
      url: "/#",
    },
    {
      display: "Menu",
      url: "/#",
    },
    {
      display: "Recippes",
      url: "/#",
    },
    {
      display: "Contact",
      url: "/#",
    },
  ];
  return (
    <footer id="About" className="footer pb-0">
      <div className="footer__top text-[0.8rem]">
        <Container>
          <Row>
            <Col lg="4" md="4" sm="6">
              <div className="logo">
                <h2 className="flex items-center gap-1 mb-4">
                  <span>
                    <i className="ri-restaurant-2-line"></i>
                  </span>
                  Chef Food
                </h2>
                <p className="">
                  Lorem ipsum" text is random and does not carry any meaning. It
                  is used purely as a placeholder.
                </p>
              </div>
            </Col>
            <Col lg="2" md="4" sm="6">
              <h5  id="title-footer"className="footer__link-title pl-0 ">Info Links</h5>
              <div className="flex flex-col gap-3 mb-3">
                {footerQuickLinks?.map((item, index) => (
                  <ListGroupItem key={index} className="link__item  bg-transparent text-[#c4c4c4]">
                    <a className="text-[#c4c4c4]" href={item.url}>{item.display}</a>
                  </ListGroupItem>
                ))}
             </div>
            </Col>
            <Col lg="2" md="4" sm="6">
              <h5 id="title-footer"className="footer__link-title pl-0 ">Quick Links</h5>
                    <div className="flex flex-col gap-3 mb-3">
                        
                {footerLinks?.map((item, index) => (
                    <ListGroupItem key={index} className="link__item  bg-transparent text-[#c4c4c4]">
                    <a className="text-[#c4c4c4]" href={item.url}>{item.display}</a>
                  </ListGroupItem>
                ))}
              
                </div>
            </Col>
            <Col lg="4" md="4" sm="6">
              <h5 id="title-footer"className="footer__link-title pl-0 ">Contact</h5>
              <ListGroupItem className=" link__item  bg-transparent text-[#c4c4c4] flex items-center gap-3">
              <i className="ri-map-pin-line text-[#c4c4c4]"></i> <span className="text-[#c4c4c4]"> Palestine, Hebron{""}</span>
              </ListGroupItem>
              <ListGroupItem className="link__item  bg-transparent text-[#c4c4c4] flex items-center gap-3">
              <i className="ri-mail-line text-[#c4c4c4]"> </i><span className="text-[#c4c4c4]">  example@gmail.com{""} </span>
              </ListGroupItem>
              <ListGroupItem className="link__item  bg-transparent text-[#c4c4c4] flex items-center gap-3">
              <i className="ri-phone-line text-[#c4c4c4]"></i><span className="text-[#c4c4c4]"> +972222222222{""}</span>
              </ListGroupItem>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer__bottom bg-[#141124] py-[20px] px-[0px] text-center flex items-center justify-center pb-0">
        <Container>
           
                    <p className="text-[0.9rem]">copyright 2023, devloped by MohammadNR.All rights reserved</p>
             
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
