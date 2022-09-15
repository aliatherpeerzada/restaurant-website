import React from 'react';
import { useState } from 'react';
import {BsFillPlayFill,BsPauseFill} from 'react-icons/bs'
import {meal} from '../../constants';
import './Intro.css';

const Intro = () => {
  const handleVideo=()=>{
    setPlayVideo((prevPlayVideo)=>!prevPlayVideo)

    if(playVideo){
      vidRef.current.pause();
    }
    else{
      vidRef.current.play();
    }
  }
const [playVideo,setPlayVideo]=useState(false);
  const vidRef=React.useRef();
  return(
  <div className="app__video">

<video 
src={meal}
type="video/mp4"
loop
control={"false"}
ref={vidRef}
muted

/>
<div className="app__video-overlay flex__center">

<div className="app__video-overlay_circle 
flex__Center"
onClick={handleVideo}>

{playVideo?
<BsPauseFill color="#fff" fontSize={50}/>
:<BsFillPlayFill color="#fff" fontSize={50}/>
}

</div>

</div>
  </div>
)};

export default Intro;
