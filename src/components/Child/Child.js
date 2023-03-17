import React from 'react';
import Card from "../Card/Card";

const Child = ({shoes,cart,setCart}) => {
    return (
        <Card cart={cart} setCart={setCart} shoes={shoes.filter((item) => item.gender === 'child' || item.gender === 'toddler')}/>

    );
};

export default Child;