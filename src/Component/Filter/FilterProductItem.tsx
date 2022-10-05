import { DataItems } from "../useContext/useContext";
import { useContext } from "react";
import className from "classnames/bind";
//@ts-ignore
import style from "./Filter.module.scss";
import { filter } from "../../interface";
const cx = className.bind(style)

interface Filter {
  FilterProduct: filter;
  handleChange3:(name:string)=>any
}

export const FilterProductItem: React.FC<Filter> = ({ FilterProduct , handleChange3}) => {
  const datas = useContext<any>(DataItems);
  return (
    <div className={cx("FilterProduct-item")}>
      <input type="checkbox" id={`input${FilterProduct.id}`} 
      onChange={()=>handleChange3(FilterProduct.name)}
      checked={datas.data.includes(FilterProduct.name)}
      />
      <label htmlFor={`input${FilterProduct.id}`}>{FilterProduct.name}</label>
    </div>
  )
}
