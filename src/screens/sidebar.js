import React, { useState } from "react";
import logo from "../ui/logo-coral.svg";

function Sidebar() {
  const [nav, setNav] = useState([
    { label: "Home", slug: "/", icon: "icon-home" },
    { label: "Discover", slug: "discover", icon: "icon-view_list" },
    { label: "Categories", slug: "cates", icon: "icon-price-tags" },
    { label: "My Courses", slug: "my-categories", icon: "icon-briefcase" },
  ]);

  const [currentPage, setCurrentPage] = useState("/");

  const navigation = [];

  for (let i = 0; i < nav.length; i++) {
    navigation.push(
      <li key={`nav ${i} nav[i].slug`}>
        <a
          href=""
          className={`aic link noul flex c333 ${
            currentPage == nav[i].slug ? "on" : ""
          }`}
        >
          <div className={`ico  s15  ${nav[i].icon}`} />
          <h2 className="lbl s15">{nav[i].label}</h2>
        </a>
      </li>
    );
  }
  return (
    <div className="sidebar fixed">
      <a href="" className="logo bl">
        <img src={logo} alt="" className="bl" />
      </a>
      <ul className="nav">{navigation}</ul>

      <div className="updated-course flex aic">
        <div className="icon-lightbulb ico"></div>
        <div className="lbl s15 fonttb c333">
          Updated Courses
          <h2 className="author s13 c777">by Nathan Budiky</h2>
        </div>
      </div>

      <div className="stats flex aic">
        <div className="stats-box flex ">
          <div className="ico .ico-points icon-shield" />
          <h2 className="val s15 c333 fontb">1800</h2>
          <h2 className="lbl s13 c777">points</h2>
        </div>

        <div className="stats-box flex">
          <div className="ico ico-battery icon-battery_full" />
          <h2 className="val s15 c333 fontb">45.3%</h2>
          <h2 className="lbl s13 c777">points</h2>
        </div>
      </div>

      <div className="me flex aic">
        <div className="icon-lightbulb ico">
          <img src="https://placeimg.com/100/100/people" alt="" />
        </div>
        <div className="lbl s15 fonttb c333">
          Nathaniel Budikey
          <h2 className="uname s13 c777">@nathan</h2>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
