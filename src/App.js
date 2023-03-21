import React, {useEffect, useState} from "react";
import {Routes,Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import NotFound from "./components/NotFound/NotFound";
import './style/style.scss'
import axios from "axios";
import Men from "./components/Men/Men";
import Child from "./components/Child/Child";
import Women from "./components/Women/Women";
import Layout from "./components/Layout/Layout";
import ShoeMoreInfo from "./components/ShoeMoreInfo/ShoeMoreInfo";

function App() {
    const[shoes, setShoes] = useState([])

    useEffect(() => {
        axios('https://v1-sneakers.p.rapidapi.com/v1/sneakers',
            {params: {limit: '50'}, headers: {
                    'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com',
                    'x-rapidapi-key': 'ffd3b9a628msh08dbad225f58e26p132143jsn3c0454617813'
            }
            }).then(({data}) => setShoes(data.results.map((item)=>{
                if (item.gender === 'men'){
                    return {...item, size: ['38', '39', '40', '41', '42' , '43'], defaultSize: '38' ,  favorite:false}
                }else if (item.gender === 'women'){
                    return {...item, size: ['35', '36', '37', '38', '39' , '40', '41'], defaultSize: '35',  favorite:false }
                } else if (item.gender === 'unisex'){
                    return {...item, size: ['35', '36', '37', '38', '39' , '40', '41', '42', '43'], defaultSize: '35',  favorite:false }
                } else {
                    return {
                        ...item, size: ['30', '31', '32', '33', '34', '35', '36'], defaultSize: '30', favorite: false}
                }
                })))
            .catch((err) => console.log('ERROR'))
    },[])


  return (

          <section className="App">
              <Routes>
                  <Route path='/' element={<Layout/>}>
                      <Route path='' element={<Home shoes={shoes} setShoes={setShoes} />}/>
                      <Route path='shoes/:title' element={<ShoeMoreInfo shoes={shoes} setShoes={setShoes}/>}/>
                      <Route path='men' element={<Men shoes={shoes} setShoes={setShoes}/>}/>
                      <Route path='women' element={<Women shoes={shoes} setShoes={setShoes}/>}/>
                      <Route path='child' element={<Child shoes={shoes} setShoes={setShoes}/>}/>
                      <Route path='cart' element={<Cart/>}/>
                      <Route path='*' element={<NotFound/>}/>
                  </Route>
              </Routes>
          </section>
  );
}

export default App;
