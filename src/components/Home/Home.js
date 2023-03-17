import React from 'react';
import Card from "../Card/Card";

const Home = ({shoes,cart,setCart}) => {

        return (
            <div>
                <Card shoes={shoes} cart={cart} setCart={setCart} />

            </div>


        )



};

export default Home;