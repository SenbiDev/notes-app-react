import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NoteInput from '../components/main/notes/input/NoteInput';
import SubmitButton from '../components/main/action-button/SubmitButton';
import { addNote } from '../utils/network-data';

function AddNewPage() {
  const [note, setNote] = useState({ title: '(untitled)', body: '' });
  const navigate = useNavigate();

  async function onAddNoteHandler() {
    await addNote(note);
    navigate('/');
  }

  return (
    <NoteInput setNote={setNote}>
      <SubmitButton onAddNoteHandler={onAddNoteHandler} />
    </NoteInput>
  );
}

export default AddNewPage;
