import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const Url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';
const exchangeUrl = 'https://api.coingecko.com/api/v3/exchanges';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  makeRequest() {
    return this.http.get(Url);
  }

  exchangeRequest() {
    return this.http.get(exchangeUrl);
  }

}
