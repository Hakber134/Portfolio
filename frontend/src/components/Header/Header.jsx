import React from 'react'
import {ReactNavbar} from "overlay-navbar"
import Logo from "../../images/Logo.png";
import {FaUserAlt} from "react-icons/fa";

const Header = () => {
  return <ReactNavbar 

  navColor1="white"
  navColor2="HSL(219, 48%, 8%)"
  burgerColor="HSL(250,100%,75%)"
  burgerColorHover="HSL(250,100%,75%)"
  logo={Logo}
  logoWidth="250px"
  logoHoverColor="HSL(250,100%,75%)"
  nav2justifyContent="space-around"
  nav3justifyContent="space-around"
  link1Text=""
  link2Text="Home"
  link3Text="Contact"
  link4Text=""
  link2Url="/"
  link3Url="/contact"
  link2ColorHover="white"
  link2Color="HSL(250,100%,75%)"
  link2Size="1.5rem"
  link2Padding="3vmax"
  link3ColorHover="white"
  link3Color="HSL(250,100%,75%)"
  link3Size="1.5rem"
  link3Padding="3vmax"
  link4Padding="0px"
  profileIcon="true"
  ProfileIconElement={FaUserAlt}
  profileIconColor="HSL(250, 100%, 75%)"
  profileIconColorHover="white"
  />
}

export default Header