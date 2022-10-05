import { NavLink } from "react-router-dom";
import className from "classnames/bind";
//@ts-ignore
import style from "./HomeIconItem.module.scss";
import { Icon } from "../../../../interface";
const cx = className.bind(style);

interface icon {
  Icon: Icon;
 
}


export const HomeIconItem: React.FC<icon> = ({Icon} ) => {

  return (
    <div
    className={cx("icon-item",{ check: Icon.check })}
  >
    <NavLink to={Icon.path} className={nav=>cx('ok',{active:nav.isActive})}>
        <Icon.icon />
        <span className={cx('title-icon')} >{Icon.title}</span>
    </NavLink>
    </div>
  );
};
