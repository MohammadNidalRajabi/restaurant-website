import React, { useEffect, useState } from 'react'
import ProductCard from '../product-card/ProductCard';
import { fastFoodProducts,riceMenuProducts,pizzaProducts,dessertProducts,coffeeProducts } from '../../assets/fake-data/products';
import { Col, Container, Row } from 'reactstrap';
const MenuPack = () => {
    const categories=[{lable:'Fast Food',title:'fast-food'},{lable:'Rice & Salad Menu',title:'rice-menu'},{lable:'Pizza',title:'pizza'},{lable:'Desserts',title:'desserts'},{lable:'Coffee',title:'coffee'}];
    const activeBurronClass='bg-[#f76e11]';
    const [filter,setFilter]=useState('fast-food');
    const [products,setProducts]=useState(fastFoodProducts);
    useEffect(()=>{
        switch (filter) {
            case
             "fast-food":
            setProducts(fastFoodProducts);
              break;

              case
             "rice-menu":
            setProducts(riceMenuProducts);
              break;

              case
             "pizza":
            setProducts(pizzaProducts);
              break;

              case
             "desserts":
            setProducts(dessertProducts);
              break;

              case 
              "coffee":
            setProducts(coffeeProducts);
              break;
              default:
                break;
          }
    },[filter]);
  return <section id="Menu">
    <Container>
        <Row>
            <Col lg='12' className='text-center mb-4' >
                <h3 className='menu__title text-[#f5b70a]'>Our Menu Pack</h3>
            </Col>
            <Col lg='12' className='text-center mb-5'>
                
                
                    <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='flex items-center justify-center gap-4 lg:flex-col lg:gap-1'>
                        {
                        categories?.map((item,index)=>(
                            <button onClick={()=>setFilter(item.title)}  key={index} className={` py-[7px] px-[25px] border-solid border-1 border-[#f76e11] rounded-[5px]  ${item.title===filter?activeBurronClass:"bg-transparent"}  text-[#fff] text-[0.9rem]   transition-all duration-300  hover:text-[#fff]`}>{item.lable}</button>

                              
                            

                        ))
                    }
                    </div>
                
            </Col>
            {
                products?.map((item,index)=>(<Col key={index} lg='3'>
                    <ProductCard item={item}/>
                    
                </Col>
                ))
            }
        </Row>
    </Container>
  </section>
}

export default MenuPack;