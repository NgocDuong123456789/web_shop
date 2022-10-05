export interface Icon {
  icon: any;
  title: string;
  path: string;
  check: boolean;
  check1: boolean;
}
export interface product {
  title: string;
  price: string;
  priceold: string;
  image01: string;
  image02: string;
  categorySlug: string;
  colors: string[];
  slug: string;
  size: string[];
  decription: string;
  color_info: string;
  size_info: string;
  material: string;
  form: string;
  origin: string;
  gender: string;
}

export interface policy {
  name: string;
  description: string;
  icon: any;
  title: string;
}

export interface filter {
  id: number;
  name: string;
}

export interface dataCart {
  color: string;
  size: string;
  count: number;
  img: string;
  title: string;
  price: string;
}

export interface Provinces {
  name: string;
  code: number;
  districts: string[];
  division_type: string;
  phone_code: number;
}

export interface districts {
  name: string;
  code: number;
  division_type?: string;
  codename?: string;
  province_code?: number;
  wards: string[];
}

export  interface Wards {
  name: string;
  code: number;
  division_type:string
  codename: string;
  district_code: number
}
