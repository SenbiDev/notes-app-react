import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import parser, { domToReact } from 'html-react-parser';
import { showFormattedDate } from '../../../../utils';

function NoteItem({
  id, title, body, createdAt,
}) {
  const parserOptions = {
    replace: ({ name, children }) => {
      if (name && name === 'div') {
        return (
          <span className="block">
            {domToReact(children)}
          </span>
        );
      }
    },
  };

  return (
    <article id="note-item" className="m-2 border-t-8 border-2 border-slate-900 p-5 rounded-md">
      <h3 id="note-item__title" className="text-left text-lg font-bold mb-1">
        <Link to={`/notes/${id}`} className="underline decoration-2">
          {title}
        </Link>
      </h3>
      <p id="note-item__createdAt" className="text-left font-semibold mb-4">
        {showFormattedDate(createdAt)}
      </p>

      <p id="note-item__body" className="text-left text-lg font-medium leading-normal overflow-hidden text-ellipsis">
        {parser(body, parserOptions)}
      </p>
    </article>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteItem;
