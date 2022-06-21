import React from "react";
import {NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-menu">
        <NavLink to={"/"} className={({ isActive }) =>
              isActive ? "menu-item-class active" : "menu-item-class passive"
            }>
          <div className="navbar-menu-item">
            <i class="ri-home-line"></i>
            <span>Anasayfa</span>
          </div>
        </NavLink>
        <NavLink to={"/communities"} className={({ isActive }) =>
              isActive ? "menu-item-class active" : "menu-item-class passive"
            }>
          <div className="navbar-menu-item">
            <i class="ri-group-line"></i>
            <span>Topluluklar</span>
          </div>
        </NavLink>
        <NavLink to={"/categories"} className={({ isActive }) =>
              isActive ? "menu-item-class active" : "menu-item-class passive"
            }>
          <div className="navbar-menu-item">
            <i class="ri-grid-fill"></i>
            <span>Kategoriler</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
