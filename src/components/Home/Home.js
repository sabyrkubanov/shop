import React from 'react';
import notImage from '../../assets/notimg.png'

const Home = ({shoes}) => {

        return (

            <section className='home'>
                <div className="container">
                    <div className="row">
                        {shoes.map((item,idx) => {
                            return(
                                <div className="col s12 m3">
                                    <div className="card">
                                        <div className="card-image">
                                            <img className='home__card-image' src={item.media.thumbUrl === null ? notImage : item.media.thumbUrl} alt='img'/>
                                            <span className="card-title">Card Title</span>
                                        </div>
                                        <div className="card-content">
                                            <p>I am a very simple card. I am good at containing small bits of information.
                                                I am convenient because I require little markup to use effectively.</p>
                                        </div>
                                        <div className="card-action">
                                            <a href="#">This is a link</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </section>
        )



};

export default Home;