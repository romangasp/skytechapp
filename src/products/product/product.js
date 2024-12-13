import React, { useState }  from "react";
import { useParams } from "react-router-dom";
import "./product.css";
import Legend from "../../legend/legend";
import Networks from "../../networks/networks";
import { allProducts } from "../../data/productsData";

const Product = () => {
    const { productTitle } = useParams();
    const product = allProducts.find((item) => item.title === productTitle);
    const images = product.images;
    const [selectedImage, setSelectedImage] = useState(images[0]);

    if (!product) {
        return (
            <div className="product-error">
                <h2>Producto no encontrado</h2>
                <p>El producto que buscas no está disponible.</p>
            </div>
        );
    }

    return (
        <>
            <div className="product"></div>
            <Legend />
            <div className="product-details-container">
                <div className="product-images">
                    <div className="thumbnails">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Thumbnail ${index}`}
                                className={`thumbnail ${selectedImage === image ? "active" : ""}`}
                                onClick={() => setSelectedImage(image)}
                            />
                        ))}
                    </div>
                    <div className="main-image">
                        <img src={selectedImage} alt="Producto seleccionado" />
                    </div>
                </div>
                <div className="product-description">
                    <h2>{productTitle}</h2>
                    <p>SKU: xxxxx</p>
                    <h3>Descripción</h3>
                    <p>
                        {product.description}
                    </p>
                    <h3>Características</h3>
                    {product.characteristics}
                </div>
            </div>
            <Networks />
        </>
    );
}

export default Product;