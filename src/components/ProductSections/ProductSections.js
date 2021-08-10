import React from "react";
import { Link } from "react-router-dom";
import "./ProductSections.css";
export default function ProductSections({ name, id, index }) {
  const classResult = id === undefined ? "none" : "product-sectons__link";
  return (
    <Link
      to={`/product-sections/${id}`}
      className={classResult}
      key={index}
      id={id}
    >
      {name}
    </Link>
  );
}
