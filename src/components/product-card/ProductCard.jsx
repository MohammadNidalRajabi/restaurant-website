import React from 'react'

const ProductCard = (props) => {
    const {title,imgUrl,price} =props.item;
    const classForStartColor='text-[#f76e11]'
    return (
      <div data-aos="flip-right" className='single__product  bg-[#141124] rounded-[10px] cursor-pointer hover:shadow-[#f5b70a] hover:shadow-[5px_5px_10px_-5px_#f5b70a] mx-1 my-3'>
                          <div className='product__img'>
                              <img src={imgUrl} alt="" className='w-full'/>
                          </div>
                          <div className='product__content px-[20px] pb-[15px]'>
                              <div className='rating text-center mb-[10px]'>
                                  <span><i className={`ri-star-s-fill ${classForStartColor}`}></i></span>
                                  <span><i className={`ri-star-s-fill ${classForStartColor}`}></i></span>
                                  <span><i className={`ri-star-s-fill ${classForStartColor}`}></i></span>
                                  <span><i className={`ri-star-s-fill ${classForStartColor}`}></i></span>
                                  <span><i className={`ri-star-s-fill ${classForStartColor}`}></i></span>
                              </div>
                              <h6 className='text-[#f5b70a] text-center'>{title}</h6>
                              <div className='flex items-center justify-between'>
                                  <span  className='price flex items-center text-[#fff]'>Price: $<span className='text-[#f5b70a] text-[1.3rem] font-[500]'>{price}</span></span>
                                  <span className='shopping__icon w-[30px] h-[30px] rounded-[5px] bg-[#f76e11] flex items-center justify-center cursor-pointer'><i className='ri-shopping-cart-line'></i></span>
                              </div>
                          </div>
                      </div>      
    )
  }

export default ProductCard;