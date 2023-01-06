import React, { useEffect, useState, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getActiveNotes } from '../utils/network-data';
import SearchBar from '../components/main/search-bar/SearchBar';
import Notes from '../components/main/notes/Notes';
import NoteCreateButton from '../components/main/action-button/NoteCreateButton';
import LocaleContext from '../contexts/LocaleContext';
import { notesPageContent } from '../utils/contents';

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  const { locale } = useContext(LocaleContext);
  const { active } = notesPageContent[locale].notesType;

  useEffect(() => {
    async function fetchActiveNotes() {
      const { data } = await getActiveNotes();
      setNotes(data);
    }

    fetchActiveNotes();
  }, []);

  return (
    <>
      <SearchBar searchParams={searchParams} setSearchParams={setSearchParams} namePage={active} />
      <Notes notes={notes} searchParams={searchParams} isArchived={false} />
      <NoteCreateButton />
    </>
  );
}

export default HomePage;
