import React, { Component } from "react";

//Statelesss Functional Component
const Navbar = ({ totalCounters }) => {
    console.log("Navbar - Rendered");
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar {totalCounters}
      </a>
    </nav>
  );
};

export default Navbar;
