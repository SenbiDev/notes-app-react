import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import { showFormattedDate } from '../../../../utils';
import LoadingProgress from '../../../loading/LoadingProgress';

function NoteDetail({
  children, id, getNote,
}) {
  const [result, setResult] = useState(null);
  const [state, setState] = useState('wait');

  useEffect(() => {
    async function fetchNote(paramId) {
      const { data } = await getNote(paramId);
      setResult(data);

      if (data === null) {
        setState('error');
      }
    }
    fetchNote(id);
  }, []);

  return (
    <>
      {
        (result === null && state === 'wait')
          ? <LoadingProgress />
          : (result === null && state === 'error')
            ? <Navigate to="/page-not-found" />
            : (
              <section id="detail-page" className="p-8 md:m-14">
                <h3 id="detail-page__title" className="text-5xl md:text-7xl break-words font-bold mb-2">
                  {result.title}
                </h3>
                <p id="detail-page__createdAt" className="text-md font-medium">
                  {showFormattedDate(result.createdAt)}
                </p>
                <div id="detail-page__body" className="mt-9 text-lg font-medium">
                  {parser(result.body)}
                </div>

                <div id="detail-page__action" className="w-36 flex flex-row fixed right-8 bottom-10 justify-between">
                  {children}
                </div>
              </section>
            )
        }
    </>
  );
}

NoteDetail.propTypes = {
  id: PropTypes.string.isRequired,
  getNote: PropTypes.any,
  children: PropTypes.array.isRequired,
};

export default NoteDetail;
