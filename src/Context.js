import React, {createContext, useState} from "react";

export const CustomContext = createContext()

export const Context = (props) => {
    const[cart, setCart] = useState([]);

    const addCart = (id,shoes,size, count) => {
        const find = cart.findIndex((item) => item.shoe[0].id === id && item.shoe[0].defaultSize === size)


        if (find >= 0) {

            cart[find].count = cart[find].count + count
            setCart([...cart])
        } else {
            setCart([...cart, {
                shoe: shoes.filter(item => item.id === id),
                count: 1,
            }])
        }
    }

    const plusCountCart = (id, size) => {
        setCart(cart.map((item) => {
            if (item.shoe[0].id === id && item.shoe[0].defaultSize === size ) {
                return {...item, count : item.count + 1}
            } else {
                return item
            }
        }))
    }

    const minusCountCart = (id, size) => {

        const find = cart.findIndex((item) => item.shoe[0].id === id && item.shoe[0].defaultSize === size)

        if (cart[find].count < 2) {
            setCart(cart.filter((item) => {
                return  item.shoe[0].id !== id || item.shoe[0].defaultSize !== size

            }))
        }else {
            setCart(cart.map((item) => {
                if (item.shoe[0].id === id && item.shoe[0].defaultSize === size ) {
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
        minusCountCart,

    }


    return <CustomContext.Provider value={value}>
        {props.children}

    </CustomContext.Provider>
};
