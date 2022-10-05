import className from "classnames/bind";
import { useContext } from "react";
import {DataItems} from '../../../../useContext/useContext'

//@ts-ignore
import style from "./WWEKLYBEST.module.scss";
import { products } from "../../../../../data";
import { WWEKLYBESTItem } from "./WWEKLYBESTItem";
import {product } from "../../../../../interface"

const cx = className.bind(style);

export const WWEKLYBEST = () => {
  const datas= useContext<any>(DataItems)
  const dataMale = products.filter((product) => {
    return (product.gender === "nam" && product.origin==='Việt Nam')
  } );


  const handleClick=(data:product )=>{
   
    datas.setDataItem(data)
  }
  return (
    <div className={cx("swapper")}>
      <h1 className={cx("title")}>WWEKLY BEST</h1>
      <div className={cx("fashion-male")}>
        {dataMale.map((item, index) => {
          return <WWEKLYBESTItem key={index} value={item} handleClick={handleClick}/>;
        })}
      </div>
    </div>
  );
};
