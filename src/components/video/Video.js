import React from 'react'
import "./_video.scss";

import { AiFillEye } from 'react-icons/ai';



const Video = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img src="https://i.ytimg.com/vi/P6LGqx1YCtc/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAGpnaD7mZuwzALv63qHCAWiCWUpA" alt="" />
        <span>05:43</span>
        
      </div>
      <div className="video__title">
        Create app in 5 minutes by kale
      </div>
      <div className="video__details">
        <span> 
        <AiFillEye /> 5m views •
        </span>
        <span>5 days ago  </span>
      </div>
      <div className="video__channnel">
      <img src="https://yt3.ggpht.com/6rl9vGYugrKneSe62XXmQAbbwVefK3crBlL5VjJIWqmzZOoUg1TXouz7K3Nve4XpFSkMJP9J6Q=s68-c-k-c0x00ffffff-no-rj" alt="" width="40" height="40"/>


      <p>Full Functional E-commerce Website using React JS | complete ecommerce website using react JS</p>
      </div>
    </div>
  )
}

export default Video
