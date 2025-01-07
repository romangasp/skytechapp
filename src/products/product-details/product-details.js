import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Networks from "../../networks/networks";
import Legend from "../../legend/legend";
import "./product-details.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import {
  allProducts,
  bagsData,
  computerData,
  harddiskData,
  keyboardData,
  pendrivesData,
  ramsData,
} from "../../data/productsData";
import { useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const productDataMap = {
  bags: bagsData,
  pendrives: pendrivesData,
  harddisk: harddiskData,
  notebooks: computerData,
  rams: ramsData,
  keyboard: keyboardData,
};

const productTitles = {
  bags: "Mochilas",
  pendrives: "Pendrives",
  harddisk: "Discos Duros",
  notebooks: "Notebooks",
  rams: "RAMs",
  keyboard: "Teclados",
};

const ProductDetails = () => {
  const { productName } = useParams();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (productName && productDataMap[productName]) {
      setProducts(productDataMap[productName]);
    } else {
      setProducts(allProducts);
    }
  }, [productName]);

  const handleClick = (key) => {
    if (productDataMap[key]) {
      setProducts(productDataMap[key]);
    }
  };

  const buttons = Object.keys(productDataMap).map((key) => (
    <Button key={key} variant="contained" onClick={() => handleClick(key)}>
      {productTitles[key]}
    </Button>
  ));

  return (
    <>
      <Legend />
      <div className="product-details">
        {isMobile ? (
          <>
            <div className="hamburguer-icon" onClick={toggleMenu}>
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </div>
            {menuOpen && (
              <div className="side-bar">
                <Box
                  sx={{
                    width: "30%",
                  }}
                >
                  <ButtonGroup
                    orientation="vertical"
                    aria-label="Vertical button group"
                    variant="contained"
                    sx={{
                      backgroundColor: "#1B262C",
                      ".MuiButtonBase-root": {
                        color: "white",
                        backgroundColor: "#0F4C75",
                        "&:hover": {
                          backgroundColor: "#3282B8",
                        },
                      },
                      border: "1px solid #BBE1FA",
                    }}
                  >
                    {buttons}
                  </ButtonGroup>
                </Box>
              </div>
            )}
          </>
        ) : (
          <>
            <Box
              sx={{
                width: "30%",
              }}
            >
              <ButtonGroup
                orientation="vertical"
                aria-label="Vertical button group"
                variant="contained"
                sx={{
                  backgroundColor: "#1B262C",
                  ".MuiButtonBase-root": {
                    color: "white",
                    backgroundColor: "#0F4C75",
                    "&:hover": {
                      backgroundColor: "#3282B8",
                    },
                  },
                  border: "1px solid #BBE1FA",
                }}
              >
                {buttons}
              </ButtonGroup>
            </Box>
          </>
        )}

        <div className="grid-container">
          {products.map((product, index) => (
            <div className="product-item" key={index}>
              <span className="product-title">{product.title}</span>
              <img
                src={product.images[0]}
                alt={product.title}
                className="images"
              />
              <Link to={`/product/${productName}/${product.title}`}>
                <Button className="button">VER MÁS</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Networks />
    </>
  );
};

export default ProductDetails;
