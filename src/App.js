import React from "react";
import Navbar from "./navbar/navbar";
import Networks from "./networks/networks.js";
import "./App.css";
import Button from "@mui/material/Button";
import Product from "./products/product/product.js";
import ProductsSection from "./products/Products";
import ProductDetails from "./products/product-details/product-details.js";
import Form from "./form/form";
import { Card, CardMedia, useMediaQuery } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";


function App() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  return (
    <Router>
      <div>
      <ConditionalNavbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home" className="home-section">
                  <div className="image-container">
                    <img
                      src="/skytech-background.jpeg"
                      alt="Technology"
                      style={{
                        width: "100%",
                        height: "100%",
                        top: "105px",
                        gap: "0px",
                        opacity: "0px",
                      }}
                    />
                  </div>
                  <div className="subtitle">
                    <h2>Impulsamos tu mundo digital</h2>
                  </div>
                  {isMobile ? (
                    <></>
                  ) : (
                    <>
                      {" "}
                      <Button href="#contact" className="button">
                        Contáctanos
                      </Button>
                    </>
                  )}
                </section>
                <section className="products-section" id="products">
                  <div>
                    <ProductsSection />
                  </div>
                </section>
                <section className="legend-section" id="about">
                  <div className="image-container">
                    <img
                      src="/skytech-logo2.png"
                      alt="skytech-logo"
                      style={{
                        width: "60%",
                        height: "60%",
                        top: "105px",
                        gap: "0px",
                        opacity: "0px",
                      }}
                    />
                  </div>
                  <h2>Somos tu MEJOR aliado tecnológico</h2>
                  <div></div>
                </section>
                <section className="about-section" id="about">
                  {isMobile ? (
                    <>
                      <div className="text">
                        <h2>Nosotros</h2>
                        <p>
                          En SkyTech impulsamos tu mundo digital, te ofrecemos una amplia
                          gama de productos y servicios para tu empresa..
                        </p>
                      </div>
                      <Card
                        sx={{
                          height: "75%",
                          width: "75%",
                          borderRadius: "30px",
                          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="100%"
                          width="100% !important"
                          image="/us.jpeg"
                          alt="us-image"
                          className="images"
                        />
                      </Card>

                      <div className="text">
                        <p>
                          En SkyTech impulsamos tu mundo digital, te ofrecemos una amplia
                          gama de productos y servicios para tu empresa..
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Card
                          sx={{
                            borderRadius: "30px",
                            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                          }}
                        >
                          <CardMedia
                            component="img"
                            height="80%"
                            width="80%"
                            image="/us.jpeg"
                            alt="us-image"
                            className="images"
                          />
                        </Card>
                        <div className="text" style={{ flex: 1, marginRight: "2rem" }}>
                          <h2>Nosotros</h2>
                          <p>
                            En SkyTech impulsamos tu mundo digital, te ofrecemos una
                            amplia gama de productos y servicios para tu empresa..
                          </p>
                          <p>
                            En SkyTech impulsamos tu mundo digital, te ofrecemos una
                            amplia gama de productos y servicios para tu empresa..
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </section>
                <section className="contact-section" id="contact">
                  <Form />
                  <ToastContainer />
                </section>
                <Networks/>
              </>
            }
          />
          <Route path="/product/:productName" element={<ProductDetails />} />
          <Route path="/product/:productName/:productTitle" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

function ConditionalNavbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return isHome ? <Navbar /> : null;
}

export default App;
