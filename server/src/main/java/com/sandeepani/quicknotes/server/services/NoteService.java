package com.sandeepani.quicknotes.server.services;

import com.sandeepani.quicknotes.server.models.Note;
import com.sandeepani.quicknotes.server.repositories.NoteRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class NoteService {
    private final NoteRepository noteRepository;
    public NoteService(NoteRepository noteRepository){
        this.noteRepository=noteRepository;
    }
    public void saveNote(Note note) {
        if (note.getId()==0){
            note.setId(new Random().nextInt(10000));
        }
        this.noteRepository.save(note);
    }

    public List<Note> findNote() {
        return this.noteRepository.findAll();
    }
}
