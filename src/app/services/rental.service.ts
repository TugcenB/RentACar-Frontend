import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDetailDto } from '../models/rentalDetailDto';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44304/api';

  constructor(private httpClient: HttpClient) {}

  getRentals(): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + '/Rentals/getall';
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }
  getRentalDetails(): Observable<ListResponseModel<RentalDetailDto>> {
    let newPath = this.apiUrl + '/Rentals/getrentaldetails';
    return this.httpClient.get<ListResponseModel<RentalDetailDto>>(newPath);
  }
}
