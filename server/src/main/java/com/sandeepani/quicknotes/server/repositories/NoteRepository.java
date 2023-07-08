package com.sandeepani.quicknotes.server.repositories;

import com.sandeepani.quicknotes.server.models.Note;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface NoteRepository extends MongoRepository<Note,Integer> {

}
