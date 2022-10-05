import className from "classnames/bind";
import {  useState, useEffect, useRef } from "react";
import {useForm } from 'react-hook-form'
import * as request from "../../VietnamProvinces/api";
import { Provinces, districts, Wards } from "../../../interface";
//@ts-ignore

import style from "./Contact.module.scss";

const cx = className.bind(style);
export const ContactOne = () => {
  const Ref= useRef<any>()
  const Ref1 = useRef<any>()
  // const [name, setName] = useState<string>("");
  // const [email, setEmail] = useState<string>("");
  // const [telephone, setTelephone] = useState<string>("");
  // const [address, setAddress] = useState<string>("");
  const [dataProvinces, setDataProvinces] = useState<Provinces[]>([]);
  const [codeProvinces, setCodeProvinces] = useState<number>(0);
  const [dataDistricts, setDataDistricts] = useState<districts[]>([]);
  const [codeDistrict, setCodeDistrict] = useState<number>(0);
  const [dataWards, setDataWards] = useState<Wards[]>([]);
  const {register, handleSubmit, formState:{errors}}= useForm<any>()

  const handleChangeProvinces = () => {
     Ref.current.addEventListener('change',(e:any)=>{
      setCodeProvinces(e.target.value)
     })
  };

  const handleChangeDistricts = () => {
    Ref1.current.addEventListener('change',(e:any)=>{
      setCodeDistrict(e.target.value)
     })
  };

  useEffect(() => {
    request
      .get("/api/", {
        params: {
          q: "depth=1",
        },
      })
      .then((res) => setDataProvinces(res.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    request
      .get(`/api/p/${codeProvinces}?depth=2`, {})
      .then((res) => setDataDistricts(res.data.districts))
      .catch((error) => console.log(error));
  }, [codeProvinces]);

  useEffect(() => {
    request
      .get(`/api/d/${codeDistrict}?depth=2`, {})
      .then((res) => setDataWards(res.data.wards))
      .catch((error) => console.log(error));
  }, [codeDistrict]);
const onSubmit=(data:any)=>{
  console.log(data);
  

}
  return (
    <div className={cx("contact1")}>
      <h1>Thông tin giao hàng</h1>
      <form className={cx("form")} onSubmit={handleSubmit(onSubmit)}>
        <div className={cx("controller")}>
          <input
            placeholder="*Họ và tên"
            type="text"
            
            id="name"
            {...register('name',{required:true})}
          />
            {errors.name?.type === "required" && <small>Bạn cần nhập đúng trường này</small>} 
        </div>
        <div className={cx("controller")}>
          <input
            placeholder="*Email"
            type="text"
           
            id="email"
            {...register('email',{required:true,pattern:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/})}
          />
          {
            errors.email?.type==='required' && <small>Bạn cần nhận trường này</small>
            
          }
          {
            errors.email?.type==='pattern' && <small>Bạn cần nhập đúng Email</small>
          }
        </div>
        <div className={cx("controller")}>
          <input
            placeholder="*Số điện thoại"
            type="text"
         
            id="sđt"
            {...register('sđt',{required:true})}
          />
          {
            errors.sđt?.type==='required' && <small>Bạn cần nhập trường này</small>
          }
        </div>
        <div className={cx("address")}>
          <select  onClick={ handleChangeProvinces} ref={Ref}>
            <option>Chọn</option>
            {dataProvinces.map((item) => {
              return (
                <option
                  key={item.code}
                  value={item.code}
                >
                  {item.name}
                </option>
              );
            })}
          </select>
          <select onClick={ handleChangeDistricts} ref={Ref1}>
            <option>Chọn quận</option>
            {dataDistricts.map((item) => {
              return (
                <option
                  key={item.code}
                  value={item.code}
                >
                  {item.name}
                </option>
              );
            })}
          </select>
          <select>
            <option>Chọn phường</option>
            {dataWards.map((item) => {
              return <option key={item.code}>{item.name}</option>;
            })}
          </select>
        </div>
        <div className={cx("controller")}>
          <input
            placeholder="*Số nhà tên đường"
            type="text"
          
            id="address"
            {...register('address',{required:true})}
          />
          {errors.address?.type === "required" && <small>Bạn cần đúng trường này</small>} 
        </div>
        {/* <button type='submit'>submit</button> */}
      </form>
      <p>(*) là trường không được để trống</p>
    </div>
  );
};
