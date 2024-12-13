import React from "react";
//import { Card, CardMedia, Typography, Grid } from "@mui/material";
import "./Products.css";
import { Link } from "react-router-dom";

const ProductsSection = () => {
    const products = [
        { key: "bags", title: "Mochilas", image: "/products-images/bag.jpeg" },
        { key: "pendrives", title: "Pendrives", image: "/products-images/pen-drive.jpeg" },
        { key: "harddisk", title: "Discos duros", image: "/products-images/hard-disk.jpeg" },
        { key: "notebooks", title: "Computadoras", image: "/products-images/computer.jpeg" },
        { key: "rams", title: "Memoria Ram", image: "/products-images/ram.jpeg" },
        { key: "keyboard", title: "Teclados", image: "/products-images/keyboard.jpeg" },
    ];

    return (
        <>
            <div className="products-container">
                <div className="description-container">
                    <h2 className="title">Conocé nuestros productos</h2>
                    <p className="description">
                        En SkyTech impulsamos tu mundo digital, te ofrecemos una amplia gama
                        de productos y servicios para tu empresa..
                    </p>
                </div>
                <div className="grid-container">
                    {products.map((product, index) => (
                        <div className="product-item" key={index}>
                            <h3 className="product-title">{product.title}</h3>
                            <Link to={`/product/${product.key}`}>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="images"
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default ProductsSection;
