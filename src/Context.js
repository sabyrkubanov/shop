import React, {createContext, useState} from "react";

export const CustomContext = createContext()

export const Context = (props) => {

    const[cart, setCart] = useState([]);

    const addCart = (id,shoes) => {
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

    const plusCountCart = (id) => {
        setCart(cart.map((item) => {
            if (item.shoe[0].id === id ) {
                return {...item, count : item.count + 1}
            } else {
                return item
            }
        }))
    }

    const minusCountCart = (id) => {

        const find = cart.findIndex((item) => item.shoe[0].id === id)

        if (cart[find].count < 2) {
            setCart(cart.filter((item) => {
                return  item.shoe[0].id !== id

            }))
        }else {
            setCart(cart.map((item) => {
                if (item.shoe[0].id === id ) {
                    return {...item, count : item.count - 1}
                } else {
                    return item
                }
            }))

        }
    }

    const count = cart.reduce((acc, rec) => {
       return acc + rec.count
    },0)


    const value = {
        count,
        cart: cart,
        addCart,
        plusCountCart,
        minusCountCart
    }


    return <CustomContext.Provider value={value}>
        {props.children}

    </CustomContext.Provider>
};
