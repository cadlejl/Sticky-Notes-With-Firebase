import { Component, OnInit, Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import { Note } from "./model/note";

import { NoteService } from './service/note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private notes: Note[] = [];
  private currentNote = new Note(null, false, false, null);
  private keys;
  public noteAdded = false;
  

  constructor(public noteService: NoteService) {}

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
    this.currentNote.content = null;
    this.noteAdded = !this.noteAdded;
  }

  updateNote($event) {
    this.noteService.updateNote($event);
  }

  deleteNote(note: Note) {
    this.noteService.deleteNote(note);
  }
}
