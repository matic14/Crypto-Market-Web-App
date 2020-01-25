import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {

exchangeData: any =[];

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  exchangeReq() {
    this.api.exchangeRequest()
      .subscribe(exData => {
        for (const ed of (exData as any)) {
          this.exchangeData.push({
            id: ed.id,
            name: ed.name,
            year_established: ed.year_established,
            country: ed.country,
            description: ed.description,
            url: ed.url,
            image: ed.image,
            has_trading_incentive: ed.has_trading_incentive,
            trust_score: ed.trust_score,
            trust_score_rank: ed.trust_score_rank,
            trade_volume_24h_btc: ed.trade_volume_24h_btc,
            trade_volume_24h_btc_normalized: ed.trade_volume_24h_btc_normalized
          });
        }
        console.log(this.exchangeData);
      });
  }

}
