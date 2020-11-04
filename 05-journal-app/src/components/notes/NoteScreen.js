import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
     return (
          <div className="notes__main-content">
               <NotesAppBar />
               <div className="notes__content">
                    <input 
                         type="text"
                         placeholder="Some Awsome title"
                         className="notes__title-input"
                         autoComplete="off"
                    />
                    <textarea
                         placeholder="What happened today"
                         className="notes__textarea"
                    />
                    <div className="notes__image">
                         <img
                              src="https://i.pinimg.com/originals/08/28/e8/0828e864c48a2fb94c6977029b16115c.jpg"
                              alt="imagem"
                         />
                    </div>
               </div>
          </div>
     )
}
