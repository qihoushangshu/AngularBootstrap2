import { Injectable } from '@angular/core';
import axios from 'axios';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ResponseInfo } from '../services/response-info';
@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  public returnValue:any = '';
  constructor(public http:HttpClient) { }

  save(api:any,param:any){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
    //var api = "http://127.0.0.1:8088/saveSay"; 
    return new Promise((resolve,reject)=>{
      this.http.post<ResponseInfo>(api,param,httpOptions).subscribe(
        res=>{
          resolve(res.ret);
        }
      )
    })
      
  }

}
