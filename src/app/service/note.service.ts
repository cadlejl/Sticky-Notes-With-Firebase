import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Note } from "../model/note";

@Injectable({ providedIn: 'root' })
export class NoteService {
  private notes: Observable<any[]>;
  private keys: Observable<any[]>;

  constructor(public afdb: AngularFireDatabase) { 
    this.notes = afdb.list('/notes/').valueChanges(); 

    this.keys = afdb.list<Note[]>('notes')
      .snapshotChanges().pipe(
        map(actions => actions.map(a => ({ 
          key: a.key
        })))
      ); 
  }

  ngOnInit() {}

  getNotes() {
    return this.notes;
  }

  getKeys() {
    return this.keys;
  }

  addNote(note: Note) {
    this.afdb.list('notes').push({
      content: note.content,
      completed: note.completed,
      deleted: note.deleted
    });
  }

  updateNote($event: Note) {
    this.afdb.object('notes/' + $event.key)
      .update({completed: $event.completed});
  }

  deleteNote(note: Note) {
    this.afdb.list('notes').remove(note.key);
  }
}