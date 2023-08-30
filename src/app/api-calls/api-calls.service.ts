import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
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

export interface StandardResponse<T> {
  status: string;
  message: string;
  data: T;
}

@Injectable({
  providedIn: 'root',
})
export class ApiCallsService {
  constructor(private http: HttpClient) {}

  getCategorizedProducts(): Observable<
    StandardResponse<ICategorizedProducts[]>
  > {
    const url = `${BASE_URL}/get-categoried-products`;
    return this.http.get<StandardResponse<ICategorizedProducts[]>>(url).pipe(
      catchError((error) => {
        console.error('Error fetching categorized products:', error);
        return throwError(error);
      })
    );
  }
}
