import React from "react";

const Card = ({ image, title, text }) => {
    return (
        <div className="col-md-3 mb-4">
            <div className="card h-100">
                <div className="bg-secondary" style={{ height: "200px" }}></div> {/* Simula la imagen con fondo gris */}
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <a href="#" className="btn btn-primary mt-auto">Find out more!</a>
                </div>
            </div>
        </div>
    );
};

export default Card;
