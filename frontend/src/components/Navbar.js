import React from 'react';

const navbar = () => {

    return (

            <nav className='navbar'>
                <div className='navbar__top'>
                    <div className='navbar__top__logo'>
                        <a className='navbar__top__logo__link' href='/'>Palawan Estate</a>
                    </div>
                    <div className='navbar__top__auth'>

                    </div>
                </div>
                <div className='navbar__bottom'>
                    <li className='navbar__bottom__item'>
                        <a className='navbar__bottom__item__link' exact href='/'>Home</a>
                    </li>
                    <li className='navbar__bottom__item'>
                        <a className='navbar__bottom__item__link' exact href='/listings'>Listings</a>
                    </li>
                    <li className='navbar__bottom__item'>
                        <a className='navbar__bottom__item__link' exact href='/about'>About</a>
                    </li>
                    <li className='navbar__bottom__item'>
                        <a className='navbar__bottom__item__link' exact href='/contact'>Contact</a>
                    </li>
                </div>
            </nav>

    );
};



export default navbar;