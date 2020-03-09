import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var tinymce: any;
@Component({
  selector: 'app-say',
  templateUrl: './say.component.html',
  styleUrls: ['./say.component.scss']
})
export class SayComponent implements OnInit {

  public editorContent='';
  public title ='';
  constructor() { }

  ngOnInit(): void {
    tinymce.init(
      {   
          //selector: '#tinydemo',
          // selector: '#tinydemo',
          // base_url: '/tinymce',
          // plugins : 'advlist autolink link image lists preview', //字符串方式
          // toolbar: 'undo redo | styleselect | bold italic | link image',
          // width: 'auto',
          // height: 300,
          // language_url : '/languages/zh_CN.js',
          // language:'zh_CN',//注意大小写
      });
  }
  

  postContent(): void {
    //const editor = tinymce.get('mymce1');
    console.log(tinymce.activeEditor.getContent({'format':'text'}));
    console.log(this.title);
    // editor.uploadImages(success => {
    //   const url = 'http://localhost:9090/vue/upload-content';
    //   console.log('调用了此回调函数');
    //   this.httpClient.post(url, this.editorContent).subscribe(res => console.log(res));
    // });
  }
}
