import React from "react";
import "./Footer.css";
import { registerList } from "../../api";
export default function Footer() {
  return (
    <div className="box-footer">
        <button type="submit" className="box-footer__btn-add-Goods">В корзину</button>
    </div>
  );
}
