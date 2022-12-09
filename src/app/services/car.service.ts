import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetailDto } from '../models/carDetailDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44304/api';
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + '/Cars/getall';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarById(id: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + '/Cars/getbyid?id=' + id;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetails(): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + '/Cars/getcardetails';
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
}
