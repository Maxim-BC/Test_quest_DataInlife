import React, { useState } from "react";
import "./Table.css";
import TableGoods from "../TableGoods/TableGoods";
import Footer from "../Footer/Footer";
import { registerList } from "../../api";
export default function Table({ targetSections }) {
  const [arrayFavorites, setArrayFavorites] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const resulTitletargetSections =
    targetSections === undefined ? "" : targetSections.rname;

  // let formData = new FormData();

  const changeArray = (idProduct, quantityGoods, sumPrice) => {
    // formData.set(`product[${idProduct}]`, quantityGoods);
    const array = arrayFavorites;
    const filterNewArray = array.filter((item) => item.id !== idProduct);
    const item = {
      id: idProduct,
      quantity: quantityGoods,
      totalPrice: sumPrice,
    };
    const newArray = [...filterNewArray, item];
    setArrayFavorites(
      newArray.filter((item) => item.quantity !== "0" && item.quantity !== "")
    );
    console.log(arrayFavorites);
  };

  const result =
    targetSections === undefined ? (
      <tr className="box-table__tr-none">
        <td>N/A</td>
      </tr>
    ) : (
      targetSections.goods.map((item) => {
        return (
          <TableGoods
            key={item.gid}
            id={item.gid}
            name={item.gname}
            price={item.gprice}
            changeArray={changeArray}
          />
        );
      })
    );
  const submit = (e) => {
    e.preventDefault();
    // formData.forEach((value, key) => registerList(key, value));
    arrayFavorites.forEach((item) =>
      registerList(`product[${item.id}]`, item.quantity)
    );

    const arrPrice = arrayFavorites.map((item) => {
      return +item.totalPrice;
    });
    const resultPrice = arrPrice.reduce(function (sum, elem) {
      return sum + elem;
    }, 0);
    const arrQuantity = arrayFavorites.map((item) => {
      return +item.quantity;
    });
    const resultQuantity = arrQuantity.reduce(function (sum, elem) {
      return sum + elem;
    }, 0);
    setTotalPrice(resultPrice);
    setTotalQuantity(resultQuantity);
  };

  return (
    <form className="form__table" onSubmit={submit}>
      <table className="box-table">
        <caption className="box-table-title">
          {resulTitletargetSections}
        </caption>
        <thead>
          <tr>
            <th className="table-goods__th">Id:</th>
            <th className="table-goods__th">Название товара:</th>
            <th className="table-goods__th">Цена:</th>
            <th className="table-goods__th">Количество:</th>
            <th className="table-goods__th-sum">Сумма:</th>
          </tr>
        </thead>
        <tbody>{result}</tbody>
      </table>
      <Footer totalPrice={totalPrice} totalQuantity={totalQuantity} />
    </form>
  );
}
