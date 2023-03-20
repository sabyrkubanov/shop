import React, {useEffect, useState} from "react";
import {Routes,Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import NotFound from "./components/NotFound/NotFound";
import './style/style.scss'
import axios from "axios";
import Men from "./components/Men/Men";
import Child from "./components/Child/Child";
import Women from "./components/Women/Women";

function App() {
    const[shoes, setShoes] = useState([])
    const[cart, setCart] = useState([])

    useEffect(() => {
        axios('https://v1-sneakers.p.rapidapi.com/v1/sneakers',
            {params: {limit: '50'}, headers: {
                    'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com',
                    'x-rapidapi-key': 'ffd3b9a628msh08dbad225f58e26p132143jsn3c0454617813'}})
            .then(({data}) => setShoes(data.results))
            .catch((err) => console.log('ERROR'))
    },[])

  return (

    <section className="App">
          <Header/>
          <Routes>
              <Route path='/' element={<Home cart={cart} setCart={setCart} shoes={shoes} />}/>
              <Route path='/men' element={<Men cart={cart} setCart={setCart} shoes={shoes}/>}/>
              <Route path='/women' element={<Women cart={cart} setCart={setCart} shoes={shoes}/> }/>
              <Route path='/child' element={<Child cart={cart} setCart={setCart} shoes={shoes}/>}/>
              <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
              <Route path='*' element={<NotFound/>}/>
          </Routes>

    </section>
  );
}

export default App;
