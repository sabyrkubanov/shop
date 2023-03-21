import React, { useState} from 'react';
import notImage from "../../assets/notimg.jpg";
import CartSmile from '../../assets/notFound.png'
import {Link} from "react-router-dom";
import ChangeSize from "../ChangeSize/ChangeSize";
import ByButton from "../ByButton/ByButton";

const Card = ({shoes, setShoes}) => {
    const [search, setSearch] = useState('')

    const favoritHandler = (id) => {
      setShoes(shoes.map((item) => {
          if (item.id === id) {
              return {...item, favorite: !item.favorite }
          } else {
              return item
          }
      }))
    }

    return (
        <section className='home'>
            <div className="container">
                <div className="row">
                <div className="input-field col s12 card__input">
                    <input type="search" id='search' className="validate" onChange={(e) =>setSearch(e.target.value)}/>
                    <label htmlFor="search">Search</label>
                    <div className="card__search">
                        <ion-icon name="search-outline"></ion-icon>
                    </div>


                </div>
                </div>
                {shoes.filter(item => item.title.toUpperCase().includes(search.toUpperCase())).length === 0
                    ? <div className='cart__not'>
                        <h2 className='card__not-h3'>
                            No results found for this query</h2>
                        <img className='card__not--img' src={CartSmile} alt="img"/>
                     </div>
                    : ''}
                <div className="row">
                    {shoes.filter((item,idx) => {
                        return item.title.toUpperCase().includes(search.toUpperCase())
                    }).map((item) => {
                        return(
                            <div className="col s12 m4" key={item.id}>
                                <div className="card">
                                    <div className="card-image">
                                        <img className='home__card-image' src={item.media.thumbUrl === null ? notImage : item.media.thumbUrl} alt='img'/>
                                    </div>
                                    <div className="card-content">
                                        <h3 className="home__card-title">{item.shoe.length < 40 ? item.shoe : item.shoe.slice(0, 39)} </h3>
                                        <p className='home__card-brand'><b>Brand </b>: {item.brand} {item.year}</p>
                                        <ChangeSize item={item} shoes={shoes}setShoes={setShoes}/>
                                    </div>
                                    <div className="card-action">
                                        <Link to={`/shoes/${item.title.split(' ').join('-')}`}>Learn more</Link>
                                        <ByButton item={item} shoes={shoes} count={1}/>
                                    </div>
                                    <div className="card-like" onClick={() => favoritHandler(item.id)}>
                                        {item.favorite ? <ion-icon name="heart-outline"></ion-icon> : <ion-icon name="heart"></ion-icon>}
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