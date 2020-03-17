import { Component, OnInit } from '@angular/core';
import {HttpserviceService} from '../../services/httpservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public list:any="";
  constructor(public service : HttpserviceService) { }

  ngOnInit(): void {
    
    var api:any = "http://127.0.0.1:8088/getSay"; 
    this.service.getAll(api).then((response)=>{
        this.list = response;
    });

  }

}
