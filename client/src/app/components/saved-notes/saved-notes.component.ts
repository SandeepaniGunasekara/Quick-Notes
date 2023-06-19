import { Component } from '@angular/core';
import {Note} from "../../../models/note.model";

@Component({
  selector: 'app-saved-notes',
  templateUrl: './saved-notes.component.html',
  styleUrls: ['./saved-notes.component.css']
})
export class SavedNotesComponent {
  notes: Note[]=[];

}
