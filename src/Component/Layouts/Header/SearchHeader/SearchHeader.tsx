import { useRef, useContext } from "react";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import className from "classnames/bind";
import { DataItems } from "../../../useContext/useContext";
import { IconClose } from "../../../icon/Icon";
import { product } from "../../../../interface";
import { products } from "../../../../data";
import { DelayDebounce } from "../../../hook/SearchHook/SearchHook";
//@ts-ignore
import style from "./SearchHeader.module.scss";
import { IconSearch } from "../../../icon/Icon";
import { SearchItem } from "./SearchItem";
import NotSearch from "./NotSearch";


const cx = className.bind(style);

export const SearchHeader = () => {
  const inputValue = useRef<any>();
  const dataSearchItem = useContext<any>(DataItems);
  const { setValue, searchValue, value } = DelayDebounce();
  const handleCloseValue = () => {
    setValue("");
    inputValue.current.focus();
  };
  const handleOutsideClick = () => {
    setValue("");
    inputValue.current.focus();
  };

  const dataSearch = products.filter((item: product) =>
    item.title.toLowerCase().startsWith(searchValue.toLowerCase())
  );
  const handleSearch = (dataSearch: product) => {
    dataSearchItem.setDataItem(dataSearch);
    setValue("");
    inputValue.current.focus();
  };
  return (
    <form className={cx("swapper")}>
      <Tippy
        interactive
        visible={value !== ""}
        render={(attrs) => (
          <div className={cx("swapperSearch")}>
            {dataSearch.length === 0 && value !== "" ? (
              <NotSearch />
            ) : (
              dataSearch.map((data, index) => (
                <SearchItem
                  key={index}
                  data={data}
                  handleSearch={handleSearch}
                />
              ))
            )}
          </div>
        )}
        onClickOutside={handleOutsideClick}
      >
        <input
          type="text"
          placeholder="Search Fashion..."
          ref={inputValue}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Tippy>
      <IconSearch />
      <div onClick={handleCloseValue}>{!!value && <IconClose />}</div>
    </form>
  );
};
