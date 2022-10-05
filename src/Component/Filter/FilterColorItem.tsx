import className from "classnames/bind";
import { DataItems } from "../useContext/useContext";
import { useContext } from "react";
//@ts-ignore
import style from "./Filter.module.scss";
import { filter } from "../../interface";

const cx = className.bind(style);
interface Filter {
  FilterColor: filter;
   handleChange1: (name: string) => any;
}
export const FilterColorItem: React.FC<Filter> = ({
  FilterColor,
   handleChange1,
}) => {
  const datas = useContext<any>(DataItems);

  return (
    <div className={cx("FilterColor-item")}>
      <input
        type="checkbox"
        id={`input${FilterColor.id}`}
        onChange={() => handleChange1(FilterColor.name)}
        checked={datas.data.includes(FilterColor.name)}
      />
      <label htmlFor={`input${FilterColor.id}`}>{FilterColor.name}</label>
    </div>
  );
};
