import React, { useState, useEffect } from "react";
import "./TableGoods.css";
import { useParams } from "react-router-dom";
export default function TableGoods({ name, index, id, price, changeArray }) {
  const [quantityGoods, setQuantityGoods] = useState("");
  const [nameGoods, setNameGoods] = useState(name);
  const [priceGoods, setPriceGoods] = useState(price);
  const [ridGoods, setRidGoods] = useState(id);
  const [sumGoods, setSumGoods] = useState("");
  const params = useParams();

  useEffect(() => setQuantityGoods(""), [params.id]);

  const changeQuantity = (e) => {
    setRidGoods(ridGoods);
    if (
      10001 > e.target.value &&
      e.target.value > -1 &&
      e.target.value !== "-"
    ) {
      setQuantityGoods();
      setSumGoods(priceGoods * e.target.value);
      changeArray(ridGoods, e.target.value);
    }
  };

  return (
    <tr className="table-goods__tr" key={index}>
      <td className="table-goods__td">{ridGoods}</td>
      <td className="table-goods__td">{nameGoods}</td>
      <td className="table-goods__td">{priceGoods}</td>
      <td className="table-goods__td">
        <label className="table-goods__label">
          <input
            value={quantityGoods}
            onChange={changeQuantity}
            type="number"
            min="1"
            max="10000"
            className="table-goods__input"
          />
        </label>
      </td>
      <td className="table-goods__td-sum">{sumGoods}</td>
    </tr>
  );
}
