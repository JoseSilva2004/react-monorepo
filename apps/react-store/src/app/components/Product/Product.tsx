import React from "react";

const Product: React.FC = () => {
    return (
        <div className="product">
            <section className="title">
                <h1>Productos</h1>
                <p>Elija que desea comprar</p>
            </section>
            <section className="tecnologia">
                <h2>Tecnología</h2>
                <div className="tecnologia-container">
                    <div className="tecnologia">
                        <h3>Televisor 4k OLED</h3>
                    </div>
                </div>
                <button className="button">Añadir al Carrito</button>
            </section>
        </div>
    );
}

export default Product;