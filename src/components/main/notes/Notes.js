import React from 'react';
import PropTypes from 'prop-types';
import NotesList from './list/NotesList';
import NoteItem from './item/NoteItem';
import NoteListEmpty from './empty/NoteListEmpty';

function Notes({ notes, searchParams, isArchived }) {
  const keyword = searchParams.get('keyword');

  const getAllNote = () => notes
    .filter((note) => note.archived === isArchived)
    .map((note) => (
      <NoteItem key={note.id} {...note} />
    ));

  const searchParamResult = () => notes
    .filter((note) => note.archived === isArchived)
    .filter((note) => (note.title).match(new RegExp(keyword, 'i')))
    .map((note) => (
      <NoteItem key={note.id} {...note} />
    ));

  return (
    <>
      {
        (notes.filter((note) => note.archived === isArchived).length === 0) // condition
          ? <NoteListEmpty />
          : (
            (keyword === null || keyword === '') // condition
              ? <NotesList childComponent={getAllNote()} />
              : (
                (searchParamResult().length > 0) // condition
                  ? <NotesList childComponent={searchParamResult()} />
                  : <NoteListEmpty />
              )
          )
      }
    </>
  );
}

Notes.propTypes = {
  notes: PropTypes.array.isRequired,
  searchParams: PropTypes.object.isRequired,
  isArchived: PropTypes.bool.isRequired,
};

export default Notes;
