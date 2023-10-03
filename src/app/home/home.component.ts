import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  keyword: any = {};
  item: any = [];
  data: any;


  constructor(private service: MyserviceService) {
    this.getData();

  }

  getData() {
    this.service.getproduct().subscribe(data => {
      this.item = data;
      console.log(this.item)


    })
  }



}
