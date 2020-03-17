import { Injectable } from '@angular/core';
import axios from 'axios';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ResponseInfo } from '../services/response-info';
@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(public http:HttpClient) { }

  save(api:any,param:any){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
    //var api = "http://127.0.0.1:8088/saveSay"; 
    return new Promise((resolve,reject)=>{
      this.http.post<ResponseInfo>(api,param,httpOptions).subscribe(
        res=>{
          console.log(res.ret)
          resolve(res.ret);
        }
      )
    })
      
  }


  getAll(api:any){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
    return new Promise((resolve,reject)=>{
      this.http.get(api).subscribe(
        res=>{
          console.log(res)
          resolve(res);
        }
      )
    })
  }

}
