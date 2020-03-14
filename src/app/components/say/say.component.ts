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

  public editorContent='';
  public title ='';
  constructor(public http:HttpClient) { 
    
  }

  ngOnInit(): void {
    
  }
  

  postContent(): void {
    console.log(tinymce.activeEditor.getContent({'format':'text'}));
    console.log(this.title);
    // this.sayInfo = new SayInfo()
    // this.sayInfo.title = this.title;
    // this.sayInfo.content = tinymce.activeEditor.getContent({'format':'text'});
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
    var api = "http://127.0.0.1:8088/saveSay"; 
    this.http.post(api,{"title":this.title,"content":tinymce.activeEditor.getContent({'format':'text'})},httpOptions).subscribe(response => {
    console.log(response); 
    });
    // this.http.post<SayInfo>(api,this.sayInfo,httpOptions).subscribe(response => {
    //   console.log(response); 
    // });
    
  }
}
