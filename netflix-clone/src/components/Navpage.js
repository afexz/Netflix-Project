import React, { useState, useEffect } from 'react'
import './navepage.css'; 
import logo from "../resource/image/netflixA.png";
import cart from "../resource/image/netfl.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PortraitIcon from "@mui/icons-material/Portrait";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";



function Navpage() {
  const [navBackground, setNavBackground] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    setNavBackground(position > 160); // Change 50 to the desired scroll position threshold
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`temune ${navBackground ? "nav-background" : ""}`}>
        <div className="temune-content">
          <ul>
            <li>
              <img src={logo} width="100" />{" "}
            </li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="temune-icons">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <PortraitIcon />
            </li>
            <li>
              <img className="netCar" src={cart} />
            </li>
            <li>
              <ArrowDropDownCircleIcon />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navpage
