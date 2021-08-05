import React, { useState } from "react";
import "./TableGoods.css";
export default function TableGoods({ name, index, id, price }) {
  const [quantityGoods, setQuantityGoods] = useState("");
  const changeQuantity = (e) => {
    if (
      10001 > e.target.value &&
      e.target.value > -1 &&
      e.target.value !== "-"
    ) {
      setQuantityGoods(e.target.value);
    } else return;
  };
  return (
    <tr className="table-goods__tr" key={index}>
      <td className="table-goods__td">{id}</td>
      <td className="table-goods__td">{name}</td>
      <td className="table-goods__td">{price}</td>
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
      <td className="table-goods__td-sum"></td>
    </tr>
  );
}
