import React from 'react';

const Footer = () => {
    return (
            <footer className="page-footer">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h1 className="white-text"> Brand shop</h1>
                            <div className="footer-col">
                                <a href="#"><ion-icon name="logo-whatsapp"></ion-icon></a>
                                <a href="#"><ion-icon name="logo-instagram"></ion-icon> </a>
                                <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                                <a href="#"><ion-icon name="logo-tiktok"></ion-icon></a>

                            </div>

                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Address</h5>
                            <ul>

                                <li>Кыргызстан, г. Бишкек,
                                    ул. Байтик Баатыра 13
                                    (бывшая Советская,
                                    между Скрябина и Медерова)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © 2023 Copyright Text
                        <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                </div>
            </footer>
    );
};

export default Footer;