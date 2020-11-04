import React from 'react'

export const JournalEntry = () => {
     return (
          <div className="journal__entry pointer">
               <div 
                    className="journal__entry-picture"
                    style={{
                         backgroundSize: 'cover',
                         backgroundImage: 'url(https://i.pinimg.com/originals/80/48/ec/8048eccbb8480be27d14c0ac8dc2468b.jpg)'
                    }}
               ></div>
               <div className="journal__entry-body">
                    <p className="journal__entry-title">
                         Un nuevo dia
                    </p>
                    <p className="journal__entry-content">
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
               </div>
               <div className="journal__entry-date-box">
                    <span>Monday</span>
                    <h4>28</h4>
               </div>
          </div>
     )
}
