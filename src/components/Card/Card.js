import React from 'react';
import notImage from "../../assets/notimg.png";

const Card = ({shoes,cart,setCart}) => {


    const addCart = (id) => {
        const find = cart.findIndex((item) => item.shoe[0].id === id)


        if (find >= 0) {

            cart[find].count++
            setCart([...cart])
        } else {
            setCart([...cart, {
                shoe: shoes.filter(item => item.id === id),
                count: 1,
            }])
        }
    }

    return (
        <section className='home'>
            <div className="container">
                <div className="row">
                <div className="input-field col s12 card__input">
                    <input type="search" id='search' className="validate"/>
                    <label htmlFor="search">Search</label>

                </div>
                </div>
                <div className="row">
                    {shoes.map((item) => {
                        return(
                            <div className="col s12 m4" key={item.id}>
                                <div className="card">
                                    <div className="card-image">
                                        <img className='home__card-image' src={item.media.thumbUrl === null ? notImage : item.media.thumbUrl} alt='img'/>
                                    </div>
                                    <div className="card-content">
                                        <h3 className="home__card-title">{item.shoe.length < 40 ? item.shoe : item.shoe.slice(0, 39)} </h3>
                                        <p className='home__card-brand'><b>Brand </b>: {item.brand} {item.year}</p>
                                        <p  className='home__card-brand'><b>Gender</b>: {item.gender}</p>
                                        <p  className='home__card-brand home__card-color'><b>Colorway</b>: {item.colorway}</p>
                                        <p  className='home__card-brand  home__card-price'><b>Price</b>: {item.retailPrice} $</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="#">Learn more</a>
                                        <button className='card__btn' type='button' onClick={() => addCart(item.id)}>Buy</button>
                                    </div>
                                </div>
                            </div >
                        )
                    })}

                </div>
            </div>
        </section>
    );
};

export default Card;