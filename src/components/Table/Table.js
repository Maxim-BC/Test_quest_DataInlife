import React, { useState } from "react";
import "./Table.css";
import TableGoods from "../TableGoods/TableGoods";
import Footer from "../Footer/Footer";
export default function Table({ targetSections }) {
  const [arrayFavorites, setArrayFavorites] = useState([]);
  const resulTitletargetSections =
    targetSections === undefined ? "" : targetSections.rname;

  // const filterArray = (newArray, idProduct) => {
  //   if (newArray.length > 1) {
  //     const filterNewArray = newArray.filter((item) => item.id !== idProduct);

  //     setArrayFavorites(filterNewArray)
  //     console.log(arrayFavorites);
  //   } else setArrayFavorites(newArray);
  // };

  const changeArray = (idProduct, quantityGoods) => {
    const array = arrayFavorites;
    const filterNewArray = array.filter((item) => item.id !== idProduct);
    const item = { id: idProduct, quantity: quantityGoods };
    const newArray = [...filterNewArray, item];
    setArrayFavorites(
      newArray.filter((item) => item.quantity !== "0" && item.quantity !== "")
    );
    console.log(arrayFavorites);
  };

  // console.log(filterNewArray, ridGoods);

  const result =
    targetSections === undefined
      ? <tr><td>N/A</td></tr>
      : targetSections.goods.map((item, index) => {
          return (
            <TableGoods
              key={index}
              id={item.gid}
              name={item.gname}
              price={item.gprice}
              changeArray={changeArray}/>
          );
        });

  const submit = (e) => {
    e.preventDefault();
    //   const result=e.target
    //   const filterArr = result.filter((item) => item.attributes.4value > 0);
    //   const newArray = [...filterArr];
    console.log(e.target);
    //   fetch('/api', {
    //     method: 'POST',
    //     body: JSON.stringify({ products }),
    //     headers: { 'Content-Type': 'application/json' },
    //   })
    //     .then(res => res.json())
    //     .then(json => setProducts(json.products))
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
      <Footer />
    </form>
  );
}
