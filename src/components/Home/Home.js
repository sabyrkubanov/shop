import React from 'react';
import notImage from '../../assets/notimg.png'

const Home = ({shoes}) => {

        return (

            <section className='home'>
                <div className="container">
                    <div className="row">
                        {shoes.map((item,idx) => {
                            return(
                                <div className="col s12 m4"key={item.id}>
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
                                            <button className='card__btn' type='button'>Buy</button>
                                        </div>
                                    </div>
                                </div >
                            )
                        })}

                    </div>
                </div>
            </section>
        )



};

export default Home;