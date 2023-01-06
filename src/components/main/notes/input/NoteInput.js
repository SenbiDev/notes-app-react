import React, { useState } from 'react';
import PropTypes from 'prop-types';

function NoteInput({ setNote, children }) {
  const [titleInput, setTitleInput] = useState('');

  const onChangeEventHandler = (e) => {
    setNote({ title: titleInput, body: e.target.innerHTML });
  };

  return (
    <section id="add-new-page" className="add-new-page__action">
      <div id="add-new-page__input" className="mt-14 md:text-center">
        <input
          id="add-new-page__input__title"
          className="bg-[#EEEEEE] w-full md:w-11/12 h-full md:text-left  text-7xl font-semibold p-1"
          placeholder="Catatan rahasia"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
        />
        <div
          id="add-new-page__input__body"
          className="bg-[#EEEEEE] w-full md:w-11/12 md:text-left md:m-auto text-slate-800 h-screen text-2xl font-medium p-2"
          data-placeholder="Sebenarnya saya adalah ...."
          contentEditable="true"
          onInput={onChangeEventHandler}
        />
      </div>

      <div id="add-new-page__action" className="text-5xl fixed right-4 bottom-9">
        {children}
      </div>
    </section>
  );
}

NoteInput.propTypes = {
  setNote: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};

export default NoteInput;
