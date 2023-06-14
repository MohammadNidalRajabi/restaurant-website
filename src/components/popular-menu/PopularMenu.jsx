import React from 'react'
import {popularMenuFood} from './../../assets/fake-data/products'
import { Col, Container, Row } from 'reactstrap'
import ProductCard from '../product-card/ProductCard'
const PopularMenu = () => {
  return <section id="Recipes" className='pt-0'>
    <Container className='Contianer'>
        <Row  className='row leading-12'>
            <Col lg='12' className='mb-5'>
            <h2>Popular food menu</h2>
            </Col>
           
        
        {
            popularMenuFood?.map((item,index)=>(
                <Col data-aos="zoom-in-right" data-aos-duration="3000"  lg='3' key={index}>

                    <ProductCard data-aos="zoom-in-up" data-aos-duration="3000" item={item}/>
                    {/* <div className='single__prouduct'>
                        <div className='prouduct__img'>
                            <img src={item.imgUrl} alt="" className='w-full'/>
                        </div>
                        <div className='producat__content'>
                            <div className='rating text-center'>
                                <span><i className='ri-star-s-fill'></i></span>
                                <span><i className='ri-star-s-fill'></i></span>
                                <span><i className='ri-star-s-fill'></i></span>
                                <span><i className='ri-star-s-fill'></i></span>
                                <span><i className='ri-star-s-fill'></i></span>
                            </div>
                            <h6>{item.title}</h6>
                            <div className='flex items-center justify-between'>
                                <span className='price'>Price: $<span></span>{item?.price}</span>
                                <span><i className='ri-shopping-cart-line'></i></span>
                            </div>
                        </div>
                    </div>       */}
                </Col>
            ))
        }
        </Row>
    </Container>
    
  </section>
}

export default PopularMenu;