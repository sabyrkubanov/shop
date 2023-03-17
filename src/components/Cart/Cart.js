import React from 'react';

const Cart = ({cart,setCart}) => {

    return (
        <div className='container'>


            <table className='centered'>
                <thead>
                <tr>
                    <th>Shoes Name</th>
                    <th>Shoes Name</th>
                    <th>Shoes Price</th>
                </tr>
                </thead>
                <tbody>
                {cart.map((item,idx) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.shoe[0].shoe}</td>
                            <td>{item.count}</td>
                            <td>{item.shoe[0].retailPrice} $</td>

                        </tr>
                    )
                })}
                </tbody>

            </table>

        </div>
    );
};

export default Cart;