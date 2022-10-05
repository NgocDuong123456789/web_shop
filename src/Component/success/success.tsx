import className from "classnames/bind";
import { memo } from "react";
import {Link} from 'react-router-dom'
import {Path} from '../Config/Path'
import { Header } from "../Layouts/Header/Header";
import { Footer } from "../Layouts/Footer/Footer";
//@ts-ignore
import style from "./success.module.scss";

const cx = className.bind(style);

export const Success = () => {
  return (
    <div className={cx("swapper")}>
      <Header />
      <div className={cx("context")}>
       <div>
       <h3>Bạn đã đặt hàng thành công</h3>
        <p>
          Chúng tôi sẽ liên lạc với bạn qua số điện thoại để xác nhận lại đơn
          hàng.
        </p>
        <p>Xin chân thành cảm ơn quý khách!</p>
        <Link to={Path.FashionMale}>
        <button>Tiếp tục mua hàng</button>
        </Link>
       
       </div>
      </div>
      <Footer />
    </div>
  );
};

