import React, { useRef } from "react";
import { Container } from "reactstrap";
import "../../App.css";
const Header = () => {
  const navLinks = [
    {
      lable: "Home",
      url: "#Home",
    },
    {
      lable: "About",
      url: "#About",
    },
    {
      lable: "Menu",
      url: "#Menu",
    },
    {
      lable: "Recipes",
      url: "#Recipes",
    },
    {
      lable: "Contact",
      url: "#About",
    },
  ];
  const menuRef = useRef();
  const meneToggle = () => {
    if (menuRef.current.classList.toString().includes("lg:hidden")) {
      menuRef.current.classList.remove("lg:hidden");
    } else {
      menuRef.current.classList.toggle("lg:hidden");
      menuRef.current.classList.remove("lg:blokc");
    }


  };
  return (
    <header className="header bg-[#141124] w-full h-[80px] fixed  top-0 left-0 leading-[80px] z-10 lg:leading-[40px] lg:opacity-100 lg:py-[10px] lg:px-0">
      <Container>
        <div className="navigation flex items-center justify-between">
          <div className="logo">
            <h2 className="flex items-center gap-1 mb-0 lg:text-[1.5rem]">
              <span>
                <i className="ri-restaurant-2-line"></i>Chef Food
              </span>
            </h2>
          </div>
          <div
            className="nav__menu lg:fixed lg:top-0 lg:left-0 lg:w-full lg:h-full lg:z-[99] lg:bg-[#0a071a7e] lg:hidden"
            ref={menuRef}
          >
            <div className="nav__list__wrapper flex items-center justify-between gap-8 lg:absolute lg:top-0 lg:right-0 lg:w-[250px] lg:h-full lg:z-[10] lg:bg-[#141124] lg:flex-col-reverse lg:shadow-[5px_3px_15px_-5px_#f5b70a] lg:shadow-[#f5b70a] lg:justify-center lg:px-0 lg:py-20">
              <ul className="nav__list flex items-center mb-0 list-none gap-11 lg:flex-col lg:p-0 lg:gap-8">
                {navLinks?.map((item, index) => {
                  return (
                    <li key={index} className="nav__item">
                      <a
                        onClick={meneToggle}
                        className="text-[#fff] cursor-pointer transition-all duration-300 hover:text-[#F5B70A] lg:text-[0.9rem]"
                        href={item.url}
                      >
                        {item.lable}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <div className="menu__right">
                <div className="custom__search flex items-center py-[10px] px-[25px] h-[35px] rounded-[50px] bg-[#0a071a] lg:border border-[#c4c4c4] lg:px-5 lg:py-100 lg:text-[0.9rem] lg:h-[50px]">
                  <input
                    className="bg-transparent text-[#fff] outline-none"
                    type="text"
                    placeholder="search item"
                  />
                  <span>
                    <i className="ri-search-line cursor-pointer"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <span className="cart__icon relative  flex items-center justify-center z-40 w-[40px] h-[30px] rounded-[5px] bg-[#f76e11] gap-0 p-0 ">
            <i className="ri-shopping-basket-line"></i>
            <span className="badge absolute top-[-2px] right-[-3px] z-50 text-[#141124] text-[0.8rem] font-[700]"> 2</span>
          </span>
          <div className="mobile__menu cursor-pointer text-[1.5rem] hidden lg:block lg:text-[2.5rem] ">
            <span>
              <i className="ri-menu-line" onClick={meneToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
