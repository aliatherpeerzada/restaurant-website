import React from 'react';
import {SubHeading} from '../../components'
import './Chef.css';
import {images} from '../../constants'
const Chef = () => (

<div className="app__bg app__wrapper section__padding">

<div className="app__wrapper_img app___wrapper_img-reverse">
  <img src={images.chef}/>
</div>

<div className="app__wrapper_info">
  <SubHeading title="Chef's Words" />
  <h1 className="headtext__cormorant">
    What We Beleive In
  </h1>

<div className="app__chef-content">
  <div className="app__chef-content_quote">
    <img src={images.quote} alt="" />
    <p className="p__opensans">
    orem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget enim nec lorem ornare convallis finibus semper urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    </p>
  </div>
  <p className="p__opensans">
  orem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget enim nec lorem ornare convallis finibus semper urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
  </p>
</div>

<div className="app__chef-sign">
  <p>Levin Luo</p>
  <p className="p__opensans">
    Chef & Founder
  </p>

<img src={images.sign}/>
</div>

</div>

</div>

);

export default Chef;
