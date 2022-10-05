import className from "classnames/bind";
//@ts-ignore
import style from "./Contact.module.scss";
import { Header } from "../../Layouts/Header/Header";
import { Footer } from "../../Layouts/Footer/Footer";
import { ContactOne } from "./ContactOne";
import { ContactTwo } from "./ContactTwo";
import { ContactOne1 } from "./ContactOne1";
import { ContactTwo2 } from "./ContactTwo2";
import ButtonTop from "../../ButtonTop/ButtonTop";
const cx = className.bind(style);
export const Contact = () => {
  return (
    <div>
      <Header />
      <div className={cx("container")}>
        <div className={cx("context1")}>
          <ContactOne />
          <ContactOne1 />
        </div>
        <div className={cx("context2")}>
          <ContactTwo2 />
          <ContactTwo />
        </div>
      </div>
      <Footer />
      <ButtonTop />
    </div>
  );
};
