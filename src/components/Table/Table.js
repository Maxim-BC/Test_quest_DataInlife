import React from "react";
import "./Table.css";
import TableGoods from "../TableGoods/TableGoods";
export default function Table({ targetSections }) {
  const resulTitletargetSections =
    targetSections === undefined ? "" : targetSections.rname;

  const result =
    targetSections === undefined
      ? ""
      : targetSections.goods.map((item, index) => {
          return (
            <TableGoods
              key={index}
              id={item.gid}
              name={item.gname}
              price={item.gprice}
            />
          );
        });

  return (
    <table className="box-table">
      <caption className="box-table-title">{resulTitletargetSections}</caption>
      <thead>
        <tr>
          <th className="table-goods__td">Id:</th>
          <th className="table-goods__td">Название товара:</th>
          <th className="table-goods__td">Цена:</th>
          <th className="table-goods__td">Количество:</th>
          <th className="table-goods__td-sum">Сумма:</th>
        </tr>
      </thead>
      <tbody>{result}</tbody>
    </table>
  );
}
