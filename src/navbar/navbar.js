import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close"
import "./navbar.css";

function Navbar() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <a href="#home">
            <div className="image-container">
              <img
                src="/skytech-logo.png"
                alt="Technology"
                style={{
                  width: "50%",
                  height: "70%",
                  top: "105px",
                  gap: "0px",
                  opacity: "0px",
                }}
              />
            </div>
          </a>
        </div>

        {isMobile ? (
          <>
            <div className="hamburguer-icon" onClick={toggleMenu}>
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </div>
            {menuOpen && (
              <ul className="nav-links-mobile">
                <li>
                  <a href="#home" onClick={toggleMenu}>
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#products" onClick={toggleMenu}>
                    Productos
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={toggleMenu}>
                    Acerca de
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={toggleMenu}>
                    Contacto
                  </a>
                </li>
              </ul>
            )}
          </>
        ) : (
          <ul className="nav-links">
            <li>
              <a href="#home">Inicio</a>
            </li>
            <li>
              <a href="#products">Productos</a>
            </li>
            <li>
              <a href="#about">Acerca de</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
