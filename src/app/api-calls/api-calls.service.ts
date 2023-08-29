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
  // const response = axios.get(`${BASE_URL}/get-categoried-products`);
  // return response.then((res) => res.data).catch((err) => err);
  return  [
    {
      categoryId: 'cat1',
      categoryName: 'Electronics',
      categoryDescription: 'Electronic devices and gadgets',
      currentIndex: 0,
      products: [
        {
          id: 'prod1',
          name: 'Smartphone',
          description: 'High-end smartphone with advanced features',
          imagePath: 'https://cdn.media.amplience.net/i/primark/991060606307_01?w=480&fmt=auto',
          unit: 'piece',
          unitsInStock: 50,
          pricingId: 'price1',
          sellingPrice: '800',
          discount: '10',
          discountUnit: 'percent',
        },
        {
          id: 'prod2',
          name: 'Laptop',
          description: 'Powerful laptop for gaming and productivity',
          imagePath: 'https://cdn.media.amplience.net/i/primark/991060606512_01?w=480&fmt=auto',
          unit: 'piece',
          unitsInStock: 20,
          pricingId: 'price2',
          sellingPrice: '1200',
          discount: '5',
          discountUnit: 'percent',
        },
        {
          id: 'prod3',
          name: 'Headphones',
          description: 'Wireless headphones with noise cancellation',
          imagePath: 'images/headphones.jpg',
          unit: 'piece',
          unitsInStock: 30,
          pricingId: 'price3',
          sellingPrice: '150',
          discount: '15',
          discountUnit: 'percent',
        },
        {
          id: 'prod3',
          name: 'Headphones',
          description: 'Wireless headphones with noise cancellation',
          imagePath: 'images/headphones.jpg',
          unit: 'piece',
          unitsInStock: 30,
          pricingId: 'price3',
          sellingPrice: '150',
          discount: '15',
          discountUnit: 'percent',
        },
        {
          id: 'prod3',
          name: 'Headphones',
          description: 'Wireless headphones with noise cancellation',
          imagePath: 'images/headphones.jpg',
          unit: 'piece',
          unitsInStock: 30,
          pricingId: 'price3',
          sellingPrice: '150',
          discount: '15',
          discountUnit: 'percent',
        },
        {
          id: 'prod3',
          name: 'Headphones',
          description: 'Wireless headphones with noise cancellation',
          imagePath: 'images/headphones.jpg',
          unit: 'piece',
          unitsInStock: 30,
          pricingId: 'price3',
          sellingPrice: '150',
          discount: '15',
          discountUnit: 'percent',
        },
        {
          id: 'prod3',
          name: 'Headphones',
          description: 'Wireless headphones with noise cancellation',
          imagePath: 'images/headphones.jpg',
          unit: 'piece',
          unitsInStock: 30,
          pricingId: 'price3',
          sellingPrice: '150',
          discount: '15',
          discountUnit: 'percent',
        },
        {
          id: 'prod3',
          name: 'Headphones',
          description: 'Wireless headphones with noise cancellation',
          imagePath: 'images/headphones.jpg',
          unit: 'piece',
          unitsInStock: 30,
          pricingId: 'price3',
          sellingPrice: '150',
          discount: '15',
          discountUnit: 'percent',
        },
        {
          id: 'prod3',
          name: 'Headphones',
          description: 'Wireless headphones with noise cancellation',
          imagePath: 'images/headphones.jpg',
          unit: 'piece',
          unitsInStock: 30,
          pricingId: 'price3',
          sellingPrice: '150',
          discount: '15',
          discountUnit: 'percent',
        },
        
      ],
    },
    {
      categoryId: 'cat2',
      categoryName: 'Clothing',
      categoryDescription: 'Fashionable clothing items',
      currentIndex: 0,
      products: [
        {
          id: 'prod4',
          name: 'T-Shirt',
          description: 'Comfortable cotton t-shirt for everyday wear',
          imagePath: 'images/t-shirt.jpg',
          unit: 'piece',
          unitsInStock: 100,
          pricingId: 'price4',
          sellingPrice: '25',
          discount: '20',
          discountUnit: 'percent',
        },
        {
          id: 'prod5',
          name: 'Jeans',
          description: 'Classic denim jeans with a modern fit',
          imagePath: 'images/jeans.jpg',
          unit: 'piece',
          unitsInStock: 50,
          pricingId: 'price5',
          sellingPrice: '60',
          discount: '0',
          discountUnit: 'percent',
        },
        {
         
          id: 'prod6',
          name: 'Dress',
          description: 'Elegant evening dress for special occasions',
          imagePath: 'images/dress.jpg',
          unit: 'piece',
          unitsInStock: 40,
          pricingId: 'price6',
          sellingPrice: '120',
          discount: '10',
          discountUnit: 'percent',
        },
      ],
    },
  ];
}
