import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';
import { uiOpenModal } from '../../actions/ui';
import { eventClearActiveEvent, eventSetActive } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';
moment.locale('es');

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {

     const dispatch = useDispatch();
     const { events, activeEvent } = useSelector( state => state.calendar );

     const [lastView, setLastView] = useState( localStorage.getItem('lastView') || 'month' );

     const onDoubleClick = (e) => {
          dispatch( uiOpenModal() )
     }

     const onSelectEvent = (e) => {
          dispatch( eventSetActive( e ) );
     }

     const onViewChange = (e) => {
          setLastView(e);
          localStorage.setItem('lastView', e);
     }

     const onSelectSlot = (e) => {
          // console.log(e);
          dispatch( eventClearActiveEvent() );
     }

     const eventStyleGetter = ( event, start, end, isSelected ) => {

          const style = {
               backgroudColor: '#367CF7',
               borderRadius: '0px',
               opacity: 0.8,
               display: 'block',
               color: 'white'
          }

          return {
               style
          }
     }

     return (
          <div className="calendar-screen"> 
               <Navbar />

               <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    messages={ messages }
                    eventPropGetter={ eventStyleGetter }
                    onDoubleClickEvent={ onDoubleClick }
                    onSelectEvent={ onSelectEvent }
                    onSelectSlot={ onSelectSlot }
                    selectable={ true }
                    onView={ onViewChange }
                    view={ lastView }
                    components={{
                         event: CalendarEvent
                    }}
               />
               
               <AddNewFab />

               {
                    (!!activeEvent) && <DeleteEventFab />
               }               

               <CalendarModal />

          </div>
     )
}
