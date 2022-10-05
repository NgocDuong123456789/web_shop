import className from "classnames/bind";
import { useContext } from "react";

import {DataItems} from '../../../../useContext/useContext'
//@ts-ignore
import style from "./Fashion.module.scss";
import { products } from "../../../../../data";
import { FashionNewItem } from "./FashionNewItem";
import { product } from "../../../../../interface";

const cx = className.bind(style);

export const FashionNew = () => {

  const datas= useContext<any>(DataItems)
  const handleClick = (data: product) => {
    datas.setDataItem(data)
  };
  return (
    <div className={cx("swapper")}>
      <h1 className={cx("title")}>WHAT'S NEW</h1>

      <div className={cx("fashion-list")}>
        {products.map((item, index) => {
          return (
            <FashionNewItem
              key={index}
              product={item}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
};
