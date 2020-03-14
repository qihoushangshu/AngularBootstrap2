import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HistoryComponent } from './components/history/history.component';
import { SayComponent } from './components/say/say.component';
import { EditorModule } from '@tinymce/tinymce-angular'; 
import { FormsModule } from '@angular/forms';
//引入HttpClientModule
import { HttpClientModule,HttpClientJsonpModule} from '@angular/common/http';
import { HttpserviceService } from './services/httpservice.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoryComponent,
    SayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EditorModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [HttpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
