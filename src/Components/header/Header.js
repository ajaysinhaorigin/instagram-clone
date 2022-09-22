import React from "react";
import "./Header.css";
import instagramLogo from "../../instagram-logo/instagram-logo.png";
import search from "../../icons/search.png";
import home from "../../icons/home.jpg";
import share from "../../icons/share.jpg";
import post from "../../icons/post.jpg";
import like from "../../icons/like.jpg";
import profileImg from "../../profile-picture/ajay.png";

function Header() {
  return (
    <div className="header">
      <div className="instagram-logo">
        <img src={instagramLogo} alt="error" />
      </div>
      <div className="input">
        <input className="input-field" type="text" placeholder="Search" />
        <div className="search-icon">
          <img src={search} alt="error" />
        </div>
      </div>
      <div className="header-icons">
        <div className="header-home-icon header-icon">
          <img src={home} alt="error" />
        </div>
        <div className="header-chat-icon header-icon">
          <img src={share} alt="error" />
        </div>
        <div className="header-post-icon header-icon">
          <img src={post} alt="error" />
        </div>
        <div className="header-like-icon header-icon">
          <img src={like} alt="error" />
        </div>
        <div className="header-home-profile">
          <img src={profileImg} alt="error" />
        </div>
      </div>
    </div>
  );
}

export default Header;
