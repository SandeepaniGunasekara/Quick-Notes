import {Component, Input} from '@angular/core';
import {Note} from "../../../models/note.model";
import {identity} from "rxjs";

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent {
  expanded = false;
  @Input() notes: Note[] = [];
  title: string='';
  body: string='';



  submit() {
    let note:Note ={
      title:this.title,
      body:this.body,
      id:Math.random()*100
    }
  this.notes.push(note);
  }

}

