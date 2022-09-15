import React from 'react';

import './Header.css';
import { images } from '../../constants'
import { SubHeading } from '../../components'
const Header = () => {
    return (

        <div id="home"
            className="app__header
  app__wrapper 
  section__padding">

            <div className="app__wrapper_info">
                <SubHeading
                    title="Chase The New Flavour"
                />
                <h1 className='app__header-h1'>
                    The Key To Fine Dining
                </h1>
                <p className='p__opensans'
                    style={{ margin: '2rem 0' }}>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                </p>
                <button type="button"
                className='custom__button'>Explore Menu</button>
            </div>

            <div className="app__wrapper_img">
<img src={images.welcome}/>
            </div>

        </div>

    )
};

export default Header;
