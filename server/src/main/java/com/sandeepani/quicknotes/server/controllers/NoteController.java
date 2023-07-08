package com.sandeepani.quicknotes.server.controllers;
import com.sandeepani.quicknotes.server.models.Note;
import com.sandeepani.quicknotes.server.services.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
public class NoteController {
private final NoteService noteService;
@Autowired
public NoteController(NoteService noteService){
    this.noteService=noteService;
}

@PostMapping("notes/")
  public void addNote(@RequestBody Note note){
    this.noteService.saveNote(note);
}

@GetMapping("notes/")
    public List<Note> fetchNote(){
    return this.noteService.findNote();
}
}
