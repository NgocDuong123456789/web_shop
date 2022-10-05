import { ReactNode } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import className from "classnames/bind";
// @ts-ignore
import style from "./DefaultLayout.module.scss";
import { HomeIcon } from "../Siderbar/HomeIcon/HomeIcon";
const cx = className.bind(style);
export const DefaultLayout: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <div className={cx("swapper")}>
      <div className={cx("Header")}>
        <Header />
      </div>
      <div className={cx("body")}>
        <div className={cx('slibar')}>
          <HomeIcon />
        </div>
        {children}
      </div>
      <div className={cx("Footer")}>
        <Footer />
      </div>
    </div>
  );
};
