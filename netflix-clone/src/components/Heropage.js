import React, { useEffect, useState } from 'react'
import './heropage.css';
import requests from '../resource/requests';

function Heropage({title, url}) {
  const [heroes, setHeroes] = useState([]);
  const BASE_URL = `https://api.themoviedb.org/3`;
  const img_url = `https://image.tmdb.org/t/p/original/`;
  
  useEffect(()=>{
    fetch(`${BASE_URL}${requests.action} `)
    .then((response)=>{
      if(!response.ok) {
        console.log("Network response error");
      }
      return response.json();
    })
    .then((data)=> {
      setHeroes(data?.results [Math.floor(Math.random() * data.results.length)])});
    
  },[]);
  // console.log(heroes);
  function truncate(str, maxLength) {
    if (typeof str !== "string") {
      return "";
    }
    if (str.length <= maxLength) {
      return str;
    } else {
    return str.slice(0, maxLength) + "...";
  }
}

  return (
    <div className="checking">
      <div
        className="neptun-wrapper"
        style={{
          // width:'100%',
          // height: "500px",
          backgroundSize: "cover",
          backgroundImage: `url('${img_url}/${heroes?.backdrop_path}')`,
          // backgroundPosition: "center center",

          //  backgroundSize: "cover",
          //   backgroundRepeat: "no-repeat",
          //   backgroundPosition: "center",
          //   backgroundAttachment: "fixed",
        }}
      >
        <div className="titleBtnDisc-wrapper">
          <div className="neptun-title">
            <h1>{heroes?.title || heroes?.name || heroes?.original_name}</h1>
            <div className="btn-wrapper">
              <button className="neptun-btn">Play</button>
              <button className="neptun-btn">My List</button>
            </div>
            <p className="neptun-description">
              {truncate(heroes?.overview, 125)}
            </p>
            {/* <div className="neptun-bottom-fade"></div> */}
          </div>
        </div>
        <div className="neptun-bottom-fade"></div>
      </div>
      {/* <div className="neptun-bottom-fade"></div> */}
    </div>
  );
}


export default Heropage;
