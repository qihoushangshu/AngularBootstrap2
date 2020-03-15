import { Component, OnInit ,Injectable} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

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
  public ret:string ='';
  constructor(public http:HttpClient) { 
    
  }

  ngOnInit(): void {
    
  }
  

  postContent(): void {
    console.log(tinymce.activeEditor.getContent({'format':'text'}));
    console.log(this.title);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
    var api = "http://127.0.0.1:8088/saveSay"; 
    this.http.post(api,{"title":this.title,"content":tinymce.activeEditor.getContent({'format':'text'})},httpOptions).subscribe(
      res=>{
        this.ret = res['ret'];
      }
    )
  this.callback((data)=>{
     this.ret = data;
   });
  }

  callback(cb){
    setTimeout(function(){ 
      var retv = '';
      cb(retv);
    },1000);
  }
}
