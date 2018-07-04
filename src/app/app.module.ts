import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from '../environments/environment';

// Addition
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';

import { NoteService } from "./service/note.service";
import { AlertsComponent } from './alerts/alerts.component';


// const appRoutes: Routes = [
//   // { 
//   //   path: "", 
//   //   component: AppComponent 
//   // }/*,
//   { 
//     path: "client/:id", 
//     component: NoteComponent
//   }
// ]

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //RouterModule.forRoot(appRoutes),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase /*,'my-app-name'*/)
  ],
  providers: [ NoteService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
