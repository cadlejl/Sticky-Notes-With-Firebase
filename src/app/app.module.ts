import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Addition
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

import { Firebase } from "firebase/database";

// const appRoutes: Routes = [
//   { 
//     path: "client/:id", 
//     component: ClientDetailsComponent
//   }
// ]

// Initialize Firebase
const fbConfig = {
  apiKey: "AIzaSyBrane3AFXgBbvk-oKKdogxBdcYLTwALqI",
  authDomain: "sticky-notes-fb.firebaseapp.com",
  databaseURL: "https://sticky-notes-fb.firebaseio.com",
  projectId: "sticky-notes-fb",
  storageBucket: "sticky-notes-fb.appspot.com",
  messagingSenderId: "248265280533"
};
//firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
