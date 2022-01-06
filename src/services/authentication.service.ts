import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loginURL = "http://localhost:4000/api/v1/customer/login";
  private registerURL = "http://localhost:4000/api/v1/customer/registation";

  constructor(private http:HttpClient) { }
  
  registerUser(dt:any){
    return this.http.post<any>(this.registerURL,dt)
  }

  loginUser(dt:any){
    return this.http.post<any>(this.loginURL,dt)
  }
  

}
