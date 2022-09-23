import React from "react";
import "./Header.css";
// import instagramLogo from "../../instagram-logo/instagram-logo.png";
import InstagramLogo from "../../customLogos/InstagramLogo";
import SearchIcon from "../../customLogos/SearchIcon";
import HomeIcon from "../../customLogos/HomeIcon";
import ShareIcon from "../../customLogos/ShareIcon";
import PostIcon from "../../customLogos/PostIcon";
import HeartIcon from "../../customLogos/HeartIcon";
import profileImg from "../../profile-picture/ajay.png";

function Header() {
  return (
    <div className="header">
      <div className="instagram-logo">
        <InstagramLogo />
      </div>
      <div className="input">
        <input className="input-field" type="text" placeholder="Search" />
        <div className="search-icon">
          <SearchIcon />
        </div>
      </div>
      <div className="header-icons">
        <div className="header-home-icon header-icon">
          <HomeIcon />
        </div>
        <div className="header-chat-icon header-icon">
          <ShareIcon />
        </div>
        <div className="header-post-icon header-icon">
          <PostIcon />
        </div>
        <div className="header-like-icon header-icon">
          <HeartIcon />
        </div>
        <div className="header-home-profile">
          <img src={profileImg} alt="error" />
        </div>
      </div>
    </div>
  );
}
export default Header;
