import React from 'react'

export const Sidebar = () => {
     return (
          <aside className="journal__sidebar">
               <div className="journal__siderbar-navbar">
                    <h3>
                         <i className="far fa-moon"></i>
                         <span> Eraldo</span>
                    </h3>
                    <button className="btn">
                         Logout
                    </button>
               </div>
               <div className="journal__new-entry">
                    <i className="far fa-calendar-plus fa-5x"></i>
                    <p className="mt-5">
                         New entry
                    </p>
               </div>
          </aside>
     )
}
