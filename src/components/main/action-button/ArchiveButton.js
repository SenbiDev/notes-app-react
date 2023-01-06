import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { MdArchive, MdUnarchive } from 'react-icons/md';

function ArchiveButton({ id, getNote, onArchiveNoteHandler }) {
  const [archived, setArchived] = useState(false);

  useEffect(() => {
    async function fetchNote(paramId) {
      const { data } = await getNote(paramId);
      const isArchived = data.archived;
      setArchived(isArchived);
    }

    fetchNote(id);
  }, []);

  const onClickEventHandler = (e) => {
    e.preventDefault();
    onArchiveNoteHandler(archived, id);
  };

  return (
    <button id="archive_action" type="button" title="Arsipkan" onClick={onClickEventHandler}>
      {
        (archived)
          ? <MdUnarchive className="text-6xl border-4 border-neutral-900 rounded-full p-1" />
          : <MdArchive className="text-6xl border-4 border-neutral-900 rounded-full p-1" />
      }
    </button>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string,
  getNote: PropTypes.func,
  onArchiveNoteHandler: PropTypes.func,
};

export default ArchiveButton;
