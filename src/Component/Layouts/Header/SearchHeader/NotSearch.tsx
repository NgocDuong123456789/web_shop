import { AiOutlineSearch } from "react-icons/ai";
import { memo } from "react";
import className from "classnames/bind";
//@ts-ignore
import style from "./SearchHeader.module.scss";

const cx = className.bind(style);
const NotSearch = () => {
  return (
    <div className={cx("notSearch")}>
      <div className={cx("notSearch-icon")}>
        <AiOutlineSearch />
      </div>
      <p>Không có kết quả</p>
    </div>
  );
};

export default memo(NotSearch);
