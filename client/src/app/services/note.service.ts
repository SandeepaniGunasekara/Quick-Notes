import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Note} from "../models/note.model";


const url='http://localhost:8080/notes/'

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private note: any;


  constructor(private http:HttpClient) { }

  fetchNote(){
 return this.http.get<Note[]>(url)
  }

  addNote(note: Note){
 return this.http.post(url,note)//object ek ywna nisa simple note
  }
}
