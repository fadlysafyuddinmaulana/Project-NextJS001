"use client";

import React, { useState } from "react";
import "./Header.css";
import Nav from "./Nav";
import Sci from "./sci";
import SearchForm from "./SearchForm";

export default function Header() {
  const [open, setOpen] = useState(false);
  const handleFormOpen = (e: Event | any) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center">
          {/* <img src="" alt="" /> */}
          <h1>Berita Satu</h1>
        </a>
        <Nav />
        <div className="position-relative">
          <Sci />
          <a className="mx-2 js-search-open" onClick={handleFormOpen}>
            <span className="bi-search color-black"></span>
          </a>
          <SearchForm active={open} formOpen={handleFormOpen} />
        </div>
      </div>
    </header>
  );
}
