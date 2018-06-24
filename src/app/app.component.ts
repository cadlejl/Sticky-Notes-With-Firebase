import { Component } from '@angular/core';

import { Note } from "./model/note";

@Component({
  /*moduleId: module.id, From old version. Don't know if it will be needed */
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app'; // Don't know what this is for.

  private notes: Note[] = [];
  private currentNote = new Note(null, false, false);

  addNote() {
      let note = new Note(
        this.currentNote.content, 
        this.currentNote.completed, 
        this.currentNote.deleted
      );
      this.notes.push(note);
      this.currentNote.content = null;
  }

  deleteNote(note: Note) {
    let index = this.notes.indexOf(note);
    this.notes.splice(index, 1);
  }
}
