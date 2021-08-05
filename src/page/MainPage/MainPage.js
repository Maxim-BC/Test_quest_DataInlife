import React, { useState, useEffect } from "react";
import { getList } from "../../api";
import ProductSections from "../../components/ProductSections/ProductSections";
import Table from "../../components/Table/Table";
import { useParams } from "react-router-dom";
import "./MainPage.css";
export default function MainPage() {
  const [listSections, setListSections] = useState([]);
  const [idList, setIdList] = useState(null);
  const params = useParams();

  useEffect(
    () =>
      getList().then((data) => {
        setListSections(data);
        setIdList(params.id);
      }),
    [params.id]
  );
  const listProductSections = listSections.map((item, index) => {
    return <ProductSections key={index} id={item.rid} name={item.rname} />;
  });
  const targetSections = listSections.find((item) => item.rid === idList);
  const result =
    idList === undefined ? (
      <p className="main-page__text-not-selected">Выберите категорию товара</p>
    ) : (
      <Table targetSections={targetSections} />
    );
  return (
    <div className="main-page">
      <div className="main-page__product-categories">{listProductSections}</div>
      {result}
    </div>
  );
}
