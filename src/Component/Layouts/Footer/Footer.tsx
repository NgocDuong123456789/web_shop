import React from 'react'
import className from 'classnames/bind'
//@ts-ignore
import style from './Footer.module.scss'
const cx= className.bind(style)

export const Footer = () => {
  return (
    <div className={cx('swapper')}>
      <div className={cx('item')}>
        <h4>TỔNG ĐÀI HỖ TRỢ</h4>
        <div className={cx('contact')}>
          <p>Thắc mắc khách hàng</p>
          <p>0123456789</p>
        </div>
        <div className={cx('contact')}>
          <p>Thắc mắc đơn hàng</p>
          <p>0123456789</p>
        </div>
        <div className={cx('contact')}>
          <p>Góp ý,khiếu nại</p>
          <p>0123456789</p>
        </div>
      </div>
      <div className={cx('item')}>
        <h4>Về Chúng Tôi</h4>
        <p>Giới thiệu</p>
        <p>Liên hệ</p>
        <p>Tuyển dụng</p>
        <p>Tin tức</p>
        <p>Hệ thống cửa hàng</p>
      </div>
      <div className={cx('item')}>
        <h4>Chăm Sóc Khách Hàng</h4>
        <p>Chăm sóc đổi trả</p>
        <p>Chính sách bảo hành</p>
        <p>Chính sách hoàn tiền</p>
      </div>
      <div className={cx('item')}>
        <h4>SSSTUTTER</h4>
        <p>Với thông điệp "Refined Life", SSStutter mong muốn đem đến cho khách hàng một lối sống tinh gọn bằng các sản phẩm thời trang tinh tế.</p>
      </div>
     
    </div>
  )
}
