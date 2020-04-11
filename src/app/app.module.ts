import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { DepositoComponent } from './components/deposito/deposito.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MaterialComponent } from './components/material/material.component';
import { LoginComponent } from './components/login/login.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { YoutubeComponent } from './components/youtube/youtube.component';



@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    DepositoComponent,
    MaterialComponent,
    LoginComponent,
    YoutubeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
