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
    
    var api:any = "getSay"; 
    this.service.getAll(api).then((response)=>{
        this.list = response;
    });

  }

  homeDelete(id:string){
    console.log(id);
    var api:any = "homeDelete"; 
    this.service.delete(api,id).then((response)=>{
      this.list = response;
  });
  }
}
