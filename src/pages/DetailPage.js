import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NoteDetail from '../components/main/notes/detail/NoteDetail';
import ArchiveButton from '../components/main/action-button/ArchiveButton';
import NoteDeleteButton from '../components/main/action-button/NoteDeleteButton';
import {
  getNote, archiveNote, unarchiveNote, deleteNote,
} from '../utils/network-data';

function DetailPage() {
  const { id: paramId } = useParams();
  const navigate = useNavigate();

  async function onArchiveNoteHandler(archived, id) {
    const conditionalAction = (archived) ? unarchiveNote : archiveNote;
    await conditionalAction(id);
    navigate('/');
  }

  async function onDeleteNoteHandler(id) {
    await deleteNote(id);
    navigate('/');
  }

  return (
    <NoteDetail id={paramId} getNote={getNote}>
      <ArchiveButton id={paramId} getNote={getNote} onArchiveNoteHandler={onArchiveNoteHandler} />
      <NoteDeleteButton id={paramId} onDeleteNoteHandler={onDeleteNoteHandler} />
    </NoteDetail>
  );
}

export default DetailPage;
