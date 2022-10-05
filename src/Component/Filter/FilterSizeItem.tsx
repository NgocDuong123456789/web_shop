import { DataItems } from "../useContext/useContext";
import { useContext } from "react";
import className from "classnames/bind";
//@ts-ignore
import style from "./Filter.module.scss";
import { filter } from "../../interface";
const cx = className.bind(style);
interface Filter {
  FilterSize: filter;
  handleChange2: (name: string) => any;
}

export const FilterSizeItem: React.FC<Filter> = ({
  FilterSize,
  handleChange2,
}) => {
  const datas = useContext<any>(DataItems);
  return (
    <div className={cx("FilterSize-item")}>
      <input
        type="checkbox"
        id={`input${FilterSize.id}`}
        onChange={() => handleChange2(FilterSize.name)}
        checked={datas.data.includes(FilterSize.name)}
      />
      <label htmlFor={`input${FilterSize.id}`}>{FilterSize.name}</label>
    </div>
  );
};
