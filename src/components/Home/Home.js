import React from 'react';
import Card from "../Card/Card";

const Home = ({shoes ,setShoes}) => {

        return (
            <div>
                <Card shoes={shoes} setShoes={setShoes}  />

            </div>


        )



};

export default Home;