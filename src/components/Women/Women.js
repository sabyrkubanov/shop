import React from 'react';
import Card from "../Card/Card";

const Women = ({shoes,cart,setCart}) => {
    return (

    <Card cart={cart} setCart={setCart} shoes={shoes.filter((item) => item.gender === 'women' || item.gender === 'unisex')}/>

    );
};

export default Women;