import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  apiurl = "https://dummyjson.com/products";


  constructor(private http: HttpClient) { }

  getproduct() {
    return this.http.get(this.apiurl);
  }
}
