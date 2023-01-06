import React, { useContext } from 'react';
import LocaleContext from '../../../../contexts/LocaleContext';
import { notesPageContent } from '../../../../utils/contents';

function NoteListEmpty() {
  const { locale } = useContext(LocaleContext);
  const { noteListInformation } = notesPageContent[locale];

  return (
    <section id="notes-list-empty" className="block">
      <p id="notes-list__empty" className="text-center text-lg font-bold">
        {noteListInformation}
      </p>
    </section>
  );
}

export default NoteListEmpty;
