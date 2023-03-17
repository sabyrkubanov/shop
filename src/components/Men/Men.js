import React from 'react';
import Card from "../Card/Card";

const Men = ({shoes,cart,setCart}) => {
    return (

    <Card cart={cart} setCart={setCart} shoes={shoes.filter((item) => item.gender === 'men' || item.gender === 'unisex')}/>

)


};

export default Men;