import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdustsService {
  
  private productURL="http://localhost:4000/api/v1/product";
  
  constructor(private http : HttpClient) { }

  getProducts(){
    return this.http.get<any>(this.productURL)
  }
  
}
