import React, { useState, useEffect } from "react";
import "./TableGoods.css";
import { useParams } from "react-router-dom";
export default function TableGoods({ name, index, id, price, changeArray }) {
  const [quantityGoods, setQuantityGoods] = useState("");
  const [nameGoods] = useState(name);
  const [priceGoods] = useState(price);
  const [ridGoods] = useState(id);
  const [sumGoods, setSumGoods] = useState("");
  const params = useParams();

  useEffect(() => setQuantityGoods(""), [params.id]);

  const changeQuantity = (e) => {
    if (
      10001 > e.target.value &&
      e.target.value > -1 &&
      e.target.value !== "-" &&
      e.target.value[0] !== "0"
    ) {
      setQuantityGoods(e.target.value);
      setSumGoods(priceGoods * e.target.value);
      changeArray(ridGoods, e.target.value, priceGoods * e.target.value);
    } else return;
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
            placeholder="не более 10тыс"
          />
        </label>
      </td>
      <td className="table-goods__td-sum">{sumGoods}</td>
    </tr>
  );
}
