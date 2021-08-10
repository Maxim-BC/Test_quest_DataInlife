import React from "react";
import "./Footer.css";
export default function Footer({totalPrice, totalQuantity}) {
  return (
    <div className="box-footer">
        <button type="submit" className="box-footer__btn-add-Goods">в корзину</button>
        <div className="footer-box-text">
        <p className="footer-text">Общая сумма: {totalPrice}</p>
        <p className="footer-text">Всего товара: {totalQuantity}</p>
        </div>
    </div>
  );
}
