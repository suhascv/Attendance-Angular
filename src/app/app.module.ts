import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPComponent } from './login-p/login-p.component';
import { HomePComponent } from './home-p/home-p.component';
import {environment} from '../environments/environment';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabase, AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import { HomepageComponent } from './homepage/homepage.component';
import { ExcelJSONComponent } from './excel-json/excel-json.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginPComponent,
    HomePComponent,
    HomepageComponent,
    ExcelJSONComponent,
    BsNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [AngularFirestore,
    AngularFireDatabase,
    AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
