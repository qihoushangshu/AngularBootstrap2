import { Component, OnInit ,Injectable} from '@angular/core';

import {HttpserviceService} from '../../services/httpservice.service';
declare var tinymce: any;
@Component({
  selector: 'app-say',
  templateUrl: './say.component.html',
  styleUrls: ['./say.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class SayComponent implements OnInit {

  public editorContent:string='';
  public title:string ='';
  public ret:any ='';
  constructor(public service:HttpserviceService) { 
    
  }

  ngOnInit(): void {
    
  }
  

  postContent(): void {

    var api:any = "saveSay"; 

    var param:any= {"title":this.title,"content":tinymce.activeEditor.getContent({'format':'text'})}

    this.service.save(api,param).then((response)=>{
        this.ret = response;
    });
    //使用回调函数，使保存成功的提示1秒后自动消失
    this.callback((data)=>{
         this.ret = data;
   });
   this.title = '';
   tinymce.activeEditor.setContent("");
  }

  callback(cb){
    setTimeout(function(){ 
      var retv = '';
      cb(retv);
    },1000);
  }
}
