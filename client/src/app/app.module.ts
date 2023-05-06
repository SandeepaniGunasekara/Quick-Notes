import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import { HeaderComponent } from './components/header/header.component';
import { NewNoteComponent } from './components/new-note/new-note.component';
import { SavedNotesComponent } from './components/saved-notes/saved-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewNoteComponent,
    SavedNotesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
