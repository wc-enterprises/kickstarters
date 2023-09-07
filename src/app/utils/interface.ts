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
  productId: string;
  quantity: number;
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

export interface StandardResponse<T> {
  status: string;
  message: string;
  data: T;
}

export interface Card {
  imageUrl: string;
  title: string;
  title1: string;
  title2: string;
}
