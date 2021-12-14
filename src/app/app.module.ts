import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularFireModule } from '@angular/fire';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBfHokdoPQVykiRLIletCPMc3_Mz3oaH8c",
      authDomain: "chms-gcoen.firebaseapp.com",
      databaseURL: "https://chms-gcoen-default-rtdb.firebaseio.com",
      projectId: "chms-gcoen",
      storageBucket: "chms-gcoen.appspot.com",
      messagingSenderId: "777961077560",
      appId: "1:777961077560:web:9874261ae7bd5cba2c5fcd",
      measurementId: "G-H9RNC5LB12"
    }),
    CommonModule,
    BrowserModule,
  ],
  providers: [AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
