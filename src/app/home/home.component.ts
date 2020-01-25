import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mydata: any =[];


  constructor(private api: ApiService) { }

  ngOnInit() {

  }


  makeRequests() {
    this.api.makeRequest()
      .subscribe(data => {
        for (const d of (data as any)) {
          this.mydata.push({
            id: d.id,
            symbol:d.symbol,
            name: d.name,
            image: d.image,
            current_price: d.current_price,
            market_cap: d.market_cap,
            market_cap_rank: d.market_cap_rank,
            total_volume: d.total_volume,
            high_24h: d.high_24h,
            low_24h: d.low_24h,
            price_change_24h: d.price_change_24h,
            price_change_percentage_24h: d.price_change_percentage_24h,
            market_cap_change_24h: d.market_cap_change_24h,
            market_cap_change_percentage_24h: d.market_cap_change_percentage_24h,
            circulating_supply: d.circulating_supply,
            total_supply: d.total_supply,
            ath: d.ath,
            ath_change_percentage: d.ath_change_percentage,
            ath_date: d.ath_date,
            roi: d.roi,
            last_updated: d.last_updated
          });
        }
        console.log(this.mydata);
      });
  }

}
