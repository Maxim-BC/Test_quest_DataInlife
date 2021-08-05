import React from "react";
import { Link } from "react-router-dom";
import "./ProductSections.css";
export default function ProductSections({ name, id, index }) {
  return (
    <Link
      to={`/product-sections/${id}`}
      className="product-sectons__link"
      key={index}
      id={id}
    >
      {name}
    </Link>
  );
}
