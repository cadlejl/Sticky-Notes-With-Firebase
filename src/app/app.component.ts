import { Component, OnInit } from '@angular/core';
//import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from "rxjs";

import { Note } from "./model/note";

import { NoteService } from './service/note.service';

@Component({
  /*moduleId: module.id, From old version. Don't know if it will be needed */
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //title = 'app'; // Don't know what this is for.

  private notes: Note[] = [];
  private currentNote = new Note(null, false, false, null);
  //private pathId: string;
  private keys;

  constructor(
    public noteService: NoteService,
    //public router: Router,
    //public route: ActivatedRoute,// From router
  ) {}

  ngOnInit() {
    this.noteService.getNotes().subscribe(serviceNotes => {
      this.notes = serviceNotes;
      this.noteService.getKeys().subscribe(serviceKeys => {
        this.keys = serviceKeys;
        for (let i = 0; i < this.notes.length; i++) {
          this.notes[i].key = this.keys[i].key;
        }
      })
    })
  }

  addNote() {
      let note = new Note(
        this.currentNote.content, 
        this.currentNote.completed, 
        this.currentNote.deleted,
        this.currentNote.key
      );
      this.noteService.addNote(note);
      //console.log(note);
      //this.notes.push(note);
      this.currentNote.content = null;
  }

  updateNote($event) {
    this.noteService.updateNote($event);
  }

  deleteNote(note: Note) {
    this.noteService.deleteNote(note);
    // let index = this.notes.indexOf(note);
    // this.notes.splice(index, 1);
  }
}
