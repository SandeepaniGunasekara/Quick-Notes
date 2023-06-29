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
  emptyNote:Note= {
    id:0,
    title:'',
    body:''
  };
 currentNote!: Note;
 constructor() {
   this.newEmptyNote();
 }
 newEmptyNote(){
   this.currentNote=JSON.parse(JSON.stringify(this.emptyNote))
 }

  submit() {
    if (this.currentNote.id==0){
      let note:Note ={
        title:this.currentNote.title,
        body:this.currentNote.body,
        id:Math.random()*100
      }
      this.notes.push(note);
    }
    else {
      const index=this.notes.findIndex(note=>{
        note.id=this.currentNote.id;
      })
      this.notes[index]=this.currentNote
    }
    this.expanded=false;

  }

}

