import {Component, Input} from '@angular/core';
import {Note} from "../../../models/note.model";
import {NewNoteComponent} from "../new-note/new-note.component";

// @ts-ignore
@Component({
  selector: 'app-saved-notes',
  templateUrl: './saved-notes.component.html',
  styleUrls: ['./saved-notes.component.css']
})
export class SavedNotesComponent {
  notes: Note[] = [];
  longText: string = '';
  showDeleteIcon = false;
  showUpdateIcon = false;
  editingNote: Note | null = null;
  @Input() newNoteCom !:NewNoteComponent;

  showIcons() {
    this.showDeleteIcon = true;
    this.showUpdateIcon = true;
  }

  hideIcons() {
    this.showDeleteIcon = false;
    this.showUpdateIcon = false;
  }

  deleteNote(note: Note) {
    this.notes = this.notes.filter((n) => n !== note);
  }

  editNoteForm(note: Note) {
 this.newNoteCom.currentNote=note;
 this.newNoteCom.expanded=true;
  }


  saveEditedNote() {
    const index = this.notes.findIndex((note) => note === this.editingNote);
    if (index !== -1) {
      this.notes[index] = {body: "", id: 0, title: "", ...this.editingNote };
    }
    this.editingNote = null;
  }
}
