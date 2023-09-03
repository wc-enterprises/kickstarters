import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BASE_URL } from 'src/environments/environment';
import { StandardResponse, ICategorizedProducts } from '../utils/interface';

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
