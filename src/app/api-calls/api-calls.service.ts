import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from 'src/environments/environment';

export const UNITS = ['unit', 'kg', 'packet'] as const;
export type TUnits = (typeof UNITS)[number];

const STATUS = ['ACTIVE', 'INACTIVE'] as const;
export type TProductPricingStatus = (typeof STATUS)[number];
export type TProductStatus = (typeof STATUS)[number];

const DISCOUNT_UNITS = ['percentage', 'rupees'] as const;
export type TDiscountUnits = (typeof DISCOUNT_UNITS)[number];

export interface ICategorizedProducts {
  categoryId: string;
  categoryName: string;
  categoryDescription: string;
  products: IProduct[];
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  imagePath: string;
  unit: TUnits;
  unitsInStock: number;
  pricingId: string;
  sellingPrice: string;
  discount: string;
  discountUnit: TDiscountUnits;
}

export function getCategorizedProduct() {
  const response = axios.get(`${BASE_URL}/get-categoried-products`);
  return response.then((res) => res.data).catch((err) => err);
}
