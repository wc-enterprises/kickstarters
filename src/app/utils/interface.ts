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

export interface IProductForCart {
  id: string;
  name: string;
  quantity: number;
  imagePath: string;
  sellingPrice: string;
  colorsAvailable: string[];
  sizesAvailable: string[];
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

export interface ICategorizedProductsWithAttributesAndVariants {
  categoryId: string;
  categoryName: string;
  categoryDescription: string;
  products: IProductWithPriceVariantsAndAttributes[];
}

export interface IProductWithPriceVariantsAndAttributes {
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

  attributes: IAttribute[] | null;

  variants: IVariantWithPriceAndAttribute[] | null;
}

export interface IVariantWithPriceAndAttribute {
  id: string;
  productId: string;
  name: string;
  description: string;
  imagePath: string;
  unit: TUnits;
  unitsInStock: number;
  pricingId: string;
  sellingPrice: string;
  discount: string;
  discountUnit: TDiscountUnits;

  attributes: IAttribute[] | null;
}

export interface ICreateAttribute {
  key: string;
  value: string;
  asset: string;
}
export interface IAttribute extends ICreateAttribute {}

export interface IBlogs{
  id:string;
  image:string;
  title:string;
  description:string;
  date:string;
  author:string;

}
export interface IBlog{
  id:string;
  image:string;
  title:string;
  description:string;
  date:string;
  author:string;
  content:{  subTitle:string;
    para:string;}[]

}
