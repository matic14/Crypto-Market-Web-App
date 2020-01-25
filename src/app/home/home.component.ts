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
          });
        }
        console.log(this.mydata);
      });
  }





}
