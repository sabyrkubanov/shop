import React from 'react';
import {useNavigate} from "react-router-dom";

const Card = () => {
    let history = useNavigate()
    history('/goBack')
    console.log(history)
    return (
        <div>
            Здесь будеть ваше обявление

        </div>
    );
};

export default Card;