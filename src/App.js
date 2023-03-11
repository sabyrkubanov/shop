import React, {useEffect, useState} from "react";
import {Routes,Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import NotFound from "./components/NotFound/NotFound";
import './style.scss'
import axios from "axios";
import Men from "./components/Men/Men";
import Child from "./components/Child/Child";
import Women from "./components/Women/Women";

function App() {
    const[shoes, setShoes] = useState([])
    useEffect(() => {
        axios('https://v1-sneakers.p.rapidapi.com/v1/sneakers',
            {params: {limit: '50'}, headers: {
                    'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com',
                    'x-rapidapi-key': 'ffd3b9a628msh08dbad225f58e26p132143jsn3c0454617813'}})
            .then(({data}) => setShoes(data.results))
            .catch((err) => console.log('ERROR'))
    },[])
  return (
    <section className="app">
          <Header/>
          <Routes>
              <Route path='/' element={<Home shoes={shoes} />}/>
              <Route path='/men' element={<Men/>}/>
              <Route path='/women' element={<Women/>}/>
              <Route path='/child' element={<Child/>}/>
              <Route path='/card' element={<Card/>}/>
              <Route path='*' element={<NotFound/>}/>
          </Routes>

    </section>
  );
}

export default App;
