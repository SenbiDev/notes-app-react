import React, { useState, useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getArchivedNotes } from '../utils/network-data';
import SearchBar from '../components/main/search-bar/SearchBar';
import Notes from '../components/main/notes/Notes';
import LocaleContext from '../contexts/LocaleContext';
import { notesPageContent } from '../utils/contents';

function ArchivesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  const { locale } = useContext(LocaleContext);
  const { archived } = notesPageContent[locale].notesType;

  useEffect(() => {
    async function fetchActiveNotes() {
      const { data } = await getArchivedNotes();
      setNotes(data);
    }

    fetchActiveNotes();
  }, []);

  return (
    <>
      <SearchBar searchParams={searchParams} setSearchParams={setSearchParams} namePage={archived} />
      <Notes notes={notes} searchParams={searchParams} isArchived />
    </>
  );
}

export default ArchivesPage;
